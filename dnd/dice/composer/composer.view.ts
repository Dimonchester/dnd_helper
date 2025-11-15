namespace $.$$ {

	// Тип для хранения одного элемента истории
	type RollHistoryEntry = {
		id: number,
		formula: string,
		result: string,
		math: string
	}

	export class $my_dnd_dice_composer extends $.$my_dnd_dice_composer {

		@ $mol_mem
		formula( next?: string ) {
			return next ?? ''
		}

		@ $mol_mem
		modifier( next?: string ) {
			return next ?? ''
		}

		@ $mol_action
		private change_modifier( amount: number ) {
			const current_str = this.modifier().trim()
			let current_val = parseInt( current_str, 10 )
			
			// Если поле было пустым или не-числом (напр. "+"), считаем его за 0
			if ( isNaN( current_val ) ) {
				current_val = 0
			}

			const new_val = current_val + amount
			
			// Форматируем обратно в строку
			if ( new_val > 0 ) {
				this.modifier( `+${new_val}` )
			} else if ( new_val === 0 ) {
				this.modifier( '' ) // 0 - это пустая строка (или '0', как предпочитаешь)
			} else {
				this.modifier( new_val.toString() )
			}
		}

		@ $mol_action
		mod_increase() {
			this.change_modifier( 1 )
		}

		@ $mol_action
		mod_decrease() {
			this.change_modifier( -1 )
		}

		// --- НАЧАЛО БЛОКА: НОВЫЕ ДЕЙСТВИЯ ДЛЯ КНОПОК ---
		@ $mol_action
		add_d4() { this.add_to_formula('d4') }

		@ $mol_action
		add_d6() { this.add_to_formula('d6') }

		@ $mol_action
		add_d8() { this.add_to_formula('d8') }

		@ $mol_action
		add_d10() { this.add_to_formula('d10') }

		@ $mol_action
		add_d12() { this.add_to_formula('d12') }

		@ $mol_action
		add_d20() { this.add_to_formula('d20') }

		@ $mol_action
		add_d100() { this.add_to_formula('d100') }
		// --- КОНЕЦ БЛОКА ---

		// Добавляет текст к формуле (для кнопок)
		@ $mol_action
		add_to_formula( text: string ) {
			const current = this.formula().trim()
			
			if ( text === '+' || text === '-' ) {
				this.formula( `${current} ${text} ` )
				return
			}

			// Логика группировки
			if ( current === '' ) {
				this.formula( text )
				return
			}

			const parts = current.split(' ')
			const last_term = parts[parts.length - 1]

			// Случай 1: Последний терм - это тот же кубик (напр. "d4")
			if ( last_term === text ) {
				parts.pop() // Удаляем "d4"
				parts.push(`2${text}`) // Добавляем "2d4"
				this.formula( parts.join(' ') )
				return
			}
			
			// Случай 2: Последний терм - это группа тех же кубиков (напр. "2d4")
			if ( last_term.endsWith(text) ) {
				const [count_str, sides_str] = last_term.split('d')
				const die_part = `d${sides_str}`
				const count = parseInt(count_str, 10)

				if ( die_part === text && !isNaN(count) ) {
					parts.pop() // Удаляем "2d4"
					parts.push(`${count + 1}${text}`) // Добавляем "3d4"
					this.formula( parts.join(' ') )
					return
				}
			}

			// Случай 3: Все остальное (просто добавляем +)
			if ( current.endsWith( '+' ) || current.endsWith( '-' ) ) {
				this.formula( `${current} ${text}` )
			} else {
				this.formula( `${current} + ${text}` )
			}
		}

		// (ИЗМЕНЕНО) Очищает формулу и модификатор
		@ $mol_action
		clear_formula() {
			this.formula( '' )
			this.modifier( '' ) // Добавили очистку модификатора
		}

		// Хранит список всех бросков
		@ $mol_mem
		roll_history( next?: RollHistoryEntry[] ): RollHistoryEntry[] {
			return next ?? []
		}

		// Текст для главного (последнего) результата
		@ $mol_mem
		result_text() {
			const history = this.roll_history()
			return history.length > 0 ? history[0].result : '...'
		}

		// Текст для математики последнего броска
		@ $mol_mem
		math_text() {
			const history = this.roll_history()
			return history.length > 0 ? history[0].math : '...'
		}

		// Генерирует список компонентов-строк для истории (кроме последней)
		@ $mol_mem
		history_rows() {
			return this.roll_history()
				.slice( 1 ) // Берем все, кроме самого нового (он в Math_display)
				.map( entry => {
					// Используем $mol_text для отображения, т.к. $mol_row не нужен
					const text_widget = $mol_text.make({})
					// Устанавливаем текст виджета
					text_widget.text = () => `(${entry.formula}): ${entry.math}`
					return text_widget
				} )
		}

		// ГЛАВНАЯ ФУНКЦИЯ: Бросок кубика
		@ $mol_action
		roll() {
			const formula_base = this.formula().trim()
			const modifier = this.modifier().trim()
			
			// Объединяем основную формулу и модификатор
			const formula = (formula_base + ' ' + modifier).trim()
			
			if ( !formula ) return

			// 1. Нормализуем и разбиваем формулу
			// "2d20 + 5 +3" -> ["2d20", "+5", "+3"]
			const formula_spaced = formula
				.replace( /\s/g, '' ) // Убираем все пробелы
				.replace( /\+/g, ' +' ) // Ставим пробел перед +
				.replace( /\-/g, ' -' ) // Ставим пробел перед -
			
			const parts = formula_spaced.split( ' ' ).filter( p => p.trim() !== '' )
			if ( parts.length === 0 ) return

			let total_result = 0
			let math_details: string[] = []

			for ( const part of parts ) {
				let sign = 1
				let term = part

				// Определяем знак (+ или -)
				if ( part.startsWith( '+' ) ) {
					sign = 1
					term = part.substring( 1 )
				} else if ( part.startsWith( '-' ) ) {
					sign = -1
					term = part.substring( 1 )
				}
				
				// Случай 1: Это бросок кубика (напр. "2d20" или "d20")
				if ( term.includes( 'd' ) ) {
					const [ count_str, sides_str ] = term.split( 'd' )
					const count = count_str === '' ? 1 : parseInt( count_str, 10 ) // "d20" = "1d20"
					const sides = parseInt( sides_str, 10 )

					if ( isNaN( count ) || isNaN( sides ) || sides <= 0 ) continue // Пропускаем неверную часть

					let part_total = 0
					let rolls: number[] = []
					for ( let i = 0; i < count; i++ ) {
						const roll = Math.floor( Math.random() * sides ) + 1
						rolls.push( roll )
						part_total += roll
					}
					
					total_result += ( part_total * sign )
					math_details.push( `${ sign > 0 ? '+' : '-' } ${term} [${ rolls.join( ', ' ) }]` )
				
				} 
				// Случай 2: Это просто число (модификатор, напр. "5")
				else {
					const constant = parseInt( term, 10 )
					if ( isNaN( constant ) ) continue // Пропускаем неверную часть

					total_result += ( constant * sign )
					math_details.push( `${ sign > 0 ? '+' : '-' } ${ constant }` )
				}
			}

			// 3. Форматируем результат и математику
			let math_string = math_details.join( ' ' ).trim()
			// Убираем лишний "+" в начале, если он есть
			if ( math_string.startsWith( '+' ) ) {
				math_string = math_string.substring( 1 ).trim()
			}

			const final_result = total_result.toString()
			const final_math = `${ math_string } = ${ final_result }`
			
			const new_entry: RollHistoryEntry = {
				id: Date.now(), // Уникальный ID для $mol_list
				formula: formula,
				result: final_result,
				math: final_math
			}

			// 4. Обновляем историю
			const old_history = this.roll_history()
			this.roll_history( [ new_entry, ...old_history ] )
		}
	}
}
