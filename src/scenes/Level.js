
// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// background
		const background = this.add.tileSprite(0, 0, 64, 64, "background");
		background.setOrigin(0, 0);

		// player
		const player = new Player(this, 296, 276);
		this.add.existing(player);

		// playerBullet
		this.add.image(392, 290, "playerBullet");

		this.background = background;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.TileSprite} */
	background;

	/* START-USER-CODE */

	// Write more your code here

	create() {

		this.editorCreate();

		this.background.width=document.body.clientWidth;
		this.background.height=document.body.clientHeight;

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
