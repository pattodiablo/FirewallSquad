
// You can write more code here

/* START OF COMPILED CODE */

class Enemy3 extends Phaser.GameObjects.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "enemy3", frame);

		/* START-USER-CTR-CODE */
		this.updateEvent = this.scene.events.once("update", () => this.create());
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	create(){
		this.scene.physics.world.enableBody(this);
		this.scene.physics.add.overlap(this.scene.player, this,this.playerCollide);
		this.scene.physics.add.overlap(this.scene.playerBullets, this,this.enemyDestroy);
		this.setScale(1)
		this.animarNacimiento()
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

		
		var pulsa = this.scene.tweens.createTimeline();
		pulsa.add({
			targets: this,
			scale: 1.1,
			duration: 500,
			ease: 'Linear',
			loop: true,
			repeat:-1,
			yoyo:true

		});
		pulsa.play();

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
