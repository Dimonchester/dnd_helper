declare namespace $ {

	type $mol_select__value_my_dnd_generator_1 = $mol_type_enforce<
		ReturnType< $my_dnd_generator['category_key'] >
		,
		ReturnType< $mol_select['value'] >
	>
	type $mol_select__dictionary_my_dnd_generator_2 = $mol_type_enforce<
		ReturnType< $my_dnd_generator['options'] >
		,
		ReturnType< $mol_select['dictionary'] >
	>
	type $mol_form_field__name_my_dnd_generator_3 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__content_my_dnd_generator_4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_form_field['content'] >
	>
	type $mol_button_major__title_my_dnd_generator_5 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_major['title'] >
	>
	type $mol_button_major__click_my_dnd_generator_6 = $mol_type_enforce<
		ReturnType< $my_dnd_generator['generate'] >
		,
		ReturnType< $mol_button_major['click'] >
	>
	type $mol_text__text_my_dnd_generator_7 = $mol_type_enforce<
		ReturnType< $my_dnd_generator['result'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_form_field__name_my_dnd_generator_8 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__content_my_dnd_generator_9 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_form_field['content'] >
	>
	export class $my_dnd_generator extends $mol_page {
		category_key( next?: string ): string
		options( ): ({ 
			'male_name': string,
			'female_name': string,
			'treasure': string,
			'city': string,
		}) 
		Category_select( ): $mol_select
		Category_field( ): $mol_form_field
		generate( next?: any ): any
		Generate_button( ): $mol_button_major
		result( ): string
		Result_text( ): $mol_text
		Result_field( ): $mol_form_field
		body( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=generator.view.tree.d.ts.map