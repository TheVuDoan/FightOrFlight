class EnemyController {
	constructor(x, y, spriteName, configs){
	this.sprite = Fighter.enemyGroup.create(x, y, 'assets',spriteName);
	Fighter.game.physics.arcade.enable(this.sprite);
	this.sprite.checkworldbounds = true;
      this.sprite.outOfBoundsKill = true;

	this.configs = configs;
	this.SPEED = SPEED;
    this.TURN_RATE = 5;
    this.sprite.damage = 2;
    var a,b;
  	this.sprite.update = this.update.bind(this);

  	Fighter.playerGroup.forEach(function(m){			
	a = m.x;
	b = m.y;				
    		
    	});
   	this.sprite.a = a;
	this.sprite.b = b;
	this.targetAngle = Fighter.game.math.angleBetween(
        this.sprite.position.x,
        this.sprite.position.y,
        this.sprite.a,
        this.sprite.b
	    );
        	this.sprite.body.velocity.x = Math.cos(this.targetAngle) * this.SPEED;
    		this.sprite.body.velocity.y = Math.sin(this.targetAngle) * this.SPEED;
      		if(this.targetAngle == 0) this.sprite.kill();

		update(){

		
      
	}
}

