declare namespace $ {

	type $mol_page__title_my_dnd_app_1 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_page['title'] >
	>
	type $mol_page__tools_my_dnd_app_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['tools'] >
	>
	type $mol_page__body_my_dnd_app_3 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['body'] >
	>
	type $my_dnd_notes__title_my_dnd_app_4 = $mol_type_enforce<
		string
		,
		ReturnType< $my_dnd_notes['title'] >
	>
	type $my_dnd_notes__tools_my_dnd_app_5 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $my_dnd_notes['tools'] >
	>
	type $my_dnd_notes__state_key_my_dnd_app_6 = $mol_type_enforce<
		string
		,
		ReturnType< $my_dnd_notes['state_key'] >
	>
	type $my_dnd_notes__title_my_dnd_app_7 = $mol_type_enforce<
		string
		,
		ReturnType< $my_dnd_notes['title'] >
	>
	type $my_dnd_notes__tools_my_dnd_app_8 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $my_dnd_notes['tools'] >
	>
	type $my_dnd_notes__state_key_my_dnd_app_9 = $mol_type_enforce<
		string
		,
		ReturnType< $my_dnd_notes['state_key'] >
	>
	type $my_dnd_notes_weapon__title_my_dnd_app_10 = $mol_type_enforce<
		string
		,
		ReturnType< $my_dnd_notes_weapon['title'] >
	>
	type $my_dnd_notes_weapon__tools_my_dnd_app_11 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $my_dnd_notes_weapon['tools'] >
	>
	type $my_dnd_notes_weapon__state_key_my_dnd_app_12 = $mol_type_enforce<
		string
		,
		ReturnType< $my_dnd_notes_weapon['state_key'] >
	>
	type $my_dnd_notes_npc__title_my_dnd_app_13 = $mol_type_enforce<
		string
		,
		ReturnType< $my_dnd_notes_npc['title'] >
	>
	type $my_dnd_notes_npc__tools_my_dnd_app_14 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $my_dnd_notes_npc['tools'] >
	>
	type $my_dnd_notes_npc__state_key_my_dnd_app_15 = $mol_type_enforce<
		string
		,
		ReturnType< $my_dnd_notes_npc['state_key'] >
	>
	type $mol_book2_catalog__param_my_dnd_app_16 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_book2_catalog['param'] >
	>
	type $mol_book2_catalog__menu_title_my_dnd_app_17 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_book2_catalog['menu_title'] >
	>
	type $mol_book2_catalog__menu_tools_my_dnd_app_18 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_book2_catalog['menu_tools'] >
	>
	type $mol_book2_catalog__spreads_my_dnd_app_19 = $mol_type_enforce<
		({ 
			'notes': ReturnType< $my_dnd_app['Notes'] >,
			'quests': ReturnType< $my_dnd_app['Quests'] >,
			'weapon': ReturnType< $my_dnd_app['Weapon'] >,
			'npc': ReturnType< $my_dnd_app['NPC'] >,
		}) 
		,
		ReturnType< $mol_book2_catalog['spreads'] >
	>
	type $mol_page__title_my_dnd_app_20 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_page['title'] >
	>
	type $mol_page__tools_my_dnd_app_21 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['tools'] >
	>
	type $mol_page__body_my_dnd_app_22 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['body'] >
	>
	type $mol_book2_catalog__param_my_dnd_app_23 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_book2_catalog['param'] >
	>
	type $mol_book2_catalog__menu_title_my_dnd_app_24 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_book2_catalog['menu_title'] >
	>
	type $mol_book2_catalog__spreads_my_dnd_app_25 = $mol_type_enforce<
		({ 
			'dice': ReturnType< $my_dnd_app['Dice_page'] >,
			'notes_book': ReturnType< $my_dnd_app['Notes_book'] >,
			'generator': ReturnType< $my_dnd_app['Generator_page'] >,
		}) 
		,
		ReturnType< $mol_book2_catalog['spreads'] >
	>
	export class $my_dnd_app extends $mol_view {
		Spread_close( ): ReturnType< ReturnType< $my_dnd_app['Catalog'] >['Spread_close'] >
		Roll_composer( ): $my_dnd_dice_composer
		Dice_page( ): $mol_page
		Notes_spread_close( ): ReturnType< ReturnType< $my_dnd_app['Notes_book'] >['Spread_close'] >
		Notes( ): $my_dnd_notes
		Quests( ): $my_dnd_notes
		Weapon( ): $my_dnd_notes_weapon
		NPC( ): $my_dnd_notes_npc
		Notes_book( ): $mol_book2_catalog
		Generator( ): $my_dnd_generator
		Generator_page( ): $mol_page
		Catalog( ): $mol_book2_catalog
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=app.view.tree.d.ts.map