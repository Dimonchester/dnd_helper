	($.$my_dnd_notes_weapon) = class $my_dnd_notes_weapon extends ($.$mol_page) {
		new_name(next){
			if(next !== undefined) return next;
			return "";
		}
		New_name(){
			const obj = new this.$.$mol_string();
			(obj.hint) = () => ((this.$.$mol_locale.text("$my_dnd_notes_weapon_New_name_hint")));
			(obj.value) = (next) => ((this.new_name(next)));
			return obj;
		}
		new_damage(next){
			if(next !== undefined) return next;
			return "";
		}
		New_damage(){
			const obj = new this.$.$mol_string();
			(obj.hint) = () => ((this.$.$mol_locale.text("$my_dnd_notes_weapon_New_damage_hint")));
			(obj.value) = (next) => ((this.new_damage(next)));
			return obj;
		}
		New_row_1(){
			const obj = new this.$.$mol_row();
			(obj.sub) = () => ([(this.New_name()), (this.New_damage())]);
			return obj;
		}
		new_cost(next){
			if(next !== undefined) return next;
			return "";
		}
		New_cost(){
			const obj = new this.$.$mol_string();
			(obj.hint) = () => ((this.$.$mol_locale.text("$my_dnd_notes_weapon_New_cost_hint")));
			(obj.value) = (next) => ((this.new_cost(next)));
			return obj;
		}
		new_weight(next){
			if(next !== undefined) return next;
			return "";
		}
		New_weight(){
			const obj = new this.$.$mol_string();
			(obj.hint) = () => ((this.$.$mol_locale.text("$my_dnd_notes_weapon_New_weight_hint")));
			(obj.value) = (next) => ((this.new_weight(next)));
			return obj;
		}
		New_row_2(){
			const obj = new this.$.$mol_row();
			(obj.sub) = () => ([(this.New_cost()), (this.New_weight())]);
			return obj;
		}
		new_quantity(next){
			if(next !== undefined) return next;
			return 1;
		}
		New_quantity(){
			const obj = new this.$.$mol_number();
			(obj.value) = (next) => ((this.new_quantity(next)));
			return obj;
		}
		New_quantity_field(){
			const obj = new this.$.$mol_form_field();
			(obj.name) = () => ((this.$.$mol_locale.text("$my_dnd_notes_weapon_New_quantity_field_name")));
			(obj.content) = () => ([(this.New_quantity())]);
			return obj;
		}
		new_properties(next){
			if(next !== undefined) return next;
			return "";
		}
		New_properties(){
			const obj = new this.$.$mol_textarea();
			(obj.hint) = () => ((this.$.$mol_locale.text("$my_dnd_notes_weapon_New_properties_hint")));
			(obj.value) = (next) => ((this.new_properties(next)));
			return obj;
		}
		new_attunement(next){
			if(next !== undefined) return next;
			return false;
		}
		New_attunement(){
			const obj = new this.$.$mol_check_box();
			(obj.title) = () => ((this.$.$mol_locale.text("$my_dnd_notes_weapon_New_attunement_title")));
			(obj.checked) = (next) => ((this.new_attunement(next)));
			return obj;
		}
		new_used(next){
			if(next !== undefined) return next;
			return false;
		}
		New_used(){
			const obj = new this.$.$mol_check_box();
			(obj.title) = () => ((this.$.$mol_locale.text("$my_dnd_notes_weapon_New_used_title")));
			(obj.checked) = (next) => ((this.new_used(next)));
			return obj;
		}
		New_row_3(){
			const obj = new this.$.$mol_row();
			(obj.sub) = () => ([(this.New_attunement()), (this.New_used())]);
			return obj;
		}
		add_weapon(next){
			if(next !== undefined) return next;
			return null;
		}
		Add_button(){
			const obj = new this.$.$mol_button_major();
			(obj.title) = () => ((this.$.$mol_locale.text("$my_dnd_notes_weapon_Add_button_title")));
			(obj.click) = (next) => ((this.add_weapon(next)));
			return obj;
		}
		Add_form(){
			const obj = new this.$.$mol_form();
			(obj.sub) = () => ([
				(this.New_row_1()), 
				(this.New_row_2()), 
				(this.New_quantity_field()), 
				(this.New_properties()), 
				(this.New_row_3()), 
				(this.Add_button())
			]);
			return obj;
		}
		weapon_name(id, next){
			if(next !== undefined) return next;
			return "";
		}
		Weapon_name(id){
			const obj = new this.$.$mol_string();
			(obj.value) = (next) => ((this.weapon_name(id, next)));
			return obj;
		}
		weapon_damage(id, next){
			if(next !== undefined) return next;
			return "";
		}
		Weapon_damage(id){
			const obj = new this.$.$mol_string();
			(obj.value) = (next) => ((this.weapon_damage(id, next)));
			return obj;
		}
		delete_weapon(id, next){
			if(next !== undefined) return next;
			return null;
		}
		icondelete(id){
			const obj = new this.$.$mol_icon_delete();
			return obj;
		}
		Delete_button(id){
			const obj = new this.$.$mol_button_open();
			(obj.click) = (next) => ((this.delete_weapon(id, next)));
			(obj.sub) = () => ([(this.icondelete(id))]);
			return obj;
		}
		Weapon_header(id){
			const obj = new this.$.$mol_row();
			(obj.sub) = () => ([
				(this.Weapon_name(id)), 
				(this.Weapon_damage(id)), 
				(this.Delete_button(id))
			]);
			return obj;
		}
		weapon_cost(id, next){
			if(next !== undefined) return next;
			return "";
		}
		Weapon_cost(id){
			const obj = new this.$.$mol_string();
			(obj.value) = (next) => ((this.weapon_cost(id, next)));
			return obj;
		}
		Weapon_cost_field(id){
			const obj = new this.$.$mol_form_field();
			(obj.name) = () => ((this.$.$mol_locale.text("$my_dnd_notes_weapon_Weapon_cost_field_name")));
			(obj.content) = () => ([(this.Weapon_cost(id))]);
			return obj;
		}
		weapon_weight(id, next){
			if(next !== undefined) return next;
			return "";
		}
		Weapon_weight(id){
			const obj = new this.$.$mol_string();
			(obj.value) = (next) => ((this.weapon_weight(id, next)));
			return obj;
		}
		Weapon_weight_field(id){
			const obj = new this.$.$mol_form_field();
			(obj.name) = () => ((this.$.$mol_locale.text("$my_dnd_notes_weapon_Weapon_weight_field_name")));
			(obj.content) = () => ([(this.Weapon_weight(id))]);
			return obj;
		}
		weapon_quantity(id, next){
			if(next !== undefined) return next;
			return 1;
		}
		Weapon_quantity(id){
			const obj = new this.$.$mol_number();
			(obj.value) = (next) => ((this.weapon_quantity(id, next)));
			return obj;
		}
		Weapon_quantity_field(id){
			const obj = new this.$.$mol_form_field();
			(obj.name) = () => ((this.$.$mol_locale.text("$my_dnd_notes_weapon_Weapon_quantity_field_name")));
			(obj.content) = () => ([(this.Weapon_quantity(id))]);
			return obj;
		}
		Weapon_stats_row(id){
			const obj = new this.$.$mol_row();
			(obj.sub) = () => ([
				(this.Weapon_cost_field(id)), 
				(this.Weapon_weight_field(id)), 
				(this.Weapon_quantity_field(id))
			]);
			return obj;
		}
		weapon_properties(id, next){
			if(next !== undefined) return next;
			return "";
		}
		Weapon_properties(id){
			const obj = new this.$.$mol_textarea();
			(obj.value) = (next) => ((this.weapon_properties(id, next)));
			return obj;
		}
		Weapon_properties_field(id){
			const obj = new this.$.$mol_form_field();
			(obj.name) = () => ((this.$.$mol_locale.text("$my_dnd_notes_weapon_Weapon_properties_field_name")));
			(obj.content) = () => ([(this.Weapon_properties(id))]);
			return obj;
		}
		weapon_attunement(id, next){
			if(next !== undefined) return next;
			return false;
		}
		Weapon_attunement(id){
			const obj = new this.$.$mol_check_box();
			(obj.title) = () => ((this.$.$mol_locale.text("$my_dnd_notes_weapon_Weapon_attunement_title")));
			(obj.checked) = (next) => ((this.weapon_attunement(id, next)));
			return obj;
		}
		weapon_used(id, next){
			if(next !== undefined) return next;
			return false;
		}
		Weapon_used(id){
			const obj = new this.$.$mol_check_box();
			(obj.title) = () => ((this.$.$mol_locale.text("$my_dnd_notes_weapon_Weapon_used_title")));
			(obj.checked) = (next) => ((this.weapon_used(id, next)));
			return obj;
		}
		Weapon_bool_row(id){
			const obj = new this.$.$mol_row();
			(obj.sub) = () => ([(this.Weapon_attunement(id)), (this.Weapon_used(id))]);
			return obj;
		}
		Weapon_row(id){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([
				(this.Weapon_header(id)), 
				(this.Weapon_stats_row(id)), 
				(this.Weapon_properties_field(id)), 
				(this.Weapon_bool_row(id))
			]);
			return obj;
		}
		Weapon_rows(){
			return [(this.Weapon_row(id))];
		}
		Weapon_list(){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ((this.Weapon_rows()));
			return obj;
		}
		List_section(){
			const obj = new this.$.$mol_section();
			(obj.sub) = () => ([(this.Weapon_list())]);
			return obj;
		}
		body(){
			return [(this.Add_form()), (this.List_section())];
		}
	};
	($mol_mem(($.$my_dnd_notes_weapon.prototype), "new_name"));
	($mol_mem(($.$my_dnd_notes_weapon.prototype), "New_name"));
	($mol_mem(($.$my_dnd_notes_weapon.prototype), "new_damage"));
	($mol_mem(($.$my_dnd_notes_weapon.prototype), "New_damage"));
	($mol_mem(($.$my_dnd_notes_weapon.prototype), "New_row_1"));
	($mol_mem(($.$my_dnd_notes_weapon.prototype), "new_cost"));
	($mol_mem(($.$my_dnd_notes_weapon.prototype), "New_cost"));
	($mol_mem(($.$my_dnd_notes_weapon.prototype), "new_weight"));
	($mol_mem(($.$my_dnd_notes_weapon.prototype), "New_weight"));
	($mol_mem(($.$my_dnd_notes_weapon.prototype), "New_row_2"));
	($mol_mem(($.$my_dnd_notes_weapon.prototype), "new_quantity"));
	($mol_mem(($.$my_dnd_notes_weapon.prototype), "New_quantity"));
	($mol_mem(($.$my_dnd_notes_weapon.prototype), "New_quantity_field"));
	($mol_mem(($.$my_dnd_notes_weapon.prototype), "new_properties"));
	($mol_mem(($.$my_dnd_notes_weapon.prototype), "New_properties"));
	($mol_mem(($.$my_dnd_notes_weapon.prototype), "new_attunement"));
	($mol_mem(($.$my_dnd_notes_weapon.prototype), "New_attunement"));
	($mol_mem(($.$my_dnd_notes_weapon.prototype), "new_used"));
	($mol_mem(($.$my_dnd_notes_weapon.prototype), "New_used"));
	($mol_mem(($.$my_dnd_notes_weapon.prototype), "New_row_3"));
	($mol_mem(($.$my_dnd_notes_weapon.prototype), "add_weapon"));
	($mol_mem(($.$my_dnd_notes_weapon.prototype), "Add_button"));
	($mol_mem(($.$my_dnd_notes_weapon.prototype), "Add_form"));
	($mol_mem_key(($.$my_dnd_notes_weapon.prototype), "weapon_name"));
	($mol_mem_key(($.$my_dnd_notes_weapon.prototype), "Weapon_name"));
	($mol_mem_key(($.$my_dnd_notes_weapon.prototype), "weapon_damage"));
	($mol_mem_key(($.$my_dnd_notes_weapon.prototype), "Weapon_damage"));
	($mol_mem_key(($.$my_dnd_notes_weapon.prototype), "delete_weapon"));
	($mol_mem_key(($.$my_dnd_notes_weapon.prototype), "icondelete"));
	($mol_mem_key(($.$my_dnd_notes_weapon.prototype), "Delete_button"));
	($mol_mem_key(($.$my_dnd_notes_weapon.prototype), "Weapon_header"));
	($mol_mem_key(($.$my_dnd_notes_weapon.prototype), "weapon_cost"));
	($mol_mem_key(($.$my_dnd_notes_weapon.prototype), "Weapon_cost"));
	($mol_mem_key(($.$my_dnd_notes_weapon.prototype), "Weapon_cost_field"));
	($mol_mem_key(($.$my_dnd_notes_weapon.prototype), "weapon_weight"));
	($mol_mem_key(($.$my_dnd_notes_weapon.prototype), "Weapon_weight"));
	($mol_mem_key(($.$my_dnd_notes_weapon.prototype), "Weapon_weight_field"));
	($mol_mem_key(($.$my_dnd_notes_weapon.prototype), "weapon_quantity"));
	($mol_mem_key(($.$my_dnd_notes_weapon.prototype), "Weapon_quantity"));
	($mol_mem_key(($.$my_dnd_notes_weapon.prototype), "Weapon_quantity_field"));
	($mol_mem_key(($.$my_dnd_notes_weapon.prototype), "Weapon_stats_row"));
	($mol_mem_key(($.$my_dnd_notes_weapon.prototype), "weapon_properties"));
	($mol_mem_key(($.$my_dnd_notes_weapon.prototype), "Weapon_properties"));
	($mol_mem_key(($.$my_dnd_notes_weapon.prototype), "Weapon_properties_field"));
	($mol_mem_key(($.$my_dnd_notes_weapon.prototype), "weapon_attunement"));
	($mol_mem_key(($.$my_dnd_notes_weapon.prototype), "Weapon_attunement"));
	($mol_mem_key(($.$my_dnd_notes_weapon.prototype), "weapon_used"));
	($mol_mem_key(($.$my_dnd_notes_weapon.prototype), "Weapon_used"));
	($mol_mem_key(($.$my_dnd_notes_weapon.prototype), "Weapon_bool_row"));
	($mol_mem_key(($.$my_dnd_notes_weapon.prototype), "Weapon_row"));
	($mol_mem(($.$my_dnd_notes_weapon.prototype), "Weapon_list"));
	($mol_mem(($.$my_dnd_notes_weapon.prototype), "List_section"));

//# sourceMappingURL=weapon.view.tree.js.map