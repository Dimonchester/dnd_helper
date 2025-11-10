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

	}
}
