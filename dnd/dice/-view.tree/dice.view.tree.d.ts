declare namespace $ {

	type $mol_number__value_my_dnd_dice_1 = $mol_type_enforce<
		ReturnType< $my_dnd_dice['count'] >
		,
		ReturnType< $mol_number['value'] >
	>
	type $mol_form_field__name_my_dnd_dice_2 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__content_my_dnd_dice_3 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_form_field['content'] >
	>
	type $mol_number__value_my_dnd_dice_4 = $mol_type_enforce<
		ReturnType< $my_dnd_dice['modifier'] >
		,
		ReturnType< $mol_number['value'] >
	>
	type $mol_form_field__name_my_dnd_dice_5 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__content_my_dnd_dice_6 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_form_field['content'] >
	>
	type $mol_view__sub_my_dnd_dice_7 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_labeler__sub_my_dnd_dice_8 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['sub'] >
	>
	type $mol_view__sub_my_dnd_dice_9 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_button_major__enabled_my_dnd_dice_10 = $mol_type_enforce<
		boolean
		,
		ReturnType< $mol_button_major['enabled'] >
	>
	type $mol_button_major__click_my_dnd_dice_11 = $mol_type_enforce<
		ReturnType< $my_dnd_dice['roll'] >
		,
		ReturnType< $mol_button_major['click'] >
	>
	type $mol_button_major__sub_my_dnd_dice_12 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_major['sub'] >
	>
	export class $my_dnd_dice extends $mol_view {
		count( next?: number ): number
		Count_input( ): $mol_number
		Count_field( ): $mol_form_field
		modifier( next?: number ): number
		Mod_input( ): $mol_number
		Mod_field( ): $mol_form_field
		roll( next?: any ): any
		result_badge( ): $mol_view
		Result( ): $mol_labeler
		Button_content( ): $mol_view
		Roll( ): $mol_button_major
		sides( ): number
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=dice.view.tree.d.ts.map