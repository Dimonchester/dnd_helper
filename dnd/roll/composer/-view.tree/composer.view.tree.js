	($.$my_dnd_roll_composer) = class $my_dnd_roll_composer extends ($.$mol_view) {
		Formula_input(){
			const obj = new this.$.$mol_string();
			(obj.hint) = () => ((this.$.$mol_locale.text("$my_dnd_roll_composer_Formula_input_hint")));
			(obj.value) = (next) => ((this.formula(next)));
			return obj;
		}
		Formula_field(){
			const obj = new this.$.$mol_form_field();
			(obj.name) = () => ((this.$.$mol_locale.text("$my_dnd_roll_composer_Formula_field_name")));
			(obj.content) = () => ([(this.Formula_input())]);
			return obj;
		}
		mod_decrease(next){
			if(next !== undefined) return next;
			return null;
		}
		Mod_decrease(){
			const obj = new this.$.$mol_button_minor();
			(obj.title) = () => ((this.$.$mol_locale.text("$my_dnd_roll_composer_Mod_decrease_title")));
			(obj.click) = (next) => ((this.mod_decrease(next)));
			return obj;
		}
		Mod_input(){
			const obj = new this.$.$mol_string();
			(obj.hint) = () => ((this.$.$mol_locale.text("$my_dnd_roll_composer_Mod_input_hint")));
			(obj.value) = (next) => ((this.modifier(next)));
			return obj;
		}
		mod_increase(next){
			if(next !== undefined) return next;
			return null;
		}
		Mod_increase(){
			const obj = new this.$.$mol_button_minor();
			(obj.title) = () => ((this.$.$mol_locale.text("$my_dnd_roll_composer_Mod_increase_title")));
			(obj.click) = (next) => ((this.mod_increase(next)));
			return obj;
		}
		Mod_control_row(){
			const obj = new this.$.$mol_row();
			(obj.sub) = () => ([
				(this.Mod_decrease()), 
				(this.Mod_input()), 
				(this.Mod_increase())
			]);
			return obj;
		}
		Mod_field(){
			const obj = new this.$.$mol_form_field();
			(obj.name) = () => ((this.$.$mol_locale.text("$my_dnd_roll_composer_Mod_field_name")));
			(obj.content) = () => ([(this.Mod_control_row())]);
			return obj;
		}
		add_d4(next){
			if(next !== undefined) return next;
			return null;
		}
		Add_d4(){
			const obj = new this.$.$mol_button_minor();
			(obj.title) = () => ((this.$.$mol_locale.text("$my_dnd_roll_composer_Add_d4_title")));
			(obj.click) = (next) => ((this.add_d4(next)));
			return obj;
		}
		add_d6(next){
			if(next !== undefined) return next;
			return null;
		}
		Add_d6(){
			const obj = new this.$.$mol_button_minor();
			(obj.title) = () => ((this.$.$mol_locale.text("$my_dnd_roll_composer_Add_d6_title")));
			(obj.click) = (next) => ((this.add_d6(next)));
			return obj;
		}
		add_d8(next){
			if(next !== undefined) return next;
			return null;
		}
		Add_d8(){
			const obj = new this.$.$mol_button_minor();
			(obj.title) = () => ((this.$.$mol_locale.text("$my_dnd_roll_composer_Add_d8_title")));
			(obj.click) = (next) => ((this.add_d8(next)));
			return obj;
		}
		add_d10(next){
			if(next !== undefined) return next;
			return null;
		}
		Add_d10(){
			const obj = new this.$.$mol_button_minor();
			(obj.title) = () => ((this.$.$mol_locale.text("$my_dnd_roll_composer_Add_d10_title")));
			(obj.click) = (next) => ((this.add_d10(next)));
			return obj;
		}
		add_d12(next){
			if(next !== undefined) return next;
			return null;
		}
		Add_d12(){
			const obj = new this.$.$mol_button_minor();
			(obj.title) = () => ((this.$.$mol_locale.text("$my_dnd_roll_composer_Add_d12_title")));
			(obj.click) = (next) => ((this.add_d12(next)));
			return obj;
		}
		add_d20(next){
			if(next !== undefined) return next;
			return null;
		}
		Add_d20(){
			const obj = new this.$.$mol_button_minor();
			(obj.title) = () => ((this.$.$mol_locale.text("$my_dnd_roll_composer_Add_d20_title")));
			(obj.click) = (next) => ((this.add_d20(next)));
			return obj;
		}
		add_d100(next){
			if(next !== undefined) return next;
			return null;
		}
		Add_d100(){
			const obj = new this.$.$mol_button_minor();
			(obj.title) = () => ((this.$.$mol_locale.text("$my_dnd_roll_composer_Add_d100_title")));
			(obj.click) = (next) => ((this.add_d100(next)));
			return obj;
		}
		clear_formula(){
			return null;
		}
		Clear_formula(){
			const obj = new this.$.$mol_button_minor();
			(obj.title) = () => ((this.$.$mol_locale.text("$my_dnd_roll_composer_Clear_formula_title")));
			(obj.click) = (next) => ((this.clear_formula()));
			return obj;
		}
		Quick_buttons(){
			const obj = new this.$.$mol_row();
			(obj.sub) = () => ([
				(this.Add_d4()), 
				(this.Add_d6()), 
				(this.Add_d8()), 
				(this.Add_d10()), 
				(this.Add_d12()), 
				(this.Add_d20()), 
				(this.Add_d100()), 
				(this.Clear_formula())
			]);
			return obj;
		}
		roll(next){
			if(next !== undefined) return next;
			return null;
		}
		Roll_button(){
			const obj = new this.$.$mol_button_major();
			(obj.title) = () => ((this.$.$mol_locale.text("$my_dnd_roll_composer_Roll_button_title")));
			(obj.click) = (next) => ((this.roll(next)));
			return obj;
		}
		Result_label(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ((this.$.$mol_locale.text("$my_dnd_roll_composer_Result_label_text")));
			return obj;
		}
		result_text(){
			return "-";
		}
		Result_display(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ((this.result_text()));
			return obj;
		}
		math_text(){
			return "...";
		}
		Math_display(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ((this.math_text()));
			return obj;
		}
		Result_block(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([
				(this.Result_label()), 
				(this.Result_display()), 
				(this.Math_display())
			]);
			return obj;
		}
		History_list(){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ((this.history_rows()));
			return obj;
		}
		History_section(){
			const obj = new this.$.$mol_section();
			(obj.title) = () => ((this.$.$mol_locale.text("$my_dnd_roll_composer_History_section_title")));
			(obj.sub) = () => ([(this.History_list())]);
			return obj;
		}
		sub(){
			return [
				(this.Formula_field()), 
				(this.Mod_field()), 
				(this.Quick_buttons()), 
				(this.Roll_button()), 
				(this.Result_block()), 
				(this.History_section())
			];
		}
	};
	($mol_mem(($.$my_dnd_roll_composer.prototype), "Formula_input"));
	($mol_mem(($.$my_dnd_roll_composer.prototype), "Formula_field"));
	($mol_mem(($.$my_dnd_roll_composer.prototype), "mod_decrease"));
	($mol_mem(($.$my_dnd_roll_composer.prototype), "Mod_decrease"));
	($mol_mem(($.$my_dnd_roll_composer.prototype), "Mod_input"));
	($mol_mem(($.$my_dnd_roll_composer.prototype), "mod_increase"));
	($mol_mem(($.$my_dnd_roll_composer.prototype), "Mod_increase"));
	($mol_mem(($.$my_dnd_roll_composer.prototype), "Mod_control_row"));
	($mol_mem(($.$my_dnd_roll_composer.prototype), "Mod_field"));
	($mol_mem(($.$my_dnd_roll_composer.prototype), "add_d4"));
	($mol_mem(($.$my_dnd_roll_composer.prototype), "Add_d4"));
	($mol_mem(($.$my_dnd_roll_composer.prototype), "add_d6"));
	($mol_mem(($.$my_dnd_roll_composer.prototype), "Add_d6"));
	($mol_mem(($.$my_dnd_roll_composer.prototype), "add_d8"));
	($mol_mem(($.$my_dnd_roll_composer.prototype), "Add_d8"));
	($mol_mem(($.$my_dnd_roll_composer.prototype), "add_d10"));
	($mol_mem(($.$my_dnd_roll_composer.prototype), "Add_d10"));
	($mol_mem(($.$my_dnd_roll_composer.prototype), "add_d12"));
	($mol_mem(($.$my_dnd_roll_composer.prototype), "Add_d12"));
	($mol_mem(($.$my_dnd_roll_composer.prototype), "add_d20"));
	($mol_mem(($.$my_dnd_roll_composer.prototype), "Add_d20"));
	($mol_mem(($.$my_dnd_roll_composer.prototype), "add_d100"));
	($mol_mem(($.$my_dnd_roll_composer.prototype), "Add_d100"));
	($mol_mem(($.$my_dnd_roll_composer.prototype), "Clear_formula"));
	($mol_mem(($.$my_dnd_roll_composer.prototype), "Quick_buttons"));
	($mol_mem(($.$my_dnd_roll_composer.prototype), "roll"));
	($mol_mem(($.$my_dnd_roll_composer.prototype), "Roll_button"));
	($mol_mem(($.$my_dnd_roll_composer.prototype), "Result_label"));
	($mol_mem(($.$my_dnd_roll_composer.prototype), "Result_display"));
	($mol_mem(($.$my_dnd_roll_composer.prototype), "Math_display"));
	($mol_mem(($.$my_dnd_roll_composer.prototype), "Result_block"));
	($mol_mem(($.$my_dnd_roll_composer.prototype), "History_list"));
	($mol_mem(($.$my_dnd_roll_composer.prototype), "History_section"));

//# sourceMappingURL=composer.view.tree.js.map