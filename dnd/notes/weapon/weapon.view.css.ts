namespace $.$$ {

	$mol_style_define( $my_dnd_notes_weapon, {
		// Стили страницы
		flex: { grow: 1, shrink: 1, basis: '20rem' },
		minWidth: '18rem',
		display: 'flex',
		color: 'white',

		// Форма добавления
		Add_form: {
			padding: '1rem',
			backgroundColor: 'rgba(255,255,255, 0.1)',
			borderRadius: '10px',
			marginBottom: '0.5rem',
			display: 'flex',
			flexDirection: 'column',
			gap: '0.5rem',
		},

		New_quantity_field: {
			alignItems: 'center',
		},

		New_row_3:{
			justifyContent: 'center',
		},

		// Список
		List_section: { padding: '0px' },
		Weapon_list: {
			display: 'flex',
			flexDirection: 'column',
			gap: '0.5rem',
		},
		
		// Карточка оружия
		Weapon_row: {
			display: 'flex',
			flexDirection: 'column',
			padding: '0.75rem',
			backgroundColor: 'rgba(255,255,255, 0.05)',
			borderRadius: '8px',
			gap: '0.5rem',
		},
		
		Weapon_header: {
			flexWrap: 'nowrap',
			alignItems: 'center',
			gap: '0.5rem',
		},
		
		Weapon_stats_row: {
			flexWrap: 'wrap',
			gap: '0.5rem',
		},
		Weapon_cost_field: { color: 'white', flex: { grow: 1, basis: '5rem' } },
		Weapon_weight_field: { color: 'white', flex: { grow: 1, basis: '5rem' } },
		Weapon_quantity_field: { color: 'white', flex: { grow: 1, basis: '5rem' } },
		Weapon_properties:{
			color: 'white',
			flex: {
				grow: 1,
				shrink: 1,
				basis: 'auto',
			},
			background: {
				color: 'transparent',
			},
			boxShadow: 'none',
		},
		Weapon_bool_row: {
			gap: '1rem',
		},

		Delete_button: {
			justifyContent: 'center',
			padding: '0.25rem',
			minWidth: '2rem',
			minHeight: '2rem',
			flex: { grow: 0, shrink: 0 },
			backgroundColor: 'rgba(255,255,255, 0.1)',
			color: 'white',
			':hover': {
				backgroundColor:'rgba(255,255,255, 0.2)',
			},
		},
	
	})
}
