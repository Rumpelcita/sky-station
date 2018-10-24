
BasicGame.Game = function (game) {

    //  When a State is added to Phaser it automatically has the following properties set on it, even if they already exist:

    this.game;      //  a reference to the currently running game (Phaser.Game)
    this.add;       //  used to add sprites, text, groups, etc (Phaser.GameObjectFactory)
    this.camera;    //  a reference to the game camera (Phaser.Camera)
    this.cache;     //  the game cache (Phaser.Cache)
    this.input;     //  the global input manager. You can access this.input.keyboard, this.input.mouse, as well from it. (Phaser.Input)
    this.load;      //  for preloading assets (Phaser.Loader)
    this.math;      //  lots of useful common math operations (Phaser.Math)
    this.sound;     //  the sound manager - add a sound, play one, set-up markers, etc (Phaser.SoundManager)
    this.stage;     //  the game stage (Phaser.Stage)
    this.time;      //  the clock (Phaser.Time)
    this.tweens;    //  the tween manager (Phaser.TweenManager)
    this.state;     //  the state manager (Phaser.StateManager)
    this.world;     //  the game world (Phaser.World)
    this.particles; //  the particle manager (Phaser.Particles)
    this.physics;   //  the physics manager (Phaser.Physics)
    this.rnd;       //  the repeatable random number generator (Phaser.RandomDataGenerator)

    //  You can use any of these from any function within this State.
    //  But do consider them as being 'reserved words', i.e. don't create a property for your own game called "world" or you'll over-write the world reference.

};

BasicGame.Game.prototype = {

    create: function () {
        current_sky = fetchSky(0);
        skies = this.game.add.group();
        skies.create(90, 130, current_sky.toString());
        static = this.game.add.sprite(90, 130, 'static');
        static.has_noise = false;
        static.rolled_noise = false;
        static.alpha = 0;
        static.animations.add('noise');
        punch = this.game.add.sprite(this.game.world.centerX-26, 8, 'punch');
        punch.animations.add('hit');
        punch.alpha = 0;
        hit_box = this.game.add.button(0, 0, 'hit_box', this.punchTV, this, 0, 0, 0);
        tv = this.game.add.sprite(42.5, 95, 'tv');
        tv.button_1 = this.game.add.button(782, 325, 'button', switchChannel, this, 1, 0, 1);
    },

    update: function () {
        playNoise(true);
    },

    quitGame: function (pointer) {

        //  Here you should destroy anything you no longer need.
        //  Stop music, delete sprites, purge caches, free resources, all that good stuff.

        //  Then let's go back to the main menu.
        this.state.start('MainMenu');

    },

    punchTV: function(){
        if (punch.alpha == 1){
            this.game.camera.shake(0.05, 125);
            static.has_noise = 0;
            static.rolled_noise = false;
            playNoise();
        }
    }

};

function switchChannel(){
    static.has_noise = 1;
    if (!static.animations.currentAnim.isPlaying){
        playNoise();
    } else {
        static.animations.stop();
        playNoise();
    }
    static.animations.currentAnim.onComplete.add(
        function () {
            skies.forEachAlive(
                function(sky){
                    sky.kill();
                }
                )
            current_sky = fetchSky(current_sky);
            skies.create(90, 130, current_sky.toString());
            setNoise();
            console.log('channel switched');
        }, 
        this
           );
}

function fetchSky (current_sky) {
    var roll = current_sky;
    while (roll === current_sky){
        roll = Math.floor(Math.random() * (Math.ceil(73) - Math.floor(1) + 1)) + 1;
    }
    return roll;
}

function setNoise(){
    var roll = Math.floor(Math.random() * (Math.ceil(8) - Math.floor(1) + 1)) + 1;
    if (roll == 1){
        static.has_noise = true;
        static.rolled_noise = true;
        punch.alpha = 1;
        punch.animations.play('hit', 3.8, true);
    } else {
        if (!static.rolled_noise){
            static.has_noise = false;
        }
    }
}

function playNoise(loop=false){
    if (static.has_noise){
        static.alpha = 1;
        static.animations.play('noise', 14, loop);
    } else {
        static.alpha = 0;
        static.animations.stop();
    }
}