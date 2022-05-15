
// You can write more code here

/* START OF COMPILED CODE */

class Shield extends Phaser.GameObjects.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "playerAnimations", frame ?? "hit20004");

		/* START-USER-CTR-CODE */
		this.updateEvent = this.scene.events.once("update", () => this.create());
		this.updateEvent = this.scene.events.on("update", () => this.update());
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

create(){
	this.name=this.texture.key;
	this.scene.physics.world.enableBody(this);
	this.scene.physics.add.overlap(this.scene.player, this,this.playerCollide);


}


	update(){

	}

	playerCollide(player,Shield){
		Shield.play("hit2",true);
		player.gotShield=true;
		var destroyTimer = Shield.scene.time.addEvent({
			delay: 500,                // ms
			callback: function(){

				Shield.destroy();
			},
			//args: [],
			callbackScope: this,
			loop: false
		});
	}


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
