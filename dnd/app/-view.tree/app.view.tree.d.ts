declare namespace $ {

	type $mol_text__text_my_dnd_app_1 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_text__text_my_dnd_app_2 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_text['text'] >
	>
	type $my_dnd_dice__sides_my_dnd_app_3 = $mol_type_enforce<
		number
		,
		ReturnType< $my_dnd_dice['sides'] >
	>
	type $my_dnd_dice__sides_my_dnd_app_4 = $mol_type_enforce<
		number
		,
		ReturnType< $my_dnd_dice['sides'] >
	>
	type $my_dnd_dice__sides_my_dnd_app_5 = $mol_type_enforce<
		number
		,
		ReturnType< $my_dnd_dice['sides'] >
	>
	type $my_dnd_dice__sides_my_dnd_app_6 = $mol_type_enforce<
		number
		,
		ReturnType< $my_dnd_dice['sides'] >
	>
	type $my_dnd_dice__sides_my_dnd_app_7 = $mol_type_enforce<
		number
		,
		ReturnType< $my_dnd_dice['sides'] >
	>
	type $my_dnd_dice__sides_my_dnd_app_8 = $mol_type_enforce<
		number
		,
		ReturnType< $my_dnd_dice['sides'] >
	>
	type $my_dnd_dice__sides_my_dnd_app_9 = $mol_type_enforce<
		number
		,
		ReturnType< $my_dnd_dice['sides'] >
	>
	type $mol_row__sub_my_dnd_app_10 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_row['sub'] >
	>
	type $mol_page__title_my_dnd_app_11 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_page['title'] >
	>
	type $mol_page__sub_my_dnd_app_12 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['sub'] >
	>
	type $my_dnd_spells__title_my_dnd_app_13 = $mol_type_enforce<
		string
		,
		ReturnType< $my_dnd_spells['title'] >
	>
	type $mol_book__pages_my_dnd_app_14 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_book['pages'] >
	>
	export class $my_dnd_app extends $mol_view {
		Title( ): $mol_text
		Title_roll( ): $mol_text
		Dice_d4( ): $my_dnd_dice
		Dice_d6( ): $my_dnd_dice
		Dice_d8( ): $my_dnd_dice
		Dice_d10( ): $my_dnd_dice
		Dice_d12( ): $my_dnd_dice
		Dice_d20( ): $my_dnd_dice
		Dice_d100( ): $my_dnd_dice
		Start( ): $mol_row
		Dice_page( ): $mol_page
		Spells_page( ): $my_dnd_spells
		Pager( ): $mol_book
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=app.view.tree.d.ts.map