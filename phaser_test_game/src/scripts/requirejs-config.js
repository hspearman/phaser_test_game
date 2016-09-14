require.config({
    /*  Tells require.js where to find our project's javascript libs
        (that can't be imported normally in typescript files),
        so we can manually load them into global scope */
    paths: {
        'phaser': 'libs/phaser'
    },
    shim: {
        'phaser': {
            exports: 'Phaser'
        }
    }
});
 
 // Entry-point for our phaser project
require(
    [
        'main',
        'phaser'
    ],
    function(
        Main,
        Phaser) {

    // Init our game's main module
    var phaserTestGame = new Main.PhaserTestGame();
});