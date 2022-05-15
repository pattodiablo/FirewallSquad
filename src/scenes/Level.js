
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

		// heart1
		const heart1 = new Heart(this, 26, 23);
		this.add.existing(heart1);

		// heart2
		const heart2 = new Heart(this, 61, 22);
		this.add.existing(heart2);

		// heart3
		const heart3 = new Heart(this, 94, 22);
		this.add.existing(heart3);

		// Score
		const score = this.add.text(602, 15, "", {});
		score.setOrigin(0.5, 0.5);
		score.text = "SCORE";
		score.setStyle({"color":"#ff0048","fontFamily":"KANIT","fontSize":"20px","stroke":"#"});
		
		// Ultimate
		const ultimate = this.add.text(342, 413, "", {});
		ultimate.setOrigin(0.5, 0.5);
		ultimate.text = "ULTIMATE DEFENSE";
		ultimate.setStyle({ "align": "center", "color": "#ff0048", "fontFamily": "KANIT", "fontSize": "20px" });

		// Counter
		const counter = this.add.text(685, 18, "", {});
		counter.text = "00000";
		counter.setStyle({ "color": "#34eacdff", "fontFamily": "KANIT" });

		// rectangle
		const rectangle = this.add.rectangle(711, 24, 70, 30);
		rectangle.fillColor = 16711752;
		rectangle.isStroked = true;
		rectangle.strokeColor = 16711752;

		this.background = background;
		this.player = player;
		this.heart1 = heart1;
		this.heart2 = heart2;
		this.heart3 = heart3;
		this.score = score;
		this.ultimate = ultimate;
		this.counter = counter;
		this.rectangle = rectangle;

		this.events.emit("scene-awake");
	}
	
	/** @type {Phaser.GameObjects.TileSprite} */
	background;
	/** @type {Player} */
	player;
	/** @type {Heart} */
	heart1;
	/** @type {Heart} */
	heart2;
	/** @type {Heart} */
	heart3;
	/** @type {Phaser.GameObjects.Text} */
	score;
	/** @type {Phaser.GameObjects.Text} */
	ultimate;
	/** @type {Phaser.GameObjects.Text} */
	counter;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle;

	/* START-USER-CODE */

	// Write more your code here

	create() {

		this.editorCreate();

		this.playerBullets=[];
		this.rectangle.x=document.body.clientWidth-50;
		this.counter.x=document.body.clientWidth-77;
		this.score.x=document.body.clientWidth-160;
		this.ultimate.setOrigin(0.5,0.5);
		this.ultimate.x=document.body.clientWidth/2;
		this.ultimate.y=document.body.clientHeight-100;
		this.background.width=document.body.clientWidth;
		this.background.height=document.body.clientHeight;

		this.createEnemy3Timer = this.time.addEvent({
			delay: 1500,                // ms
			callback: this.crearEnemy3,
			//args: [],
			callbackScope: this,
			loop: true
		});

		this.createEnemy3Timer = this.time.addEvent({
			delay: 1500,                // ms
			callback: this.crearEnemy1,
			//args: [],
			callbackScope: this,
			loop: true
		});


	}

	update (){
		this.counter.text=this.player.score;
	}

	crearEnemy3(){

		const enemy3 = new Enemy3(this, Phaser.Math.FloatBetween(0,document.body.clientWidth), Phaser.Math.FloatBetween(0,document.body.clientHeight));
		this.add.existing(enemy3);
	}
	crearEnemy1(){
		const enemy1 = new Enemy1(this,Phaser.Math.FloatBetween(0,document.body.clientWidth), Phaser.Math.FloatBetween(0,document.body.clientHeight))
		this.add.existing(enemy1);

	}


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
