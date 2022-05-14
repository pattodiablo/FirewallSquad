
// You can write more code here

/* START OF COMPILED CODE */

class Enemy3 extends Phaser.GameObjects.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "enemy3", frame);

		/* START-USER-CTR-CODE */
		this.scene.events.on("create", () => this.create());
		this.updateEvent = this.scene.events.on("update", () => this.update());
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	create(){
		this.scene.physics.world.enableBody(this);
		
	}

	update(){
		this
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
