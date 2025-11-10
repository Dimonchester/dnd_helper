namespace $.$$ {

	$mol_style_define( $my_dnd_app, {
		minHeight: '100vh',
		backgroundColor: '#1a1a2e', // Оставляем фон темы
		padding: '0rem', // Каталог будет управлять своими отступами
		fontFamily: 'system-ui, sans-serif',
		height: 'auto',
		
		Start: {
			flexWrap: 'wrap',
			justifyContent: 'center',
			width: '100%',
		},

		Dice_page:{
			flex: {
				grow: 1,
				shrink: 1, 
				basis: 'auto',
			},
			display: 'flex',
			padding: '1rem',
		},

		Catalog:{
			width: '100%',
		},
	})
}
