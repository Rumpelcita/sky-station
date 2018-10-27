
BasicGame.Preloader = function (game) {

	this.background = null;
	this.preloadBar = null;

	this.ready = false;

};

BasicGame.Preloader.prototype = {

	preload: function () {

		//	These are the assets we loaded in Boot.js
		//	A nice sparkly background and a loading progress bar
		this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'preloaderBar');
		this.preloadBar.anchor.setTo(0.5);

		//	This sets the preloadBar sprite as a loader sprite.
		//	What that does is automatically crop the sprite from 0 to full-width
		//	as the files below are loaded in.
		this.load.setPreloadSprite(this.preloadBar);

		//	Here we load the rest of the assets our game needs.
		//	As this is just a Project Template I've not provided these assets, swap them for your own.
		// this.load.image('titlepage', 'images/title.jpg');
		// this.load.atlas('playButton', 'images/play_button.png', 'images/play_button.json');
		// this.load.audio('titleMusic', ['audio/main_menu.mp3']);
		// this.load.bitmapFont('caslon', 'fonts/caslon.png', 'fonts/caslon.xml');
		//	+ lots of other required assets here

		//Load button plus tv
		this.game.load.spritesheet('button', 'assets/button.png', 115, 129.5);
		this.game.load.spritesheet('export_button', 'assets/export.png', 62, 65);
		this.game.load.spritesheet('hit_box', 'assets/hit_box.png', 952, 95);
		this.game.load.image('tv', 'assets/tv.png');
		this.game.load.spritesheet('static', 'assets/static.png', 678, 530);
		
		// Punch attribution: punch by Smalllike from the Noun Project
		this.game.load.spritesheet('punch', 'assets/punch.png', 52, 85);

		// Loads the skies
		this.load.image('sky-1', 'assets/sky/sky1.jpg');
		this.load.image('sky-2', 'assets/sky/sky2.jpg');
		this.load.image('sky-3', 'assets/sky/sky3.jpg');
		this.load.image('sky-4', 'assets/sky/sky4.jpg');
		this.load.image('sky-5', 'assets/sky/sky5.jpg');
		this.load.image('sky-6', 'assets/sky/sky6.jpg');
		this.load.image('sky-7', 'assets/sky/sky7.jpg');
		this.load.image('sky-8', 'assets/sky/sky8.jpg');
		this.load.image('sky-9', 'assets/sky/sky9.jpg');
		this.load.image('sky-10', 'assets/sky/sky10.jpg');
		this.load.image('sky-11', 'assets/sky/sky11.jpg');
		this.load.image('sky-12', 'assets/sky/sky12.jpg');
		this.load.image('sky-13', 'assets/sky/sky13.jpg');
		this.load.image('sky-14', 'assets/sky/sky14.jpg');
		this.load.image('sky-15', 'assets/sky/sky15.jpg');
		this.load.image('sky-16', 'assets/sky/sky16.jpg');
		this.load.image('sky-17', 'assets/sky/sky17.jpg');
		this.load.image('sky-18', 'assets/sky/sky18.jpg');
		this.load.image('sky-19', 'assets/sky/sky19.jpg');
		this.load.image('sky-20', 'assets/sky/sky20.jpg');
		this.load.image('sky-21', 'assets/sky/sky21.jpg');
		this.load.image('sky-22', 'assets/sky/sky22.jpg');
		this.load.image('sky-23', 'assets/sky/sky23.jpg');
		this.load.image('sky-24', 'assets/sky/sky24.jpg');
		this.load.image('sky-25', 'assets/sky/sky25.jpg');
		this.load.image('sky-26', 'assets/sky/sky26.jpg');
		this.load.image('sky-27', 'assets/sky/sky27.jpg');
		this.load.image('sky-28', 'assets/sky/sky28.jpg');
		this.load.image('sky-29', 'assets/sky/sky29.jpg');
		this.load.image('sky-30', 'assets/sky/sky30.jpg');
		this.load.image('sky-31', 'assets/sky/sky31.jpg');
		this.load.image('sky-32', 'assets/sky/sky32.jpg');
		this.load.image('sky-33', 'assets/sky/sky33.jpg');
		this.load.image('sky-34', 'assets/sky/sky34.jpg');
		this.load.image('sky-35', 'assets/sky/sky35.jpg');
		this.load.image('sky-36', 'assets/sky/sky36.jpg');
		this.load.image('sky-37', 'assets/sky/sky37.jpg');
		this.load.image('sky-38', 'assets/sky/sky38.jpg');
		this.load.image('sky-39', 'assets/sky/sky39.jpg');
		this.load.image('sky-40', 'assets/sky/sky40.jpg');
		this.load.image('sky-41', 'assets/sky/sky41.jpg');
		this.load.image('sky-42', 'assets/sky/sky42.jpg');
		this.load.image('sky-43', 'assets/sky/sky43.jpg');
		this.load.image('sky-44', 'assets/sky/sky44.jpg');
		this.load.image('sky-45', 'assets/sky/sky45.jpg');
		this.load.image('sky-46', 'assets/sky/sky46.jpg');
		this.load.image('sky-47', 'assets/sky/sky47.jpg');
		this.load.image('sky-48', 'assets/sky/sky48.jpg');
		this.load.image('sky-49', 'assets/sky/sky49.jpg');
		this.load.image('sky-50', 'assets/sky/sky50.jpg');
		this.load.image('sky-51', 'assets/sky/sky51.jpg');
		this.load.image('sky-52', 'assets/sky/sky52.jpg');
		this.load.image('sky-53', 'assets/sky/sky53.jpg');
		this.load.image('sky-54', 'assets/sky/sky54.jpg');
		this.load.image('sky-55', 'assets/sky/sky55.jpg');
		this.load.image('sky-56', 'assets/sky/sky56.jpg');
		this.load.image('sky-57', 'assets/sky/sky57.jpg');
		this.load.image('sky-58', 'assets/sky/sky58.jpg');
		this.load.image('sky-59', 'assets/sky/sky59.jpg');
		this.load.image('sky-60', 'assets/sky/sky60.jpg');
		this.load.image('sky-61', 'assets/sky/sky61.jpg');
		this.load.image('sky-62', 'assets/sky/sky62.jpg');
		this.load.image('sky-63', 'assets/sky/sky63.jpg');
		this.load.image('sky-64', 'assets/sky/sky64.jpg');
		this.load.image('sky-65', 'assets/sky/sky65.jpg');
		this.load.image('sky-66', 'assets/sky/sky66.jpg');
		this.load.image('sky-67', 'assets/sky/sky67.jpg');
		this.load.image('sky-68', 'assets/sky/sky68.jpg');
		this.load.image('sky-69', 'assets/sky/sky69.jpg');
		this.load.image('sky-70', 'assets/sky/sky70.jpg');
		this.load.image('sky-71', 'assets/sky/sky71.jpg');
		this.load.image('sky-72', 'assets/sky/sky72.jpg');
		this.load.image('sky-73', 'assets/sky/sky73.jpg');		

		//Loads the glitches
		this.load.image('glitch-1', 'assets/glitch/glitch1.png');
		this.load.image('glitch-2', 'assets/glitch/glitch2.png');
		this.load.image('glitch-3', 'assets/glitch/glitch3.png');
		this.load.image('glitch-4', 'assets/glitch/glitch4.png');
		this.load.image('glitch-5', 'assets/glitch/glitch5.png');
		this.load.image('glitch-6', 'assets/glitch/glitch6.png');
		this.load.image('glitch-7', 'assets/glitch/glitch7.png');
		this.load.image('glitch-8', 'assets/glitch/glitch8.png');
		this.load.image('glitch-9', 'assets/glitch/glitch9.png');
		this.load.image('glitch-10', 'assets/glitch/glitch10.png');
		this.load.image('glitch-11', 'assets/glitch/glitch11.png');
		this.load.image('glitch-12', 'assets/glitch/glitch12.png');
		this.load.image('glitch-13', 'assets/glitch/glitch13.png');
		this.load.image('glitch-14', 'assets/glitch/glitch14.png');
		this.load.image('glitch-15', 'assets/glitch/glitch15.png');
		this.load.image('glitch-16', 'assets/glitch/glitch16.png');
		this.load.image('glitch-17', 'assets/glitch/glitch17.png');
		this.load.image('glitch-18', 'assets/glitch/glitch18.png');
		this.load.image('glitch-19', 'assets/glitch/glitch19.png');
		this.load.image('glitch-20', 'assets/glitch/glitch20.png');
		this.load.image('glitch-21', 'assets/glitch/glitch21.png');
		this.load.image('glitch-22', 'assets/glitch/glitch22.png');
		this.load.image('glitch-23', 'assets/glitch/glitch23.png');
		this.load.image('glitch-24', 'assets/glitch/glitch24.png');
		this.load.image('glitch-25', 'assets/glitch/glitch25.png');
		this.load.image('glitch-26', 'assets/glitch/glitch26.png');
		this.load.image('glitch-27', 'assets/glitch/glitch27.png');
		this.load.image('glitch-28', 'assets/glitch/glitch28.png');
		this.load.image('glitch-29', 'assets/glitch/glitch29.png');
		this.load.image('glitch-30', 'assets/glitch/glitch30.png');
		this.load.image('glitch-31', 'assets/glitch/glitch31.png');
		this.load.image('glitch-32', 'assets/glitch/glitch32.png');
		this.load.image('glitch-33', 'assets/glitch/glitch33.png');
		this.load.image('glitch-34', 'assets/glitch/glitch34.png');
		this.load.image('glitch-35', 'assets/glitch/glitch35.png');
		this.load.image('glitch-36', 'assets/glitch/glitch36.png');
		this.load.image('glitch-37', 'assets/glitch/glitch37.png');
		this.load.image('glitch-38', 'assets/glitch/glitch38.png');
		this.load.image('glitch-39', 'assets/glitch/glitch39.png');
		this.load.image('glitch-40', 'assets/glitch/glitch40.png');
		this.load.image('glitch-41', 'assets/glitch/glitch41.png');
		this.load.image('glitch-42', 'assets/glitch/glitch42.png');
		this.load.image('glitch-43', 'assets/glitch/glitch43.png');
		this.load.image('glitch-44', 'assets/glitch/glitch44.png');
		this.load.image('glitch-45', 'assets/glitch/glitch45.png');
		this.load.image('glitch-46', 'assets/glitch/glitch46.png');
		this.load.image('glitch-47', 'assets/glitch/glitch47.png');
		this.load.image('glitch-48', 'assets/glitch/glitch48.png');
		this.load.image('glitch-49', 'assets/glitch/glitch49.png');
		this.load.image('glitch-50', 'assets/glitch/glitch50.png');
		this.load.image('glitch-51', 'assets/glitch/glitch51.png');
		this.load.image('glitch-52', 'assets/glitch/glitch52.png');
		this.load.image('glitch-53', 'assets/glitch/glitch53.png');	
		this.load.image('glitch-54', 'assets/glitch/glitch54.png');		
	},

	create: function () {

		this.game.stage.backgroundColor = "#F5A219";
		//	Once the load has finished we disable the crop because we're going to sit in the update loop for a short while as the music decodes
		this.preloadBar.cropEnabled = false;

	},

	update: function () {

		//	You don't actually need to do this, but I find it gives a much smoother game experience.
		//	Basically it will wait for our audio file to be decoded before proceeding to the MainMenu.
		//	You can jump right into the menu if you want and still play the music, but you'll have a few
		//	seconds of delay while the mp3 decodes - so if you need your music to be in-sync with your menu
		//	it's best to wait for it to decode here first, then carry on.
		
		//	If you don't have any music in your game then put the game.state.start line into the create function and delete
		//	the update function completely.
		
		this.state.start('Game');
		// if (this.cache.isSoundDecoded('titleMusic') && this.ready == false)
		// {
		// 	this.ready = true;
		// 	this.state.start('MainMenu');
		// }

	}

};
