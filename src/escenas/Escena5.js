class Escena5 extends Phaser.Scene{
    constructor(){
        super("Escena5");
        this.platforms = null;
    }

    preload(){
        this.load.image('perder', '../public/img/over-02.jpg', {frameWidth:200, frameHeight:200})
    }

    create(){
        this.add.image(400, 300, 'perder');
        this.input.keyboard.on('keydown-SPACE', function () {
            // Cambiar a la Escena2 (restart)
              this.scene.start('Escena2');
           }, this);
       } 
   
    }

export default Escena5;