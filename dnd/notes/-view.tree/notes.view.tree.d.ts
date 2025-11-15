declare namespace $ {

	type $mol_string__hint_my_dnd_notes_1 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__value_my_dnd_notes_2 = $mol_type_enforce<
		ReturnType< $my_dnd_notes['new_note_text'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_button_major__title_my_dnd_notes_3 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_major['title'] >
	>
	type $mol_button_major__click_my_dnd_notes_4 = $mol_type_enforce<
		ReturnType< $my_dnd_notes['add_note'] >
		,
		ReturnType< $mol_button_major['click'] >
	>
	type $mol_form__sub_my_dnd_notes_5 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_form['sub'] >
	>
	type $mol_check_box__checked_my_dnd_notes_6 = $mol_type_enforce<
		ReturnType< $my_dnd_notes['note_checked'] >
		,
		ReturnType< $mol_check_box['checked'] >
	>
	type $mol_textarea__value_my_dnd_notes_7 = $mol_type_enforce<
		ReturnType< $my_dnd_notes['note_text'] >
		,
		ReturnType< $mol_textarea['value'] >
	>
	type $mol_textarea__enabled_my_dnd_notes_8 = $mol_type_enforce<
		boolean
		,
		ReturnType< $mol_textarea['enabled'] >
	>
	type $mol_button_open__click_my_dnd_notes_9 = $mol_type_enforce<
		ReturnType< $my_dnd_notes['delete_note'] >
		,
		ReturnType< $mol_button_open['click'] >
	>
	type $mol_button_open__sub_my_dnd_notes_10 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_open['sub'] >
	>
	type $mol_row__sub_my_dnd_notes_11 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_row['sub'] >
	>
	type $mol_row__attr_my_dnd_notes_12 = $mol_type_enforce<
		({ 
			'data-checked': ReturnType< $my_dnd_notes['note_checked'] >,
		}) 
		,
		ReturnType< $mol_row['attr'] >
	>
	type $mol_list__rows_my_dnd_notes_13 = $mol_type_enforce<
		ReturnType< $my_dnd_notes['Note_rows'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_section__sub_my_dnd_notes_14 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_section['sub'] >
	>
	export class $my_dnd_notes extends $mol_page {
		new_note_text( next?: string ): string
		New_note_text( ): $mol_string
		add_note( next?: any ): any
		Add_button( ): $mol_button_major
		Add_form( ): $mol_form
		note_checked( id: any, next?: boolean ): boolean
		Note_check( id: any): $mol_check_box
		note_text( id: any, next?: string ): string
		Note_text( id: any): $mol_textarea
		delete_note( id: any, next?: any ): any
		icondelete( id: any): $mol_icon_delete
		Delete_button( id: any): $mol_button_open
		Note_row( id: any): $mol_row
		Note_rows( ): readonly(any)[]
		Note_list( ): $mol_list
		List_section( ): $mol_section
		body( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=notes.view.tree.d.ts.map