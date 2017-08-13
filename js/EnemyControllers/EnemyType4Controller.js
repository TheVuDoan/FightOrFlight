class EnemyType4Controller extends EnemyController{
  constructor(x, y, configs){
    super(x, y, "Enemy2", configs);
    this.sprite.SPEED = 200;
    this.sprite.immovable = true;
    this.sprite.angle += 90;
    this.sprite.body.velocity.x = Math.cos(this.configs.Angle) * this.sprite.SPEED;
    this.sprite.body.velocity.y = Math.sin(this.configs.Angle) * this.sprite.SPEED;
    this.sprite.update = this.update.bind(this);
    this.configs = configs;
  }

}
