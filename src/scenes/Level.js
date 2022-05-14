
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

		// heart
		const heart = new Heart(this, 26, 23);
		this.add.existing(heart);

		// heart_1
		const heart_1 = new Heart(this, 61, 22);
		this.add.existing(heart_1);

		// heart_2
		const heart_2 = new Heart(this, 94, 22);
		this.add.existing(heart_2);

		// Score
		const score = this.add.text(602, 15, "", {});
		score.text = "SCORE";
		score.setStyle({ "color": "#ff0048", "fontFamily": "KANIT", "fontSize": "20px", "stroke": "#" });

		// Ultimate
		const ultimate = this.add.text(342, 413, "", {});
		ultimate.text = "ULTIMATE DEFENSE";
		ultimate.setStyle({ "color": "#ff0048", "fontFamily": "KANIT", "fontSize": "20px" });

		// Counter
		const counter = this.add.text(690, 18, "", {});
		counter.text = "00000";
		counter.setStyle({ "color": "#0000ff", "fontFamily": "KANIT" });

		// rectangle_1
		const rectangle_1 = this.add.rectangle(711, 24, 70, 30);
		rectangle_1.fillColor = 16711752;
		rectangle_1.isStroked = true;
		rectangle_1.strokeColor = 16711752;

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
