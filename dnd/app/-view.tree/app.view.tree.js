	($.$my_dnd_app) = class $my_dnd_app extends ($.$mol_view) {
		Dise_spread_close(){
			return (this.Catalog().Spread_close());
		}
		Roll_composer(){
			const obj = new this.$.$my_dnd_roll_composer();
			return obj;
		}
		Dice_page(){
			const obj = new this.$.$mol_page();
			(obj.title) = () => ((this.$.$mol_locale.text("$my_dnd_app_Dice_page_title")));
			(obj.tools) = () => ([(this.Dise_spread_close())]);
			(obj.body) = () => ([(this.Roll_composer())]);
			return obj;
		}
		Notes(){
			const obj = new this.$.$my_dnd_notes();
			return obj;
		}
		Weapon(){
			const obj = new this.$.$my_dnd_notes();
			return obj;
		}
		NPC(){
			const obj = new this.$.$my_dnd_notes();
			return obj;
		}
		Notes_container(){
			const obj = new this.$.$mol_row();
			(obj.sub) = () => ([
				(this.Notes()), 
				(this.Weapon()), 
				(this.NPC())
			]);
			return obj;
		}
		Notes_page(){
			const obj = new this.$.$mol_page();
			(obj.title) = () => ((this.$.$mol_locale.text("$my_dnd_app_Notes_page_title")));
			(obj.tools) = () => ([(this.Dise_spread_close())]);
			(obj.body) = () => ([(this.Notes_container())]);
			return obj;
		}
		Generator(){
			const obj = new this.$.$my_dnd_generator();
			return obj;
		}
		Generator_page(){
			const obj = new this.$.$mol_page();
			(obj.title) = () => ((this.$.$mol_locale.text("$my_dnd_app_Generator_page_title")));
			(obj.tools) = () => ([(this.Dise_spread_close())]);
			(obj.body) = () => ([(this.Generator())]);
			return obj;
		}
		spreads_map(){
			return {
				"dice": (this.Dice_page()), 
				"notes": (this.Notes_page()), 
				"generator": (this.Generator_page())
			};
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
	($mol_mem(($.$my_dnd_app.prototype), "Roll_composer"));
	($mol_mem(($.$my_dnd_app.prototype), "Dice_page"));
	($mol_mem(($.$my_dnd_app.prototype), "Notes"));
	($mol_mem(($.$my_dnd_app.prototype), "Weapon"));
	($mol_mem(($.$my_dnd_app.prototype), "NPC"));
	($mol_mem(($.$my_dnd_app.prototype), "Notes_container"));
	($mol_mem(($.$my_dnd_app.prototype), "Notes_page"));
	($mol_mem(($.$my_dnd_app.prototype), "Generator"));
	($mol_mem(($.$my_dnd_app.prototype), "Generator_page"));
	($mol_mem(($.$my_dnd_app.prototype), "Catalog"));

//# sourceMappingURL=app.view.tree.js.map