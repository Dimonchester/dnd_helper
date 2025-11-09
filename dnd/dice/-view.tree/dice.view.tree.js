	($.$my_dnd_dice) = class $my_dnd_dice extends ($.$mol_view) {
		count(next){
			if(next !== undefined) return next;
			return 1;
		}
		Count_input(){
			const obj = new this.$.$mol_number();
			(obj.value) = (next) => ((this.count(next)));
			return obj;
		}
		Count_field(){
			const obj = new this.$.$mol_form_field();
			(obj.name) = () => ((this.$.$mol_locale.text("$my_dnd_dice_Count_field_name")));
			(obj.content) = () => ([(this.Count_input())]);
			return obj;
		}
		modifier(next){
			if(next !== undefined) return next;
			return 0;
		}
		Mod_input(){
			const obj = new this.$.$mol_number();
			(obj.value) = (next) => ((this.modifier(next)));
			return obj;
		}
		Mod_field(){
			const obj = new this.$.$mol_form_field();
			(obj.name) = () => ((this.$.$mol_locale.text("$my_dnd_dice_Mod_field_name")));
			(obj.content) = () => ([(this.Mod_input())]);
			return obj;
		}
		roll(next){
			if(next !== undefined) return next;
			return null;
		}
		result_badge(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.result_title())]);
			return obj;
		}
		Result(){
			const obj = new this.$.$mol_labeler();
			(obj.sub) = () => ([(this.dice_type()), (this.result_badge())]);
			return obj;
		}
		Button_content(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Result())]);
			return obj;
		}
		Roll(){
			const obj = new this.$.$mol_button_major();
			(obj.enabled) = () => (true);
			(obj.click) = (next) => ((this.roll(next)));
			(obj.sub) = () => ([(this.Button_content())]);
			return obj;
		}
		sides(){
			return 20;
		}
		sub(){
			return [
				(this.Count_field()), 
				(this.Mod_field()), 
				(this.Roll())
			];
		}
	};
	($mol_mem(($.$my_dnd_dice.prototype), "count"));
	($mol_mem(($.$my_dnd_dice.prototype), "Count_input"));
	($mol_mem(($.$my_dnd_dice.prototype), "Count_field"));
	($mol_mem(($.$my_dnd_dice.prototype), "modifier"));
	($mol_mem(($.$my_dnd_dice.prototype), "Mod_input"));
	($mol_mem(($.$my_dnd_dice.prototype), "Mod_field"));
	($mol_mem(($.$my_dnd_dice.prototype), "roll"));
	($mol_mem(($.$my_dnd_dice.prototype), "result_badge"));
	($mol_mem(($.$my_dnd_dice.prototype), "Result"));
	($mol_mem(($.$my_dnd_dice.prototype), "Button_content"));
	($mol_mem(($.$my_dnd_dice.prototype), "Roll"));

//# sourceMappingURL=dice.view.tree.js.map