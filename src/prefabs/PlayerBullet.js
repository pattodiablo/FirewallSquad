
// You can write more code here

/* START OF COMPILED CODE */

class PlayerBullet extends Phaser.GameObjects.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "playerBullet", frame);

		/* START-USER-CTR-CODE */
		this.updateEvent = this.scene.events.once("update", () => this.create());
		this.updateEvent = this.scene.events.on("update", () => this.update());
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	create(){
		this.scene.physics.world.enableBody(this);
		this.scene.physics.velocityFromRotation(this.scene.player.rotation, 800, this.body.velocity);
	}

	update(){
		if(this.x<0){
			this.destroy();
		}
		if(this.x>3000){
			this.destroy();
		}

		if(this.y<0){
			this.destroy();
		}

		if(this.y>3000){
			this.destroy();
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
