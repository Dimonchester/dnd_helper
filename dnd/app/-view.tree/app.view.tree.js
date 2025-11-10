	($.$my_dnd_app) = class $my_dnd_app extends ($.$mol_view) {
		Dise_spread_close(){
			return (this.Catalog().Spread_close());
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
			(obj.tools) = () => ([(this.Dise_spread_close())]);
			(obj.body) = () => ([(this.Start())]);
			return obj;
		}
		Notes_page(){
			const obj = new this.$.$my_dnd_notes();
			return obj;
		}
		spreads_map(){
			return {"dice": (this.Dice_page()), "notes": (this.Notes_page())};
		}
		Catalog(){
			const obj = new this.$.$mol_book2_catalog();
			(obj.param) = () => ("page");
			(obj.menu_title) = () => ((this.$.$mol_locale.text("$my_dnd_app_Catalog_menu_title")));
			(obj.spreads) = () => ((this.spreads_map()));
			return obj;
		}
		sub(){
			return [(this.Catalog())];
		}
	};
	($mol_mem(($.$my_dnd_app.prototype), "Dice_d4"));
	($mol_mem(($.$my_dnd_app.prototype), "Dice_d6"));
	($mol_mem(($.$my_dnd_app.prototype), "Dice_d8"));
	($mol_mem(($.$my_dnd_app.prototype), "Dice_d10"));
	($mol_mem(($.$my_dnd_app.prototype), "Dice_d12"));
	($mol_mem(($.$my_dnd_app.prototype), "Dice_d20"));
	($mol_mem(($.$my_dnd_app.prototype), "Dice_d100"));
	($mol_mem(($.$my_dnd_app.prototype), "Start"));
	($mol_mem(($.$my_dnd_app.prototype), "Dice_page"));
	($mol_mem(($.$my_dnd_app.prototype), "Notes_page"));
	($mol_mem(($.$my_dnd_app.prototype), "Catalog"));

//# sourceMappingURL=app.view.tree.js.map