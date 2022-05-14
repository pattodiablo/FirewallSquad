
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

		this.background = background;
		this.player = player;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.TileSprite} */
	background;
	/** @type {Player} */
	player;

	/* START-USER-CODE */

	// Write more your code here

	create() {

		this.editorCreate();

		this.background.width=document.body.clientWidth;
		this.background.height=document.body.clientHeight;
		this.createEnemy3Timer = this.time.addEvent({
			delay: 1500,                // ms
			callback: this.crearEnemy3,
			//args: [],
			callbackScope: this,
			loop: true
		});


	}

	update (){

	}

	crearEnemy3(){

		const enemy3 = new Enemy3(this, Phaser.Math.FloatBetween(0,document.body.clientWidth), Phaser.Math.FloatBetween(0,document.body.clientHeight));
		this.add.existing(enemy3);

	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
