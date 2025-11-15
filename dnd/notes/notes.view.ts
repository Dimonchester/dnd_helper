namespace $.$$ {

	type $my_dnd_note_item = {
		id: number,
		text: string,
		completed: boolean,
	}

	export class $my_dnd_notes extends $.$my_dnd_notes {

		state_key() {
			return 'my_dnd_notes_default'
		}

		@ $mol_mem
		notes_list( next?: $my_dnd_note_item[] ): $my_dnd_note_item[] {
			
			if( next !== undefined ) {
				const data_to_store = JSON.stringify( next ) as string
				$mol_state_local.value( this.state_key(), data_to_store )
				return next
			}
			
			const stored_data = $mol_state_local.value( this.state_key() ) as string | null
			
			if( stored_data ) {
				let items = [] as any[];
				try {
					items = JSON.parse( stored_data ) as any[];
					if (!Array.isArray(items)) items = [];
				} catch (e) {
					items = [];
				}
				
				items = items.filter(item => item && typeof item === 'object');

				// 1. Проверяем и мигрируем
				const needs_migration = items.some( (item: any) => typeof item.id !== 'number' || isNaN(item.id));

				if ( needs_migration ) {
					const all_ids = items.map( (item: any) => item.id )
						.filter( (id: any) => typeof id === 'number' && !isNaN(id) );
					
					let next_id = all_ids.length > 0 ? Math.max( ...all_ids ) + 1 : 1;

					items = items.map( (item: any) => {
						if (typeof item.id !== 'number' || isNaN(item.id)) {
							const migrated_item = { ...item, id: next_id };
							next_id++;
							return migrated_item;
						}
						return item;
					});
				}

				// 2. ФИЛЬТРАЦИЯ: Гарантируем, что ID валиден
				items = items.filter( (item: any) => typeof item.id === 'number' && !isNaN(item.id) );
				
				return items as $my_dnd_note_item[]
			}
			
			return []
		}

		// ИСПРАВЛЕНО: УДАЛЕНА ЛИШНЯЯ ЗАПЯТАЯ
		@ $mol_mem
		new_note_text( next?: string ) {
			return next ?? '' // <--- Здесь больше нет запятой
		}

		@ $mol_action
		add_note() {
			const text = this.new_note_text()
			if ( !text ) return

			const current_list = this.notes_list()
			
			const all_ids = current_list.map( (item: any) => item.id )
				.filter( (id: any) => typeof id === 'number' && !isNaN(id) ); 
			
			const max_id = all_ids.length > 0 ? Math.max( ...all_ids ) : 0;
			const new_id = max_id + 1;

			const new_note = { id: new_id, text: text, completed: false }

			this.notes_list( [ ...current_list, new_note ] )
			this.new_note_text('')
		}

		@ $mol_mem
		Note_rows() {
			return this.notes_list().map( ( item ) => this.Note_row( item.id ) )
		}

		@ $mol_mem_key
		note_checked( id: number, next?: boolean ) {
			const list = this.notes_list()
			const index = list.findIndex( i => i.id === id )
			if (index === -1) return false 
			
			const item = list[ index ]
			if ( next === undefined ) return item.completed
			if ( item.completed === next ) return next

			const new_item = { ...item, completed: next }
			const new_list = [ ...list.slice( 0, index ), new_item, ...list.slice( index + 1 ) ]
			this.notes_list( new_list )
			return next
		}

		@ $mol_mem_key
		note_text( id: number, next?: string ) {
			const list = this.notes_list()
			const index = list.findIndex( i => i.id === id )
			if (index === -1) return ''
			
			const item = list[ index ]
			if ( next === undefined ) return item.text
			if ( item.text === next ) return next

			const new_item = { ...item, text: next }
			const new_list = [ ...list.slice( 0, index ), new_item, ...list.slice( index + 1 ) ]
			this.notes_list( new_list )
			return next
		}

		@ $mol_action
		delete_note( id: number ) {
			const list = this.notes_list();
			const new_list = list.filter( ( item ) => item.id !== id );
			this.notes_list( new_list );
		}
		
	}
}
