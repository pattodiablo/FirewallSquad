
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

		// text_1
		const text_1 = this.add.text(400, 408, "", {});
		text_1.setOrigin(0.5, 0.5);
		text_1.text = "Phaser 3 + Phaser Editor 2D";
		text_1.setStyle({ "fontFamily": "Arial", "fontSize": "30px" });

		// enemy3
		const enemy3 = new enemy3(this, 647, 253);
		this.add.existing(enemy3);

		// enemy1
		const enemy1 = new enemy1(this, 342, 160);
		this.add.existing(enemy1);

		// enemy2
		const enemy2 = new enemy2(this, 481, 180);
		this.add.existing(enemy2);

		// heart
		const heart = new heart(this, 579, 146);
		this.add.existing(heart);

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write more your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
