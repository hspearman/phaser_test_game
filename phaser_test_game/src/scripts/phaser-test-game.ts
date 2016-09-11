/// <reference path="../../node_modules/phaser/typescript/phaser.d.ts" />

class PhaserTestGame {
 
    constructor() {
        this.game = new Phaser.Game(
            800, // Width
            600, // Height
            Phaser.AUTO, // Rendering context
            'phaser-canvas', // Phaser HTML element
            // Phaser game life-cycle hooks
            {
                preload: this.preload,
                create: this.create
            });
    }
 
    game: Phaser.Game;
 
    preload() {
        this.game.load.image(
            'phaser_logo',
            'static/phaser2.png');
    }
 
    create() {
        var logo = this.game.add.sprite(
            this.game.world.centerX,
            this.game.world.centerY,
            'phaser_logo');

        logo.anchor.setTo(
            0.5,
            0.5);
    }
 
}
 
window.onload = () => {
    var phaserTestGame = new PhaserTestGame();
};