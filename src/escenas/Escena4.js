class Escena4 extends Phaser.Scene{
    constructor(){
        super("Escena4");
        this.platforms = null;
    }

    preload(){
        this.load.image('ganar', '../public/img/win.jpg', {frameWidth: 200, frameHeight: 200})

    }

    create(){
        this.add.image(400, 300, 'ganar').setScale(2);
        this.input.keyboard.on('keydown-SPACE', function () {
         // Cambiar a la Escena2 (restart)
           this.scene.start('Escena2');
        }, this);
    } 

    // update(){
    //     if(Phaser.Input.Keyboard.JustDown(this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE))){
    //         this.scene.start('Escena2');
    //     }
    // }
}
export default Escena4;