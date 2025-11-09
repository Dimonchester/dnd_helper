namespace $.$$ {

	// Основные стили для всех кубиков
	$mol_style_define( $my_dnd_dice, {
		margin: '0.5rem',
		display: 'flex',
		flexDirection: 'column',
		padding: '0.5rem',
		backgroundColor: 'rgba(255,255,255, 0.1)',
		borderRadius: '10px',
		alignItems: 'center',
		maxWidth: '100%',
		minWidth: '12rem',
		
		Count_field:{
			color: 'white',
			marginBottom: '0.5rem',
			alignItems: 'center',
		},

		Mod_field:{
			color: 'white',
			marginBottom: '0.5rem',
			alignItems: 'center',
		},

		Roll: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			width: '100%',
			maxWidth: '9rem',
			backgroundColor: 'white',
			color: 'black',
			padding: '0.5rem',
			fontSize: '1rem',
			fontWeight: 'bold',
			border: {
				width: '2px',
				style: 'solid',
				color: '#666',
			},
			borderRadius: '10px',
			boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
			cursor: 'pointer',
			transition: 'all 0.2s ease',
			textAlign: 'center',
			':hover': {
				backgroundColor: '#f8f8f8',
				transform: 'translateY(-2px)',
				boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
			},
			':active': {
				transform: 'translateY(0)',
				boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
			},
		},


		Result: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			fontSize: '1.5rem',
			fontWeight: 'bold',
			lineHeight: '1.1',
			rowGap: '7px',
  			columnGap: '3%',
		},

		Button_content:{
			fontSize: '1rem',
			opacity: 0.7,
			fontWeight: 'normal',
		},

	} )

}
