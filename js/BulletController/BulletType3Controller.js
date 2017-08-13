class BulletType3Controller{
  constructor(x, y, spriteName, configs){
    this.sprite = Fighter.enemyBulletGroup.create(x, y,'BulletBoss');
    Fighter.game.physics.arcade.enable(this.sprite);
    this.sprite.checkWorldBounds = true;
    this.sprite.outOfBoundsKill = true;
    this.sprite.anchor = new Phaser.Point(0.5, 0.5);
    this.configs = configs;
    this.sprite.SPEED = 350;
    this.sprite.TURN_SPEED = 50;
    this.sprite.update = this.update.bind(this);
  }

  update(){
    var targetAngle = Fighter.game.math.angleBetween(
      this.sprite.position.x, this.sprite.position.y,
      Fighter.game.input.activePointer.x, Fighter.game.input.activePointer.y,
    );

    if(this.sprite.rotation !== targetAngle + Math.PI/2){
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
