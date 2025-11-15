	($.$my_dnd_app) = class $my_dnd_app extends ($.$mol_view) {
		Spread_close(){
			return (this.Catalog().Spread_close());
		}
		Roll_composer(){
			const obj = new this.$.$my_dnd_dice_composer();
			return obj;
		}
		Dice_page(){
			const obj = new this.$.$mol_page();
			(obj.title) = () => ((this.$.$mol_locale.text("$my_dnd_app_Dice_page_title")));
			(obj.tools) = () => ([(this.Spread_close())]);
			(obj.body) = () => ([(this.Roll_composer())]);
			return obj;
		}
		Notes_spread_close(){
			return (this.Notes_book().Spread_close());
		}
		Notes(){
			const obj = new this.$.$my_dnd_notes();
			(obj.title) = () => ("Notes");
			(obj.tools) = () => ([(this.Notes_spread_close())]);
			(obj.state_key) = () => ("my_dnd_notes_general");
			return obj;
		}
		Quests(){
			const obj = new this.$.$my_dnd_notes();
			(obj.title) = () => ((this.$.$mol_locale.text("$my_dnd_app_Quests_title")));
			(obj.tools) = () => ([(this.Notes_spread_close())]);
			(obj.state_key) = () => ("my_dnd_notes_quests");
			return obj;
		}
		Weapon(){
			const obj = new this.$.$my_dnd_notes_weapon();
			(obj.title) = () => ((this.$.$mol_locale.text("$my_dnd_app_Weapon_title")));
			(obj.tools) = () => ([(this.Notes_spread_close())]);
			(obj.state_key) = () => ("my_dnd_weapon_items");
			return obj;
		}
		NPC(){
			const obj = new this.$.$my_dnd_notes_npc();
			(obj.title) = () => ((this.$.$mol_locale.text("$my_dnd_app_NPC_title")));
			(obj.tools) = () => ([(this.Notes_spread_close())]);
			(obj.state_key) = () => ("my_dnd_npc_items");
			return obj;
		}
		Notes_book(){
			const obj = new this.$.$mol_book2_catalog();
			(obj.param) = () => ("notes_catalog");
			(obj.menu_title) = () => ((this.$.$mol_locale.text("$my_dnd_app_Notes_book_menu_title")));
			(obj.menu_tools) = () => ([(this.Spread_close())]);
			(obj.spreads) = () => ({
				"notes": (this.Notes()), 
				"quests": (this.Quests()), 
				"weapon": (this.Weapon()), 
				"npc": (this.NPC())
			});
			return obj;
		}
		Generator(){
			const obj = new this.$.$my_dnd_generator();
			return obj;
		}
		Generator_page(){
			const obj = new this.$.$mol_page();
			(obj.title) = () => ((this.$.$mol_locale.text("$my_dnd_app_Generator_page_title")));
			(obj.tools) = () => ([(this.Spread_close())]);
			(obj.body) = () => ([(this.Generator())]);
			return obj;
		}
		Catalog(){
			const obj = new this.$.$mol_book2_catalog();
			(obj.param) = () => ("page");
			(obj.menu_title) = () => ((this.$.$mol_locale.text("$my_dnd_app_Catalog_menu_title")));
			(obj.spreads) = () => ({
				"dice": (this.Dice_page()), 
				"notes_book": (this.Notes_book()), 
				"generator": (this.Generator_page())
			});
			return obj;
		}
		sub(){
			return [(this.Catalog())];
		}
	};
	($mol_mem(($.$my_dnd_app.prototype), "Roll_composer"));
	($mol_mem(($.$my_dnd_app.prototype), "Dice_page"));
	($mol_mem(($.$my_dnd_app.prototype), "Notes"));
	($mol_mem(($.$my_dnd_app.prototype), "Quests"));
	($mol_mem(($.$my_dnd_app.prototype), "Weapon"));
	($mol_mem(($.$my_dnd_app.prototype), "NPC"));
	($mol_mem(($.$my_dnd_app.prototype), "Notes_book"));
	($mol_mem(($.$my_dnd_app.prototype), "Generator"));
	($mol_mem(($.$my_dnd_app.prototype), "Generator_page"));
	($mol_mem(($.$my_dnd_app.prototype), "Catalog"));

//# sourceMappingURL=app.view.tree.js.map