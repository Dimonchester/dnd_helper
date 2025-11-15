namespace $.$$ {

	type $my_dnd_weapon_item = {
		id: number,
		name: string,
		damage: string,
		properties: string,
		cost: string,
		weight: string,
		quantity: number,
		attunement: boolean,
		used: boolean,
	}

	export class $my_dnd_notes_weapon extends $.$my_dnd_notes_weapon {

		state_key() {
			return 'my_dnd_weapon_default'
		}

		// (ИЗМЕНЕНО) Блок weapon_list с надежной миграцией
		@ $mol_mem
		weapon_list( next?: $my_dnd_weapon_item[] ): $my_dnd_weapon_item[] {
			if( next !== undefined ) {
				$mol_state_local.value( this.state_key(), JSON.stringify( next ) as string )
				return next
			}
			
			const stored = $mol_state_local.value( this.state_key() ) as string | null
			if (stored) {
				let items = JSON.parse( stored ) as any[]
				
				// Надежная миграция
				const needs_migration = items.some( (item: any) => item.id === undefined || typeof item.id !== 'number');
				if ( needs_migration ) {
					items = items.map((item: any, index: number) => {
						if (item.id === undefined || typeof item.id !== 'number') {
							return { ...item, id: Date.now() + index }
						}
						return item;
					});
				}
				return items as $my_dnd_weapon_item[]
			}
			return []
		}

		// ... (поля new_name, new_damage и т.д. остаются без изменений) ...
		@ $mol_mem new_name( next?: string ) { return next ?? '' }
		@ $mol_mem new_damage( next?: string ) { return next ?? '' }
		@ $mol_mem new_properties( next?: string ) { return next ?? '' }
		@ $mol_mem new_cost( next?: string ) { return next ?? '' }
		@ $mol_mem new_weight( next?: string ) { return next ?? '' }
		@ $mol_mem new_quantity( next?: number ) { return next ?? 1 }
		@ $mol_mem new_attunement( next?: boolean ) { return next ?? false }
		@ $mol_mem new_used( next?: boolean ) { return next ?? false }


		// (ИЗМЕНЕНО) Блок add_weapon с надежным генератором ID
		@ $mol_action
		add_weapon() {
			const name = this.new_name()
			if (!name) return

			const list = this.weapon_list()
			
			const all_ids = list.map( (item: any) => item.id )
				.filter( (id: any) => typeof id === 'number' && !isNaN(id) );
			
			const max_id = all_ids.length > 0 ? Math.max( ...all_ids ) : 0;
			const new_id = max_id + 1;

			const new_item: $my_dnd_weapon_item = {
				id: new_id,
				name: name,
				damage: this.new_damage(),
				properties: this.new_properties(),
				cost: this.new_cost(),
				weight: this.new_weight(),
				quantity: this.new_quantity(),
				attunement: this.new_attunement(),
				used: this.new_used(),
			}

			this.weapon_list( [ new_item, ...list ] )

			// Очистка полей
			this.new_name('')
			this.new_damage('')
			this.new_properties('')
			this.new_cost('')
			this.new_weight('')
			this.new_quantity(1)
			this.new_attunement(false)
			this.new_used(false)
		}

		@ $mol_mem
		Weapon_rows() {
			return this.weapon_list().map( (item) => this.Weapon_row( item.id ) )
		}

		@ $mol_action
		delete_weapon( id: number ) {
			this.weapon_list( this.weapon_list().filter( item => item.id !== id ) );
		}

		// ... (блок update_item и биндеры weapon_name, weapon_damage и т.д. остаются без изменений) ...
		@ $mol_action
		update_item( id: number, field: keyof $my_dnd_weapon_item, value: any ) {
			const list = this.weapon_list()
			const index = list.findIndex( item => item.id === id )
			if (index === -1) return

			const item = list[index]
			if (item[field] === value) return

			const new_item = { ...item, [field]: value }
			const new_list = [ ...list.slice( 0, index ), new_item, ...list.slice( index + 1 ) ]
			this.weapon_list( new_list )
			return value
		}
		
		@ $mol_mem_key
		weapon_name( id: number, next?: string ) {
			if (next === undefined) return this.weapon_list().find( i => i.id === id )?.name ?? ''
			return this.update_item( id, 'name', next )
		}
		
		@ $mol_mem_key
		weapon_damage( id: number, next?: string ) {
			if (next === undefined) return this.weapon_list().find( i => i.id === id )?.damage ?? ''
			return this.update_item( id, 'damage', next )
		}
		
		@ $mol_mem_key
		weapon_properties( id: number, next?: string ) {
			if (next === undefined) return this.weapon_list().find( i => i.id === id )?.properties ?? ''
			return this.update_item( id, 'properties', next )
		}
		
		@ $mol_mem_key
		weapon_cost( id: number, next?: string ) {
			if (next === undefined) return this.weapon_list().find( i => i.id === id )?.cost ?? ''
			return this.update_item( id, 'cost', next )
		}
		
		@ $mol_mem_key
		weapon_weight( id: number, next?: string ) {
			if (next === undefined) return this.weapon_list().find( i => i.id === id )?.weight ?? ''
			return this.update_item( id, 'weight', next )
		}

		@ $mol_mem_key
		weapon_quantity( id: number, next?: number ) {
			if (next === undefined) return this.weapon_list().find( i => i.id === id )?.quantity ?? 1
			return this.update_item( id, 'quantity', next )
		}
		
		@ $mol_mem_key
		weapon_attunement( id: number, next?: boolean ) {
			if (next === undefined) return this.weapon_list().find( i => i.id === id )?.attunement ?? false
			return this.update_item( id, 'attunement', next )
		}
		
		@ $mol_mem_key
		weapon_used( id: number, next?: boolean ) {
			if (next === undefined) return this.weapon_list().find( i => i.id === id )?.used ?? false
			return this.update_item( id, 'used', next )
		}
	}
}
