
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

		this.background = background;
		this.jugarBtn = jugarBtn;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.TileSprite} */
	background;
	/** @type {Phaser.GameObjects.Sprite} */
	jugarBtn;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.splash_screen = this.sound.add('splash_screen');
		this.splash_screen.loop = true;
		this.splash_screen.play();

		this.editorCreate();
		this.jugarBtn.x=this.cameras.main.centerX;
		this.jugarBtn.setInteractive().on('pointerup', this.iniciarJuego,this);
		this.background.width=3000;
		this.background.height=3000;
	}

	iniciarJuego(){
		this.splash_screen.stop();
		this.scene.start('Level');
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
