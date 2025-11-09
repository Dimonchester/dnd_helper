	($.$my_dnd_app) = class $my_dnd_app extends ($.$mol_view) {
		Title(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ((this.$.$mol_locale.text("$my_dnd_app_Title_text")));
			return obj;
		}
		Title_roll(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ((this.$.$mol_locale.text("$my_dnd_app_Title_roll_text")));
			return obj;
		}
		Dice_d4(){
			const obj = new this.$.$my_dnd_dice();
			(obj.sides) = () => (4);
			return obj;
		}
		Dice_d6(){
			const obj = new this.$.$my_dnd_dice();
			(obj.sides) = () => (6);
			return obj;
		}
		Dice_d8(){
			const obj = new this.$.$my_dnd_dice();
			(obj.sides) = () => (8);
			return obj;
		}
		Dice_d10(){
			const obj = new this.$.$my_dnd_dice();
			(obj.sides) = () => (10);
			return obj;
		}
		Dice_d12(){
			const obj = new this.$.$my_dnd_dice();
			(obj.sides) = () => (12);
			return obj;
		}
		Dice_d20(){
			const obj = new this.$.$my_dnd_dice();
			(obj.sides) = () => (20);
			return obj;
		}
		Dice_d100(){
			const obj = new this.$.$my_dnd_dice();
			(obj.sides) = () => (100);
			return obj;
		}
		Start(){
			const obj = new this.$.$mol_row();
			(obj.sub) = () => ([
				(this.Title_roll()), 
				(this.Dice_d4()), 
				(this.Dice_d6()), 
				(this.Dice_d8()), 
				(this.Dice_d10()), 
				(this.Dice_d12()), 
				(this.Dice_d20()), 
				(this.Dice_d100())
			]);
			return obj;
		}
		Dice_page(){
			const obj = new this.$.$mol_page();
			(obj.title) = () => ((this.$.$mol_locale.text("$my_dnd_app_Dice_page_title")));
			(obj.sub) = () => ([(this.Start())]);
			return obj;
		}
		Spells_page(){
			const obj = new this.$.$my_dnd_spells();
			(obj.title) = () => ((this.$.$mol_locale.text("$my_dnd_app_Spells_page_title")));
			return obj;
		}
		Pager(){
			const obj = new this.$.$mol_book();
			(obj.pages) = () => ([(this.Dice_page()), (this.Spells_page())]);
			return obj;
		}
		sub(){
			return [(this.Title()), (this.Pager())];
		}
	};
	($mol_mem(($.$my_dnd_app.prototype), "Title"));
	($mol_mem(($.$my_dnd_app.prototype), "Title_roll"));
	($mol_mem(($.$my_dnd_app.prototype), "Dice_d4"));
	($mol_mem(($.$my_dnd_app.prototype), "Dice_d6"));
	($mol_mem(($.$my_dnd_app.prototype), "Dice_d8"));
	($mol_mem(($.$my_dnd_app.prototype), "Dice_d10"));
	($mol_mem(($.$my_dnd_app.prototype), "Dice_d12"));
	($mol_mem(($.$my_dnd_app.prototype), "Dice_d20"));
	($mol_mem(($.$my_dnd_app.prototype), "Dice_d100"));
	($mol_mem(($.$my_dnd_app.prototype), "Start"));
	($mol_mem(($.$my_dnd_app.prototype), "Dice_page"));
	($mol_mem(($.$my_dnd_app.prototype), "Spells_page"));
	($mol_mem(($.$my_dnd_app.prototype), "Pager"));

//# sourceMappingURL=app.view.tree.js.map