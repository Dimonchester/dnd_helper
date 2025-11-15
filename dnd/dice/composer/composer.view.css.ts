namespace $.$$ {

	$mol_style_define( $my_dnd_dice_composer, {
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
				grow: 1,
			},
			gap: '0.5rem',
		},

		Mod_input: {
			flex: {
				grow: 1,
				shrink: 1,
			},
			textAlign: 'center',
		},

		Mod_decrease: {
			flex: {
				grow: 0,
			},
		},
		
		Mod_increase: {
			flex: {
				grow: 0,
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
			color: '#a9ffc1',
		},

		Math_display: {
			fontSize: '1rem',
			opacity: 0.9,
			fontFamily: 'monospace',
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
			maxHeight: '20rem',
			overflowY: 'auto',
			padding: '0.5rem',
			backgroundColor: 'rgba(0,0,0, 0.1)',
			borderRadius: '8px',
			opacity: 0.8,
			fontFamily: 'monospace',
		},

	} )

}
