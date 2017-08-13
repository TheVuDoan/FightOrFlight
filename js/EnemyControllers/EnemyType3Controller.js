class EnemyType3Controller extends EnemyController{
  constructor(x, y, configs){
    super(x, y, "Enemy2", configs);
    this.sprite.SPEED = 3;
    this.sprite.angle += 90;
    this.sprite.immovable = true;
    this.sprite.update = this.update.bind(this);
    this.configs = configs;
  }
  update(){
    if (this.configs.type == 'down') {
      this.sprite.body.velocity.y += this.sprite.SPEED;
    }
    if (this.configs.type == 'up') {
      this.sprite.body.velocity.y -= this.sprite.SPEED;
    }
    if (this.configs.type == 'left') {
      this.sprite.body.velocity.x -= this.sprite.SPEED;
    }
    if (this.configs.type == 'right') {
      this.sprite.body.velocity.x += this.sprite.SPEED;
    }
  }
}
