
// You can write more code here

/* START OF COMPILED CODE */

class GameOver extends Phaser.Scene {

	constructor() {
		super("GameOver");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// gameOverText
		const gameOverText = this.add.text(237, 212, "", {});
		gameOverText.text = "GAME OVER";
		gameOverText.setStyle({ "align": "center", "fontSize": "54px" });

		// jugarBtn
		const jugarBtn = this.add.sprite(363, 317, "rejugarBtn");

		this.gameOverText = gameOverText;
		this.jugarBtn = jugarBtn;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Text} */
	gameOverText;
	/** @type {Phaser.GameObjects.Sprite} */
	jugarBtn;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
		this.scene.scene.cameras.main.fadeIn(1000);
		this.gameOverText.setOrigin(0.5,0.5);
		this.gameOverText.x=this.scene.scene.cameras.main.centerX;
		this.jugarBtn.x=this.scene.scene.cameras.main.centerX;
		this.jugarBtn.setInteractive().on('pointerup', this.iniciarJuego,this);
	}

	iniciarJuego(){

		window.location.reload();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
