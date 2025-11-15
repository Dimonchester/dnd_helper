declare namespace $ {

	type $mol_string__hint_my_dnd_notes_npc_1 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__value_my_dnd_notes_npc_2 = $mol_type_enforce<
		ReturnType< $my_dnd_notes_npc['new_name_text'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_textarea__hint_my_dnd_notes_npc_3 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_textarea['hint'] >
	>
	type $mol_textarea__value_my_dnd_notes_npc_4 = $mol_type_enforce<
		ReturnType< $my_dnd_notes_npc['new_descr_text'] >
		,
		ReturnType< $mol_textarea['value'] >
	>
	type $mol_button_major__title_my_dnd_notes_npc_5 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_major['title'] >
	>
	type $mol_button_major__click_my_dnd_notes_npc_6 = $mol_type_enforce<
		ReturnType< $my_dnd_notes_npc['add_npc'] >
		,
		ReturnType< $mol_button_major['click'] >
	>
	type $mol_form__sub_my_dnd_notes_npc_7 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_form['sub'] >
	>
	type $mol_string__value_my_dnd_notes_npc_8 = $mol_type_enforce<
		ReturnType< $my_dnd_notes_npc['npc_name'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_string__enabled_my_dnd_notes_npc_9 = $mol_type_enforce<
		boolean
		,
		ReturnType< $mol_string['enabled'] >
	>
	type $mol_button_open__click_my_dnd_notes_npc_10 = $mol_type_enforce<
		ReturnType< $my_dnd_notes_npc['delete_npc'] >
		,
		ReturnType< $mol_button_open['click'] >
	>
	type $mol_button_open__sub_my_dnd_notes_npc_11 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_open['sub'] >
	>
	type $mol_row__sub_my_dnd_notes_npc_12 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_row['sub'] >
	>
	type $mol_textarea__value_my_dnd_notes_npc_13 = $mol_type_enforce<
		ReturnType< $my_dnd_notes_npc['npc_descr'] >
		,
		ReturnType< $mol_textarea['value'] >
	>
	type $mol_textarea__enabled_my_dnd_notes_npc_14 = $mol_type_enforce<
		boolean
		,
		ReturnType< $mol_textarea['enabled'] >
	>
	type $mol_view__sub_my_dnd_notes_npc_15 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_list__rows_my_dnd_notes_npc_16 = $mol_type_enforce<
		ReturnType< $my_dnd_notes_npc['Npc_rows'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_section__sub_my_dnd_notes_npc_17 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_section['sub'] >
	>
	export class $my_dnd_notes_npc extends $mol_page {
		new_name_text( next?: string ): string
		New_name( ): $mol_string
		new_descr_text( next?: string ): string
		New_descr( ): $mol_textarea
		add_npc( next?: any ): any
		Add_button( ): $mol_button_major
		Add_form( ): $mol_form
		npc_name( id: any, next?: string ): string
		Npc_name_text( id: any): $mol_string
		delete_npc( id: any, next?: any ): any
		icondelete( id: any): $mol_icon_delete
		Delete_button( id: any): $mol_button_open
		Npc_header( id: any): $mol_row
		npc_descr( id: any, next?: string ): string
		Npc_descr_text( id: any): $mol_textarea
		Npc_row( id: any): $mol_view
		Npc_rows( ): readonly(any)[]
		Npc_list( ): $mol_list
		List_section( ): $mol_section
		body( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=npc.view.tree.d.ts.map