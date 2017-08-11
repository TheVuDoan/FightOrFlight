class EnemyController {
	constructor(x, y, spriteName, configs){
	this.sprite = Fighter.enemyGroup.create(x, y,spriteName);
	Fighter.game.physics.arcade.enable(this.sprite);
  this.sprite.outOfBoundsKill = true;
  this.worldbounds = 0;
	this.configs = configs;
	this.SPEED = SPEED;

  var a,b;
  Fighter.playerGroup.forEach(function(m){
    	a = m.x;
    	b = m.y;
  });

	this.targetAngle = Fighter.game.math.angleBetween(
      this.sprite.position.x,
      this.sprite.position.y,
      a,
      b
	);
	this.sprite.body.velocity.x = Math.cos(this.targetAngle) * this.SPEED;
	this.sprite.body.velocity.y = Math.sin(this.targetAngle) * this.SPEED;
  this.sprite.update = this.update.bind(this);
}
	update(){
    if(this.sprite.checkworldbounds == true)
      this.worldbounds++;
    if(this.worldbounds == 2) {
      getExplosion(this.sprite.x, this.sprite.y);
      this.sprite.kill();
    }
		this.sprite.angle += 2;
  }
}
