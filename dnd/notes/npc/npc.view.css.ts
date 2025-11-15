namespace $.$$ {

	$mol_style_define( $my_dnd_notes_npc, {
		flex: {
			grow: 1,
			shrink: 1,
			basis: '20rem',
		},
		minWidth: '18rem',
		display: 'flex',
		color: 'white',

		Add_form: {
			padding: '1rem',
			backgroundColor: 'rgba(255,255,255, 0.1)',
			borderRadius: '10px',
			marginBottom: '0.5rem',
		},
		
		New_name: { color: 'white' },
		New_descr: { 
			color: 'white',
			minHeight: '4rem',
		},
		
		List_section: {
			padding: '0px',
		},
		
		Npc_list: {
			display: 'flex',
			flexDirection: 'column',
			gap: '0.5rem',
		},
		
		// Карточка NPC
		Npc_row: {
			display: 'flex',
			flexDirection: 'column',
			padding: '0.75rem',
			backgroundColor: 'rgba(255,255,255, 0.05)',
			borderRadius: '8px',
			gap: '0.5rem',
		},
		
		Npc_header: {
			flexWrap: 'nowrap',
			alignItems: 'center',
			gap: '0.5rem',
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
