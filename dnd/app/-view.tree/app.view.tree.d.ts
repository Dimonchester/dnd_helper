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
	type $mol_row__sub_my_dnd_app_4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_row['sub'] >
	>
	type $mol_page__title_my_dnd_app_5 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_page['title'] >
	>
	type $mol_page__tools_my_dnd_app_6 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['tools'] >
	>
	type $mol_page__body_my_dnd_app_7 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['body'] >
	>
	type $mol_page__title_my_dnd_app_8 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_page['title'] >
	>
	type $mol_page__tools_my_dnd_app_9 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['tools'] >
	>
	type $mol_page__body_my_dnd_app_10 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['body'] >
	>
	type $mol_book2_catalog__param_my_dnd_app_11 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_book2_catalog['param'] >
	>
	type $mol_book2_catalog__menu_title_my_dnd_app_12 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_book2_catalog['menu_title'] >
	>
	type $mol_book2_catalog__spreads_my_dnd_app_13 = $mol_type_enforce<
		ReturnType< $my_dnd_app['spreads_map'] >
		,
		ReturnType< $mol_book2_catalog['spreads'] >
	>
	export class $my_dnd_app extends $mol_view {
		Dise_spread_close( ): ReturnType< ReturnType< $my_dnd_app['Catalog'] >['Spread_close'] >
		Roll_composer( ): $my_dnd_roll_composer
		Dice_page( ): $mol_page
		Notes( ): $my_dnd_notes
		Weapon( ): $my_dnd_notes
		NPC( ): $my_dnd_notes
		Notes_container( ): $mol_row
		Notes_page( ): $mol_page
		Generator( ): $my_dnd_generator
		Generator_page( ): $mol_page
		spreads_map( ): ({ 
			'dice': ReturnType< $my_dnd_app['Dice_page'] >,
			'notes': ReturnType< $my_dnd_app['Notes_page'] >,
			'generator': ReturnType< $my_dnd_app['Generator_page'] >,
		}) 
		Catalog( ): $mol_book2_catalog
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=app.view.tree.d.ts.map