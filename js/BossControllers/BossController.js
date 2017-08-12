class BossController{
  constructor(x, y, spriteName,configs){
    this.sprite = Fighter.game.add.sprite(x, y, spriteName);
    Fighter.game.physics.arcade.enable(this.sprite);
    this.sprite.body.collideWorldBounds = true;
    this.sprite.anchor = new Phaser.Point(0.5, 0.5);
    this.configs = configs;
    this.SPEED  = 100;
    this.bomb = 0;
    Fighter.game.time.events.loop(Phaser.Timer.SECOND * 2,function () {
          for(var i = 0 ; i < 361 ; i+= 30)
          {
              new BulletController(
              this.sprite.x,
              this.sprite.y,
              'bulletBoss',
              {
                Angle : i
              }
            )
          }
    },this);
    this.sprite.update = this.update.bind(this);
  }
  update(){

     this.sprite.body.velocity.x = this.SPEED*Math.sin(Fighter.game.time.time / 1000);

  }
}
