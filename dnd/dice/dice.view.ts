namespace $.$$ {
	export class $my_dnd_dice extends $.$my_dnd_dice {
		// Количество граней кубика
		@ $mol_mem
		sides( next?: number): number {
			return next ?? 20
		}

		// Количество кубиков
		@ $mol_mem
		count(next?: number): number {
			return next ?? 1
		}

		// Результат броска
		@ $mol_mem
		result(next = 0): number {
			return next
		}

		@ $mol_mem
		modifier(next?: number): number {
			return next ?? 0
		}

		// Текст для отображения типа кости
		dice_type(): string {
			const count = this.count()
			const sides = this.sides()
			const modifier = this.modifier()

			let mod_string = ''
			if (modifier > 0) {
				mod_string = ` + ${modifier}`
			} else if (modifier < 0) {
				mod_string = ` - ${Math.abs(modifier)}`
			}

			return `${count}d${sides}${mod_string}`
		}
		
		// Текст результата
		result_title(): string {
			const result = this.result()
			return result > 0 ? result.toString(): "."
		}
		
		// Обработчик клика по кнопке
		@ $mol_action
		roll() {
			const sides = this.sides()
			const count = this.count()
			const modifier = this.modifier()
			
			let total_result = 0
			for (let i = 0; i < count; i++) {
				total_result += Math.floor(Math.random() * sides) + 1
			}

			total_result += modifier
			
			this.result(total_result)
		}
	}
}
