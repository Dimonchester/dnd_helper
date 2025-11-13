namespace $.$$ {

	$mol_style_define( $my_dnd_roll_composer, {
		display: 'flex',
		flexDirection: 'column',
		padding: '1rem',
		gap: '1rem',
		color: 'white',
		flex: {
			grow: 1,
			shrink: 1,
		},

		Formula_field: {
			color: 'white',
		},

		Quick_buttons: {
			flexWrap: 'wrap',
			gap: '0.5rem',
		},

		Roll_button: {
			width: 'fit-content',
		},

		Mod_control_row: {
			flexWrap: 'nowrap',
			flex: {
				grow: 1, // Растягиваем строку на всю ширину
			},
			gap: '0.5rem', // Отступы между кнопками и полем
		},

		Mod_input: {
			flex: {
				grow: 1, // Поле ввода занимает основное место
				shrink: 1,
			},
			textAlign: 'center', // Приятно смотрится для чисел
		},

		Mod_decrease: {
			flex: {
				grow: 0, // Кнопки не растягиваются
			},
		},
		
		Mod_increase: {
			flex: {
				grow: 0, // Кнопки не растягиваются
			},
		},

		Result_block: {
			display: 'flex',
			flexDirection: 'column',
			padding: '1rem',
			backgroundColor: 'rgba(0,0,0, 0.2)',
			borderRadius: '10px',
			border: {
				radius:'1px',
				style: 'solid',
			},
			gap: '0.5rem',
		},

		Result_label: {
			fontSize: '0.9rem',
			opacity: 0.7,
		},

		Result_display: {
			fontSize: '2.5rem',
			fontWeight: 'bold',
			color: '#a9ffc1', // Яркий акцент на результате
		},

		Math_display: {
			fontSize: '1rem',
			opacity: 0.9,
			fontFamily: 'monospace', // Моноширинный шрифт для "математики"
		},

		History_section: {
			padding: '0px',
			flex: {
				grow: 1,
				shrink: 1,
			},
		},

		History_list: {
			display: 'flex',
			flexDirection: 'column',
			gap: '0.5rem',
			maxHeight: '20rem', // Ограничим высоту, чтобы не занимало весь экран
			overflowY: 'auto',
			padding: '0.5rem',
			backgroundColor: 'rgba(0,0,0, 0.1)',
			borderRadius: '8px',
			opacity: 0.8,
			fontFamily: 'monospace',
		},

	} )

}
