	($.$my_dnd_notes) = class $my_dnd_notes extends ($.$mol_page) {
		new_note_text(next){
			if(next !== undefined) return next;
			return "";
		}
		New_note_text(){
			const obj = new this.$.$mol_string();
			(obj.hint) = () => ((this.$.$mol_locale.text("$my_dnd_notes_New_note_text_hint")));
			(obj.value) = (next) => ((this.new_note_text(next)));
			return obj;
		}
		add_note(next){
			if(next !== undefined) return next;
			return null;
		}
		Add_button(){
			const obj = new this.$.$mol_button_major();
			(obj.title) = () => ((this.$.$mol_locale.text("$my_dnd_notes_Add_button_title")));
			(obj.click) = (next) => ((this.add_note(next)));
			return obj;
		}
		Add_form(){
			const obj = new this.$.$mol_form();
			(obj.sub) = () => ([(this.New_note_text()), (this.Add_button())]);
			return obj;
		}
		note_checked(id, next){
			if(next !== undefined) return next;
			return false;
		}
		Note_check(id){
			const obj = new this.$.$mol_check_box();
			(obj.checked) = (next) => ((this.note_checked(id, next)));
			return obj;
		}
		note_text(id, next){
			if(next !== undefined) return next;
			return "";
		}
		Note_text(id){
			const obj = new this.$.$mol_textarea();
			(obj.value) = (next) => ((this.note_text(id, next)));
			(obj.enabled) = () => (true);
			return obj;
		}
		delete_note(id, next){
			if(next !== undefined) return next;
			return null;
		}
		icondelete(){
			const obj = new this.$.$mol_icon_delete();
			return obj;
		}
		Delete_button(id){
			const obj = new this.$.$mol_button_open();
			(obj.click) = (next) => ((this.delete_note(id, next)));
			(obj.sub) = () => ([(this.icondelete())]);
			return obj;
		}
		Note_row(id){
			const obj = new this.$.$mol_row();
			(obj.sub) = () => ([
				(this.Note_check(id)), 
				(this.Note_text(id)), 
				(this.Delete_button(id))
			]);
			return obj;
		}
		Note_rows(){
			return [(this.Note_row(id))];
		}
		Note_list(){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ((this.Note_rows()));
			return obj;
		}
		List_section(){
			const obj = new this.$.$mol_section();
			(obj.sub) = () => ([(this.Note_list())]);
			return obj;
		}
		body(){
			return [(this.Add_form()), (this.List_section())];
		}
	};
	($mol_mem(($.$my_dnd_notes.prototype), "new_note_text"));
	($mol_mem(($.$my_dnd_notes.prototype), "New_note_text"));
	($mol_mem(($.$my_dnd_notes.prototype), "add_note"));
	($mol_mem(($.$my_dnd_notes.prototype), "Add_button"));
	($mol_mem(($.$my_dnd_notes.prototype), "Add_form"));
	($mol_mem_key(($.$my_dnd_notes.prototype), "note_checked"));
	($mol_mem_key(($.$my_dnd_notes.prototype), "Note_check"));
	($mol_mem_key(($.$my_dnd_notes.prototype), "note_text"));
	($mol_mem_key(($.$my_dnd_notes.prototype), "Note_text"));
	($mol_mem_key(($.$my_dnd_notes.prototype), "delete_note"));
	($mol_mem(($.$my_dnd_notes.prototype), "icondelete"));
	($mol_mem_key(($.$my_dnd_notes.prototype), "Delete_button"));
	($mol_mem_key(($.$my_dnd_notes.prototype), "Note_row"));
	($mol_mem(($.$my_dnd_notes.prototype), "Note_list"));
	($mol_mem(($.$my_dnd_notes.prototype), "List_section"));

//# sourceMappingURL=notes.view.tree.js.map