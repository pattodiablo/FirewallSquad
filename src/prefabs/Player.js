
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
	if (this.cursors.left.isDown)
    {
		this.body.velocity.x-=20;
		this.body.rotation-=10;
    }
    else if (this.cursors.right.isDown)
    {
		this.body.velocity.x+=20;
		this.body.rotation+=10;
    }

    if (this.cursors.up.isDown)
    {
		this.body.velocity.y-=20;
    }
    else if (this.cursors.down.isDown)
    {
		this.body.velocity.y+=20;
    }
}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
