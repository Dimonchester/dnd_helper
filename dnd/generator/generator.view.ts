namespace $.$$ {

	export class $my_dnd_generator extends $.$my_dnd_generator {

		@ $mol_mem
		data_lists() {
			return {
				male_name: [ 'Арагорн', 'Леголас', 'Гимли', 'Боромир', 'Фродо', 'Сэм' ],
				female_name: [ 'Арвен', 'Галадриэль', 'Эовин', 'Тауриэль', 'Роузи' ],
				treasure: [ 'Золотая монета', 'Маленький рубин', 'Серебряный кубок', 'Странная карта', 'Зелье лечения' ],
				city: [ 'Гондор', 'Ривенделл', 'Шир', 'Мория', 'Изенгард' ],
			}
		}

		@ $mol_mem
		category_key( next?: string ) {
			return next ?? 'male_name'
		}

		@ $mol_mem
		result( next = '...' ) {
			return next
		}

		@ $mol_action
		generate() {
			const key = this.category_key() as keyof ReturnType< typeof this.data_lists >
			const list = this.data_lists()[ key ]
			
			const random_index = Math.floor( Math.random() * list.length )
			const random_item = list[ random_index ]
			
			this.result( random_item )
		}
	}
}
