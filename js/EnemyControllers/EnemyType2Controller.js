var targetAngle;
class EnemyType2Controller extends EnemyController{
  constructor(x, y, configs){
    super(x, y, "Enemy2", configs);
    this.sprite.SPEED = 200;
    this.sprite.TURN_SPEED = 20;
    this.sprite.update = this.update.bind(this);
  }

  update(){
    if(dublicate == true){
      targetAngle = Fighter.game.math.angleBetween(
        this.sprite.position.x, this.sprite.position.y,
        20, 20);
    } else {
      targetAngle = Fighter.game.math.angleBetween(
        this.sprite.position.x, this.sprite.position.y,
        Fighter.game.input.activePointer.x, Fighter.game.input.activePointer.y,
      );
    }
      if(this.sprite.rotation !== targetAngle){
        var delta = targetAngle - this.sprite.rotation;
        if (delta > Math.PI) delta -= Math.PI * 2;
        if (delta < -Math.PI) delta += Math.PI * 2;
        if (delta > 0){
          this.sprite.angle += this.sprite.TURN_SPEED;
        } else {
          this.sprite.angle -= this.sprite.TURN_SPEED;
        }
      if (Math.abs(delta) < Fighter.game.math.degToRad(this.sprite.TURN_SPEED)) {
        this.sprite.rotation = targetAngle;
      }
    }

      this.sprite.body.velocity.x = Math.cos(this.sprite.rotation) * this.sprite.SPEED;
      this.sprite.body.velocity.y = Math.sin(this.sprite.rotation) * this.sprite.SPEED;
  }
}
