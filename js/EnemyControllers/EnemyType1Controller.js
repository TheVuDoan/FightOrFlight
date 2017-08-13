class EnemyType1Controller extends EnemyController{
  constructor(x, y, configs){
    super(
      x,
      y,
      "Enemy1",
      configs
    );
    this.sprite.body.bounce.set(0.8);
    this.sprite.anchor.set(0.5);
    this.sprite.scale.set(1);
    var radius = this.sprite.width / 2;
    this.sprite.body.setCircle(
        radius,
        (-radius + 0.5 * this.sprite.width / this.sprite.scale.x),
        (-radius + 0.5 * this.sprite.height / this.sprite.scale.y)
    );
    this.sprite.checkworldbounds = true;
    this.sprite.outOfBoundsKill = true;
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
		this.sprite.angle += 2;
  }
}
