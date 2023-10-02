class Escena1 extends Phaser.Scene{
    constructor(){
        super("Escena1");
        this.platforms = null;
    }

    preload(){
        this.load.image('inicio', '../public/img/inicio.jpg', {frameWidth: 200, frameHeight: 200})

    }

    create(){
        this.add.image(400, 300, 'inicio');
    }

    update(){
        if(Phaser.Input.Keyboard.JustDown(this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE))){
            this.scene.start('Escena2');
        }
    }
}
export default Escena1;