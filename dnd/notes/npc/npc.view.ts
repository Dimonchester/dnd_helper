namespace $.$$ {

	type $my_dnd_npc_item = {
		id: number,
		name: string,
		description: string,
	}

	export class $my_dnd_notes_npc extends $.$my_dnd_notes_npc {

		state_key() {
			return 'my_dnd_npc_default'
		}

		// (ИЗМЕНЕНО) Блок npc_list с надежной миграцией
		@ $mol_mem
		npc_list( next?: $my_dnd_npc_item[] ): $my_dnd_npc_item[] {
			if( next !== undefined ) {
				const data_to_store = JSON.stringify( next ) as string
				$mol_state_local.value( this.state_key(), data_to_store )
				return next
			}
			
			const stored_data = $mol_state_local.value( this.state_key() ) as string | null
			if( stored_data ) {
				let items = JSON.parse( stored_data ) as any[]

				// Надежная миграция
				const needs_migration = items.some( (item: any) => item.id === undefined || typeof item.id !== 'number');
				if ( needs_migration ) {
					items = items.map( (item: any, index: number) => {
						if (item.id === undefined || typeof item.id !== 'number') {
							return { ...item, id: Date.now() + index } 
						}
						return item;
					});
				}
				return items as $my_dnd_npc_item[]
			}
			return []
		}

		@ $mol_mem
		new_name_text( next?: string ) {
			return next ?? ''
		}

		@ $mol_mem
		new_descr_text( next?: string ) {
			return next ?? ''
		}

		// (ИЗМЕНЕНО) Блок add_npc с надежным генератором ID
		@ $mol_action
		add_npc() {
			const name = this.new_name_text()
			const description = this.new_descr_text()
			if ( !name && !description ) return

			const current_list = this.npc_list()
			
			const all_ids = current_list.map( (item: any) => item.id )
				.filter( (id: any) => typeof id === 'number' && !isNaN(id) );
			
			const max_id = all_ids.length > 0 ? Math.max( ...all_ids ) : 0;
			const new_id = max_id + 1;

			const new_npc = { 
				id: new_id, 
				name: name || 'Без имени', 
				description: description 
			}
			
			this.npc_list( [ new_npc, ...current_list ] ) // Добавляем в начало
			this.new_name_text('')
			this.new_descr_text('')
		}

		@ $mol_mem
		Npc_rows() {
			return this.npc_list().map( ( item ) => this.Npc_row( item.id ) )
		}

		// (ИЗМЕНЕНО) Биндинг по ID
		@ $mol_mem_key
		npc_name( id: number, next?: string ) {
			const list = this.npc_list()
			const index = list.findIndex( i => i.id === id )
			if (index === -1) return ''
			
			const item = list[index]
			if ( next === undefined ) return item.name
			if ( item.name === next ) return next

			const new_item = { ...item, name: next }
			const new_list = [ ...list.slice( 0, index ), new_item, ...list.slice( index + 1 ) ]
			this.npc_list( new_list )
			return next
		}

		// (ИЗМЕНЕНО) Биндинг по ID
		@ $mol_mem_key
		npc_descr( id: number, next?: string ) {
			const list = this.npc_list()
			const index = list.findIndex( i => i.id === id )
			if (index === -1) return ''
			
			const item = list[index]
			if ( next === undefined ) return item.description
			if ( item.description === next ) return next

			const new_item = { ...item, description: next }
			const new_list = [ ...list.slice( 0, index ), new_item, ...list.slice( index + 1 ) ]
			this.npc_list( new_list )
			return next
		}

		@ $mol_action
		delete_npc( id: number ) {
			const list = this.npc_list();
			const new_list = list.filter( ( item ) => item.id !== id );
			this.npc_list( new_list );
		}
	}
}
