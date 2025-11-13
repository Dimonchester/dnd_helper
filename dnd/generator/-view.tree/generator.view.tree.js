	($.$my_dnd_generator) = class $my_dnd_generator extends ($.$mol_page) {
		category_key(next){
			if(next !== undefined) return next;
			return "Male name";
		}
		options(){
			return {
				"male_name": "Male name", 
				"female_name": "Female name", 
				"treasure": "Treasure", 
				"city": "City"
			};
		}
		Category_select(){
			const obj = new this.$.$mol_select();
			(obj.value) = (next) => ((this.category_key(next)));
			(obj.dictionary) = () => ((this.options()));
			return obj;
		}
		Category_field(){
			const obj = new this.$.$mol_form_field();
			(obj.name) = () => ((this.$.$mol_locale.text("$my_dnd_generator_Category_field_name")));
			(obj.content) = () => ([(this.Category_select())]);
			return obj;
		}
		generate(next){
			if(next !== undefined) return next;
			return null;
		}
		Generate_button(){
			const obj = new this.$.$mol_button_major();
			(obj.title) = () => ("Сгенерировать");
			(obj.click) = (next) => ((this.generate(next)));
			return obj;
		}
		result(){
			return "...";
		}
		Result_text(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ((this.result()));
			return obj;
		}
		Result_field(){
			const obj = new this.$.$mol_form_field();
			(obj.name) = () => ((this.$.$mol_locale.text("$my_dnd_generator_Result_field_name")));
			(obj.content) = () => ([(this.Result_text())]);
			return obj;
		}
		body(){
			return [
				(this.Category_field()), 
				(this.Generate_button()), 
				(this.Result_field())
			];
		}
	};
	($mol_mem(($.$my_dnd_generator.prototype), "category_key"));
	($mol_mem(($.$my_dnd_generator.prototype), "Category_select"));
	($mol_mem(($.$my_dnd_generator.prototype), "Category_field"));
	($mol_mem(($.$my_dnd_generator.prototype), "generate"));
	($mol_mem(($.$my_dnd_generator.prototype), "Generate_button"));
	($mol_mem(($.$my_dnd_generator.prototype), "Result_text"));
	($mol_mem(($.$my_dnd_generator.prototype), "Result_field"));

//# sourceMappingURL=generator.view.tree.js.map