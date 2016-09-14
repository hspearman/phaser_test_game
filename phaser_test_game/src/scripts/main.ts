/// <reference path='../../node_modules/phaser/typescript/phaser.d.ts' />

import UserInterface = require('./user-interface')

export class PhaserTestGame {

    // Phaser game instance
    private game : Phaser.Game;

    // Phaser HTML variables
    private phaserHtmlElementId : string = 'phaser-canvas';
    private phaserCanvasHeight : number = 960;
    private phaserCanvasWidth : number = 1440;
 
    constructor() {

        // Init phaser game
        this.game = new Phaser.Game(
            this.phaserCanvasWidth, // Width
            this.phaserCanvasHeight, // Height
            Phaser.AUTO, // Rendering context
            this.phaserHtmlElementId, // Phaser HTML element
            // Phaser game life-cycle hooks
            {
                preload: this.preload,
                create: this.create
            });
    }
 
    public preload = () => {

        // Preload game UI
        UserInterface.preloadUi(this.game);
    }
 
    public create = () => {

        // Create game UI
        UserInterface.createUi(this.game);
    }
}