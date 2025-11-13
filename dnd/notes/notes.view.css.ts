namespace $.$$ {

	$mol_style_define( $my_dnd_notes, {
		flex: {
			grow: 1,
			shrink: 1,
			basis: '20rem', // (ИЗМЕНЕНО) Базовая ширина для авто-переноса
		},
		minWidth: '18rem', // (ДОБАВЛЕНО) Минимальная ширина на моб. устройствах
		display: 'flex',
		padding: '1rem',
		color: 'white',

		Add_form: {
			padding: '1rem',
			backgroundColor: 'rgba(255,255,255, 0.1)',
			borderRadius: '10px',
			marginBottom: '0.5rem',
		},

		New_note_text: {
			color: 'white',
		},

		List_section: {
			padding: '0px',
		},

		Note_list: {
			display: 'flex',
			flexDirection: 'column',
			gap: '0.5rem',
		},

		Note_row: {
			flexWrap: 'nowrap',
			padding: '0.75rem',
			backgroundColor: 'rgba(255,255,255, 0.05)',
			borderRadius: '8px',
			alignItems: 'center',
			gap: '0.5rem',
		},

		Note_text: { // (БЛОК ОБНОВЛЕН) Стили для $mol_textarea
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
			// Стилизуем внутреннее поле <textarea>
			Edit: { 
				background: {
					color: 'transparent',
				},
				boxShadow: 'none',
				border: {
					style: 'none',
				},
				color: 'white',
				padding: '0px',
				minHeight: '1.5rem', // Чтобы поле не схлопывалось
			},
		},

		// (БЛОК ДОБАВЛЕН) Стили для кнопки удаления
		Delete_button: {
			justifyContent: 'center',
			padding: '0.25rem',
			minWidth: '2rem',
			minHeight: '2rem',
			flex: {
				grow: 0,
				shrink: 0,
			},
			backgroundColor: 'rgba(255,255,255, 0.1)',
			color: 'white',
			':hover': {
				backgroundColor:'rgba(255,255,255, 0.2)',
			},
		},
	
	})
}
