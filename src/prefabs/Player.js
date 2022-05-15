
// You can write more code here

/* START OF COMPILED CODE */

class Player extends Phaser.GameObjects.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "player", frame);

		/* START-USER-CTR-CODE */
		this.scene.events.on("create", () => this.create());
		this.updateEvent = this.scene.events.on("update", () => this.update());
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

create(){
	this.scene.physics.world.enableBody(this);
	this.body.setCollideWorldBounds(true);
	this.isPressingSpacebar = false;
	this.hasShot=false;
	this.body.drag=300;
	this.life=3;
	this.score=0;
	this.body.setDamping(true);
	this.body.drag=0.99;
	console.log(this.body);

	this.cursors = this.scene.input.keyboard.addKeys(
		{
		up:Phaser.Input.Keyboard.KeyCodes.W,
		down:Phaser.Input.Keyboard.KeyCodes.S,
		left:Phaser.Input.Keyboard.KeyCodes.A,
		right:Phaser.Input.Keyboard.KeyCodes.D,
		space:Phaser.Input.Keyboard.KeyCodes.SPACE
		
		});
}

shoot(){
console.log("trying shoot")

}

handleScore(enemy){
	switch (enemy.texture.key) {
		case "enemy1":
			this.score+=10;
			break;
	
			case "enemy2":
				this.score+=20;
				break;
	
				
			case "enemy3":
			this.score+=30;
			break;
			
			case "enemy4":
				this.score+=40;
				break;
			
			case "enemy5":
				this.score+=50;
					break;
			
			case "boss":
					this.score+=100;
				break;
							
		default:
			break;
	}
}

handleEnemyCollition(){
	
	this.life--;
	switch (this.life) {
		case 2:
			this.scene.heart3.visible=false
			break;
		case 1:
				this.scene.heart2.visible=false
				break;
		case 0:
				this.scene.heart1.visible=false
				//ir a gameOVer
				break;
	
		default:
			break;
	}
}

update(){


this.body.setFriction(10,10);

	if (this.cursors.space.isDown)
    {
		
		if(!this.hasShot){
		
			const playerBullet = new PlayerBullet(this.scene, this.x,this.y);
			this.scene.playerBullets.push(playerBullet);
			this.scene.add.existing(playerBullet);
		}
	
		this.hasShot=true
	
	
    }

	if (this.cursors.space.isUp)
    {

		this.hasShot=false;
		
	
    }
	
	if (this.cursors.left.isDown)
    {
		this.body.rotation-=3;
	
    }
    else if (this.cursors.right.isDown)
    {
		this.body.rotation+=3;
    }

    if (this.cursors.up.isDown)
    {
		this.scene.physics.velocityFromRotation(this.rotation, 350, this.body.velocity);
    }
    
}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
