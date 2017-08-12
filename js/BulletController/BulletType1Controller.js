class BulletType1Controller extends BulletController {
    constructor(x, y, configs){
      super(x,y,configs);
      this.configs = configs;
      this.sprite.bulletType = "round";
      this.sprite.update = this.update.bind(this);

    this.sprite.body.velocity.x = Math.cos(this.configs.Angle) * this.SPEED;
    this.sprite.body.velocity.y = Math.sin(this.configs.Angle) * this.SPEED;
    }
    update(){}
}
