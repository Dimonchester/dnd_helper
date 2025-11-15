namespace $.$$ {

	// Основные стили для всех кубиков
	$mol_style_define( $my_dnd_dice, {
		display: 'flex',
		flexDirection: 'column',
		padding: '0.5rem',
		backgroundColor: 'rgba(255,255,255, 0.07)',
		borderRadius: '10px',
		alignItems: 'center',
		border: {
			radius:'1px',
			style: 'solid',
		},
		boxShadow: '0 2px 8px rgba(0,0,0, 0.2)',
		
		flex: {
			grow: 1,
			shrink: 1,
			basis: '7.5rem',
		},
		
		Count_field:{
			color: 'white',
			marginBottom: '0.25rem',
			alignItems: 'center',
		},

		Mod_field:{
			color: 'white',
			marginBottom: '0.25rem',
			alignItems: 'center',
		},

		Roll: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			width: '100%',
			backgroundColor: 'linear-gradient(145deg, #4b6cb7, #182848)',
			color: 'white',
			padding: '0.5rem',
			fontSize: '1rem',
			fontWeight: 'bold',
			border: {
				width: '0px',
			},
			borderRadius: '8px',
			boxShadow: '0 2px 5px rgba(0,0,0, 0.2)',
			cursor: 'pointer',
			transition: 'all 0.2s ease',
			textAlign: 'center',

			':hover': {
				backgroundColor: 'linear-gradient(145deg, #5a7fcf, #1f325e)',
				transform: 'translateY(-2px)',
				boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
			},
			':active': {
				transform: 'translateY(0)',
				boxShadow: '0 1px 2px rgba(0,0,0,0.2)',
			},
		},

		Dice_type_label: {
			fontSize: '1.3rem',
			fontWeight: 'bold',
			lineHeight: '1.1',
			color: 'white',
		},
		
		Result_label: {
			fontSize: '0.9rem',
			opacity: 0.7,
			fontWeight: 'normal',
			minHeight: '1rem',
			color: 'white',
		},

	} )
}
