import Escena1 from "./escenas/Escena1.js"
import Escena2 from "./escenas/Escena2.js"
import Escena3 from "./escenas/Escena3.js";
import Escena4 from "./escenas/Escena4.js"
import Escena5 from "./escenas/Escena5.js";


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

    scene:[Escena1, Escena2,Escena3,Escena4,Escena5]

};

let game = new Phaser.Game(config);