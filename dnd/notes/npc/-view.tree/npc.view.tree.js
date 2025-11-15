	($.$my_dnd_notes_npc) = class $my_dnd_notes_npc extends ($.$mol_page) {
		new_name_text(next){
			if(next !== undefined) return next;
			return "";
		}
		New_name(){
			const obj = new this.$.$mol_string();
			(obj.hint) = () => ((this.$.$mol_locale.text("$my_dnd_notes_npc_New_name_hint")));
			(obj.value) = (next) => ((this.new_name_text(next)));
			return obj;
		}
		new_descr_text(next){
			if(next !== undefined) return next;
			return "";
		}
		New_descr(){
			const obj = new this.$.$mol_textarea();
			(obj.hint) = () => ((this.$.$mol_locale.text("$my_dnd_notes_npc_New_descr_hint")));
			(obj.value) = (next) => ((this.new_descr_text(next)));
			return obj;
		}
		add_npc(next){
			if(next !== undefined) return next;
			return null;
		}
		Add_button(){
			const obj = new this.$.$mol_button_major();
			(obj.title) = () => ((this.$.$mol_locale.text("$my_dnd_notes_npc_Add_button_title")));
			(obj.click) = (next) => ((this.add_npc(next)));
			return obj;
		}
		Add_form(){
			const obj = new this.$.$mol_form();
			(obj.sub) = () => ([
				(this.New_name()), 
				(this.New_descr()), 
				(this.Add_button())
			]);
			return obj;
		}
		npc_name(id, next){
			if(next !== undefined) return next;
			return "";
		}
		Npc_name_text(id){
			const obj = new this.$.$mol_string();
			(obj.value) = (next) => ((this.npc_name(id, next)));
			(obj.enabled) = () => (true);
			return obj;
		}
		delete_npc(id, next){
			if(next !== undefined) return next;
			return null;
		}
		icondelete(id){
			const obj = new this.$.$mol_icon_delete();
			return obj;
		}
		Delete_button(id){
			const obj = new this.$.$mol_button_open();
			(obj.click) = (next) => ((this.delete_npc(id, next)));
			(obj.sub) = () => ([(this.icondelete(id))]);
			return obj;
		}
		Npc_header(id){
			const obj = new this.$.$mol_row();
			(obj.sub) = () => ([(this.Npc_name_text(id)), (this.Delete_button(id))]);
			return obj;
		}
		npc_descr(id, next){
			if(next !== undefined) return next;
			return "";
		}
		Npc_descr_text(id){
			const obj = new this.$.$mol_textarea();
			(obj.value) = (next) => ((this.npc_descr(id, next)));
			(obj.enabled) = () => (true);
			return obj;
		}
		Npc_row(id){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Npc_header(id)), (this.Npc_descr_text(id))]);
			return obj;
		}
		Npc_rows(){
			return [(this.Npc_row(id))];
		}
		Npc_list(){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ((this.Npc_rows()));
			return obj;
		}
		List_section(){
			const obj = new this.$.$mol_section();
			(obj.sub) = () => ([(this.Npc_list())]);
			return obj;
		}
		body(){
			return [(this.Add_form()), (this.List_section())];
		}
	};
	($mol_mem(($.$my_dnd_notes_npc.prototype), "new_name_text"));
	($mol_mem(($.$my_dnd_notes_npc.prototype), "New_name"));
	($mol_mem(($.$my_dnd_notes_npc.prototype), "new_descr_text"));
	($mol_mem(($.$my_dnd_notes_npc.prototype), "New_descr"));
	($mol_mem(($.$my_dnd_notes_npc.prototype), "add_npc"));
	($mol_mem(($.$my_dnd_notes_npc.prototype), "Add_button"));
	($mol_mem(($.$my_dnd_notes_npc.prototype), "Add_form"));
	($mol_mem_key(($.$my_dnd_notes_npc.prototype), "npc_name"));
	($mol_mem_key(($.$my_dnd_notes_npc.prototype), "Npc_name_text"));
	($mol_mem_key(($.$my_dnd_notes_npc.prototype), "delete_npc"));
	($mol_mem_key(($.$my_dnd_notes_npc.prototype), "icondelete"));
	($mol_mem_key(($.$my_dnd_notes_npc.prototype), "Delete_button"));
	($mol_mem_key(($.$my_dnd_notes_npc.prototype), "Npc_header"));
	($mol_mem_key(($.$my_dnd_notes_npc.prototype), "npc_descr"));
	($mol_mem_key(($.$my_dnd_notes_npc.prototype), "Npc_descr_text"));
	($mol_mem_key(($.$my_dnd_notes_npc.prototype), "Npc_row"));
	($mol_mem(($.$my_dnd_notes_npc.prototype), "Npc_list"));
	($mol_mem(($.$my_dnd_notes_npc.prototype), "List_section"));

//# sourceMappingURL=npc.view.tree.js.map