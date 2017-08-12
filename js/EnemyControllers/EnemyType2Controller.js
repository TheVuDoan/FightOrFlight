class EnemyType2Controller extends EnemyController{
  constructor(x, y, configs){
    super(x, y, "Enemy2", configs);
    this.sprite.SPEED = 250;
    this.sprite.TURN_SPEED = 20;
    this.sprite.update = this.update.bind(this);
  }

  update(){
    var targetAngle = Fighter.game.math.angleBetween(
      this.sprite.position.x, this.sprite.position.y,
      Fighter.game.input.activePointer.x, Fighter.game.input.activePointer.y,
    );

    if(this.sprite.rotation !== targetAngle + Math.PI/2){     // +PI/2 so it'll make the bullet fly toward the enemy instead of being thrown to the enemy.
      var delta = targetAngle - this.sprite.rotation + Math.PI/2;
      if (delta > Math.PI) delta -= Math.PI * 2;
      if (delta < -Math.PI) delta += Math.PI * 2;
      if (delta > 0){
        this.sprite.rotation += Fighter.game.math.degToRad(this.sprite.TURN_SPEED);
      }
      if (delta < 0){
        this.sprite.rotation -= Fighter.game.math.degToRad(this.sprite.TURN_SPEED);
      }
    }
    if (Math.abs(delta) < Fighter.game.math.degToRad(this.sprite.TURN_SPEED)) {
      this.sprite.rotation = targetAngle + Math.PI/2;
    }

    this.sprite.body.velocity.x = Math.cos(this.sprite.rotation - Math.PI/2) * this.sprite.SPEED;
    this.sprite.body.velocity.y = Math.sin(this.sprite.rotation - Math.PI/2) * this.sprite.SPEED;
  }
}
