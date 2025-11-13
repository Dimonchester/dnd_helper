namespace $.$$ {

	// Определяем тип для элемента списка
	type $my_dnd_note_item = {
		text: string
		completed: boolean
	}

	export class $my_dnd_notes extends $.$my_dnd_notes {

		// Хранит список всех заметок
		@ $mol_mem
		notes_list( next?: $my_dnd_note_item[] ): $my_dnd_note_item[] {
			return next ?? []
		}

		// notes_list( next?: $my_dnd_note_item[] ): $my_dnd_note_item[] {
			
		// 	// 1. Если поступили новые данные (next), сохраняем их первыми
		// 	if( next !== undefined ) {
		// 		// Приводим результат JSON.stringify к типу string, чтобы исключить ошибку записи
		// 		const data_to_store = JSON.stringify( next ) as string
		// 		$mol_state_local.value( 'my_dnd_notes', data_to_store )
		// 		return next
		// 	}
			
		// 	// 2. Получаем сохраненную строку из localStorage, 
		// 	//    приводим результат к string для совместимости чтения
		// 	const stored_data = $mol_state_local.value( 'my_dnd_notes' ) as string | null
			
		// 	// 3. Десериализуем данные, если они существуют и не являются пустой строкой.
		// 	if( stored_data ) {
		// 		// Приводим результат JSON.parse к нашему целевому типу
		// 		return JSON.parse( stored_data ) as $my_dnd_note_item[]
		// 	}
			
		// 	// Если данных нет, возвращаем пустой массив
		// 	return []
		// }

		// Хранит текст из поля ввода для новой заметки
		@ $mol_mem
		new_note_text( next?: string ) {
			return next ?? ''
		}

		// Действие при нажатии кнопки "Добавить"
		@ $mol_action
		add_note() {
			const text = this.new_note_text()
			if ( !text ) return

			const new_note = { text: text, completed: false }
			const current_list = this.notes_list()

			this.notes_list( [ ...current_list, new_note ] )
			this.new_note_text('') // Очищаем поле ввода
		}

		// Генерирует массив компонентов для отображения в $mol_list
		@ $mol_mem
		Note_rows() {
			return this.notes_list().map( ( _, index ) => this.Note_row( index ) )
		}

		// Привязка чекбокса к состоянию "completed" заметки
		@ $mol_mem_key
		note_checked( index: number, next?: boolean ) {
			const list = this.notes_list()
			const item = list[ index ]

			if ( next === undefined ) {
				return item.completed
			}

			if ( item.completed === next ) return next

			const new_item = { ...item, completed: next }
			const new_list = [ ...list.slice( 0, index ), new_item, ...list.slice( index + 1 ) ]
			this.notes_list( new_list )
			
			return next
		}

		// Привязка текстового поля к состоянию "text" заметки
		@ $mol_mem_key
		note_text( index: number, next?: string ) {
			const list = this.notes_list()
			const item = list[ index ]

			if ( next === undefined ) {
				return item.text
			}

			if ( item.text === next ) return next

			const new_item = { ...item, text: next }
			const new_list = [ ...list.slice( 0, index ), new_item, ...list.slice( index + 1 ) ]
			this.notes_list( new_list )
			
			return next
		}

		@ $mol_action
		delete_note( index: number ) {
			const list = this.notes_list();
			
			// Создаем новый массив, отфильтровав элемент по индексу
			const new_list = list.filter( ( _, i ) => i !== index );
			
			this.notes_list( new_list );
		}
		
	}
}
