
BasicGame.Preloader = function (game) {

	this.background = null;
	this.preloadBar = null;

	this.ready = false;

};

BasicGame.Preloader.prototype = {

	preload: function () {

		//	These are the assets we loaded in Boot.js
		//	A nice sparkly background and a loading progress bar
		this.cachedBar = this.cache.getImage('preloaderBar');
		this.preloadBar = this.add.sprite(this.game.world.centerX - this.cachedBar.width/2.0, this.game.world.centerY - this.cachedBar.height/2.0, 'preloaderBar');
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
		this.game.load.spritesheet('hit_box', 'assets/hit_box.png', 952, 95);
		this.game.load.image('tv', 'assets/tv.png');
		this.game.load.spritesheet('static', 'assets/static.png', 678, 530);
		
		// Punch attribution: punch by Smalllike from the Noun Project
		this.game.load.spritesheet('punch', 'assets/punch.png', 52, 85);

		// Loads the skies
		this.load.image('1', 'assets/sky/sky1.jpg');
		this.load.image('2', 'assets/sky/sky2.jpg');
		this.load.image('3', 'assets/sky/sky3.jpg');
		this.load.image('4', 'assets/sky/sky4.jpg');
		this.load.image('5', 'assets/sky/sky5.jpg');
		this.load.image('6', 'assets/sky/sky6.jpg');
		this.load.image('7', 'assets/sky/sky7.jpg');
		this.load.image('8', 'assets/sky/sky8.jpg');
		this.load.image('9', 'assets/sky/sky9.jpg');
		this.load.image('10', 'assets/sky/sky10.jpg');
		this.load.image('11', 'assets/sky/sky11.jpg');
		this.load.image('12', 'assets/sky/sky12.jpg');
		this.load.image('13', 'assets/sky/sky13.jpg');
		this.load.image('14', 'assets/sky/sky14.jpg');
		this.load.image('15', 'assets/sky/sky15.jpg');
		this.load.image('16', 'assets/sky/sky16.jpg');
		this.load.image('17', 'assets/sky/sky17.jpg');
		this.load.image('18', 'assets/sky/sky18.jpg');
		this.load.image('19', 'assets/sky/sky19.jpg');
		this.load.image('20', 'assets/sky/sky20.jpg');
		this.load.image('21', 'assets/sky/sky21.jpg');
		this.load.image('22', 'assets/sky/sky22.jpg');
		this.load.image('23', 'assets/sky/sky23.jpg');
		this.load.image('24', 'assets/sky/sky24.jpg');
		this.load.image('25', 'assets/sky/sky25.jpg');
		this.load.image('26', 'assets/sky/sky26.jpg');
		this.load.image('27', 'assets/sky/sky27.jpg');
		this.load.image('28', 'assets/sky/sky28.jpg');
		this.load.image('29', 'assets/sky/sky29.jpg');
		this.load.image('30', 'assets/sky/sky30.jpg');
		this.load.image('31', 'assets/sky/sky31.jpg');
		this.load.image('32', 'assets/sky/sky32.jpg');
		this.load.image('33', 'assets/sky/sky33.jpg');
		this.load.image('34', 'assets/sky/sky34.jpg');
		this.load.image('35', 'assets/sky/sky35.jpg');
		this.load.image('36', 'assets/sky/sky36.jpg');
		this.load.image('37', 'assets/sky/sky37.jpg');
		this.load.image('38', 'assets/sky/sky38.jpg');
		this.load.image('39', 'assets/sky/sky39.jpg');
		this.load.image('40', 'assets/sky/sky40.jpg');
		this.load.image('41', 'assets/sky/sky41.jpg');
		this.load.image('42', 'assets/sky/sky42.jpg');
		this.load.image('43', 'assets/sky/sky43.jpg');
		this.load.image('44', 'assets/sky/sky44.jpg');
		this.load.image('45', 'assets/sky/sky45.jpg');
		this.load.image('46', 'assets/sky/sky46.jpg');
		this.load.image('47', 'assets/sky/sky47.jpg');
		this.load.image('48', 'assets/sky/sky48.jpg');
		this.load.image('49', 'assets/sky/sky49.jpg');
		this.load.image('50', 'assets/sky/sky50.jpg');
		this.load.image('51', 'assets/sky/sky51.jpg');
		this.load.image('52', 'assets/sky/sky52.jpg');
		this.load.image('53', 'assets/sky/sky53.jpg');
		this.load.image('54', 'assets/sky/sky54.jpg');
		this.load.image('55', 'assets/sky/sky55.jpg');
		this.load.image('56', 'assets/sky/sky56.jpg');
		this.load.image('57', 'assets/sky/sky57.jpg');
		this.load.image('58', 'assets/sky/sky58.jpg');
		this.load.image('59', 'assets/sky/sky59.jpg');
		this.load.image('60', 'assets/sky/sky60.jpg');
		this.load.image('61', 'assets/sky/sky61.jpg');
		this.load.image('62', 'assets/sky/sky62.jpg');
		this.load.image('63', 'assets/sky/sky63.jpg');
		this.load.image('64', 'assets/sky/sky64.jpg');
		this.load.image('65', 'assets/sky/sky65.jpg');
		this.load.image('66', 'assets/sky/sky66.jpg');
		this.load.image('67', 'assets/sky/sky67.jpg');
		this.load.image('68', 'assets/sky/sky68.jpg');
		this.load.image('69', 'assets/sky/sky69.jpg');
		this.load.image('70', 'assets/sky/sky70.jpg');
		this.load.image('71', 'assets/sky/sky71.jpg');
		this.load.image('72', 'assets/sky/sky72.jpg');
		this.load.image('73', 'assets/sky/sky73.jpg');
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
