import Escena1 from "./escenas/Escena1.js"
import Escena2 from "./escenas/Escena2.js"

let config = {

    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics:{
        default: 'arcade',
        arcade: {
            gravity: {y:300},
            debug: false
        }
    },
    scene:[Escena1, Escena2]
};

let game = new Phaser.Game(config);