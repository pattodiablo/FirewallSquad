
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
		//console.log(Phaser.Math.Angle.Between(this.x,this.y,this.scene.player.x,this.scene.player.y))
		this.vel = Phaser.Math.Between(50,200);
		//this.body.velocity.x=10//Phaser.Math.Between(150,300)*(this.scene.player.x-this.x)/Math.sqrt((this.x-this.scene.player.x)*(this.x-this.scene.player.x)+(this.y-this.scene.player.y)*(this.y-this.scene.player.y))
	}

	update(){
	this.angle=90+(180/Math.PI)*Phaser.Math.Angle.Between(this.x,this.y,this.scene.player.x,this.scene.player.y); 
	this.scene.physics.velocityFromAngle(-90+this.angle, this.vel , this.body.velocity);
	//console.log(this.angle);
    }

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
