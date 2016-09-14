/// <reference path='../../node_modules/phaser/typescript/phaser.d.ts' />

// Logo variables
let phaserLogoName : string = 'phaserLogo',
    phaserLogoPath : string = 'static/phaser2.png';

export function preloadUi(game : Phaser.Game) : void {

    // Load logo image from file
    game
        .load
        .image(
            phaserLogoName,
            phaserLogoPath);
}

export function createUi(game : Phaser.Game) : void {

    // Init x coordinate for logo
    let phaserLogoX = game
        .camera
        .width / 2;

    // Init y coordinate for logo
    let phaserLogoY = game
        .camera
        .height / 2;
    
    // Add logo to phaser canvas
    let phaserLogo = game
        .add
        .sprite(
            phaserLogoX,
            phaserLogoY,
            phaserLogoName);
    
    // Center logo horizontally
    phaserLogo
        .anchor
        .x = 0.5;

    // Center logo vertically
    phaserLogo
        .anchor
        .y = 0.5;
}