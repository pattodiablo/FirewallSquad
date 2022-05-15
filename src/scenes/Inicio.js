
// You can write more code here

/* START OF COMPILED CODE */

class Inicio extends Phaser.Scene {

	constructor() {
		super("Inicio");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// background
		const background = this.add.tileSprite(0, 0, 64, 64, "background");
		background.setOrigin(0, 0);

		// jugarBtn
		const jugarBtn = this.add.sprite(420, 382, "jugarBtn");

		// creditos
		const creditos = this.add.sprite(418, 487, "creditos");

		this.background = background;
		this.jugarBtn = jugarBtn;
		this.creditos = creditos;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.TileSprite} */
	background;
	/** @type {Phaser.GameObjects.Sprite} */
	jugarBtn;
	/** @type {Phaser.GameObjects.Sprite} */
	creditos;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.splash_screen = this.sound.add('splash_screen');
		this.splash_screen.loop = true;
		this.splash_screen.play();

		this.editorCreate();
		this.jugarBtn.x=this.cameras.main.centerX;
		this.jugarBtn.setInteractive().on('pointerup', this.iniciarJuego,this);

		this.creditos.x=this.cameras.main.centerX;
		
		this.creditos.setInteractive().on('pointerup', this.mostrarCreditos,this);

		this.background.width=3000;
		this.background.height=3000;
	}

	mostrarCreditos(){

		this.splash_screen.stop();
		this.scene.start('Creditos');
	}

	iniciarJuego(){
		this.splash_screen.stop();
		this.scene.start('Level');
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
