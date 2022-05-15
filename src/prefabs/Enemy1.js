
// You can write more code here

/* START OF COMPILED CODE */

class Enemy1 extends Phaser.GameObjects.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "enemy1", frame);

		/* START-USER-CTR-CODE */
		this.updateEvent = this.scene.events.once("update", () => this.create());
		this.updateEvent = this.scene.events.on("update", () => this.update());
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	create(){
		this.scene.physics.world.enableBody(this);

		this.scene.physics.add.overlap(this.scene.player, this,this.playerCollide);
		this.scene.physics.add.overlap(this.scene.playerBullets, this,this.enemyDestroy);
		this.setScale(0.1)
		this.animarNacimiento()

		this.vel = Phaser.Math.Between(50,200);
		
	}

	update(){
		if(this.active){
			this.angle=90+(180/Math.PI)*Phaser.Math.Angle.Between(this.x,this.y,this.scene.player.x,this.scene.player.y); 
			this.scene.physics.velocityFromAngle(-90+this.angle, this.vel , this.body.velocity);
		}
		
	
	
	//console.log(this.angle);
    }

	animarNacimiento(){

		var entrandoTimeline = this.scene.tweens.createTimeline();
		entrandoTimeline.add({
			targets: this,
			scale: 1,
			duration: 100,
			ease: 'Linear',
			repeat: 0

		});
		entrandoTimeline.play();

	}

	enemyDestroy(bullet,enemy){
		//poner sonido
	
		enemy.scene.player.handleScore(enemy);
		enemy.destroy();
	}

	playerCollide(player,enemy){
	enemy.destroy();
		player.handleEnemyCollition();
		
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
