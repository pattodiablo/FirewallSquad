
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
	this.cursors = this.scene.input.keyboard.createCursorKeys();
}

update(){
	this.body.velocity.x = 0;
	this.body.velocity.y = 0;
	this.body.angularVelocity = 0;

	if (this.cursors.left.isDown) {
		this.body.angularVelocity = -150;
	  }
	  if (this.cursors.right.isDown) {
		this.body.angularVelocity = 150;
	  }
	
	  if (this.cursors.up.isDown) {
		this.scene.physics.velocityFromRotation(
		  this.rotation,
		  150,
		  this.body.velocity
		);
	  }
	  if (this.cursors.down.isDown) {
		this.scene.physics.velocityFromRotation(
		  this.rotation,
		  -150,
		  this.body.velocity
		);
	  }
}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
