
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

		// jugarBtn
		const jugarBtn = this.add.sprite(420, 382, "jugarBtn");

		this.jugarBtn = jugarBtn;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Sprite} */
	jugarBtn;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here