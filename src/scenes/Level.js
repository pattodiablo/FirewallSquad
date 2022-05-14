
// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {
	
	constructor() {
		super("Level");
		
		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}
	
	editorCreate() {
		
		// background
		const background = this.add.tileSprite(0, 0, 64, 64, "background");
		background.setOrigin(0, 0);
		
		// player
		const player = new Player(this, 296, 276);
		this.add.existing(player);
		
		this.background = background;
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

	update (){
		var timer = scene.time.addEvent({
			delay: 1500,                // ms
			callback: this.crearEnemy1,
			//args: [],
			callbackScope: this,
			loop: true
		});
	}

	crearEnemy1(){

		const enemy3 = new Enemy3(this, Phaser.Math.FloatBetween(0,document.body.clientWidth), Phaser.Math.FloatBetween(0,document.body.clientHeight));
		this.add.existing(enemy3);

	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
