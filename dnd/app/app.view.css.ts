namespace $.$$ {

	$mol_style_define( $my_dnd_app, {
		minHeight: '100vh',
		backgroundColor: '#1a1a2e', // Оставляем фон темы
		padding: '0rem', // Каталог будет управлять своими отступами
		fontFamily: 'system-ui, sans-serif',
		height: 'auto',
		
		// Start: {
		// 	flexWrap: 'wrap',
		// 	justifyContent: 'center',
		// 	width: '100%',
		// 	padding: '1rem',
		// 	gap: '1rem',
		// },

		Notes_container: {
			flexWrap: 'wrap',
			justifyContent: 'center',
			width: '100%',
			padding: {
				top: '0px',
				bottom: '0px',
				left: '1 rem',
				right: '1 rem',
			}, // Небольшой отступ по бокам на мобилке
		},

		// Dice_page:{
		// 	flex: {
		// 		grow: 1,
		// 		shrink: 1, 
		// 		basis: 'auto',
		// 	},
		// 	display: 'flex',
		// },

		// Notes_page:{
		// 	width: "100%",
		// 	flex: {
		// 		grow: 1,
		// 		shrink: 1, 
		// 		basis: 'auto',
		// 	},
		// 	display: 'flex',
		// },

		// Generator_page:{
		// 	width: "100%",
		// 	flex: {
		// 		grow: 1,
		// 		shrink: 1, 
		// 		basis: 'auto',
		// 	},
		// 	display: 'flex',
		// },

		Catalog:{
			width: '100%',
		},
	})
}
