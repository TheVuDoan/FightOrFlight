class BossController{
  constructor(x, y, spriteName,configs){
    this.sprite = Fighter.bossGroup.create(x, y, spriteName);
    Fighter.game.physics.arcade.enable(this.sprite);
    this.sprite.body.collideWorldBounds = true;
    this.sprite.anchor = new Phaser.Point(0.5, 0.5);
    this.configs = configs;
    this.sprite.health = 7;
    this.sprite.width = 100;
    this.sprite.height = 100;
    this.SPEED  = 300;
    this.bomb = 0;
    Fighter.game.time.events.loop(Phaser.Timer.SECOND * 2,function () {
      if(!this.sprite.alive) return;
      for(let i = 0 ; i < 361 ; i+= 20)
      {
        new BulletType1Controller(
          this.sprite.x,
          this.sprite.y,
          {
            Angle : i
          }
        )
      }
    },this);

    Fighter.game.time.events.loop(Phaser.Timer.SECOND * 4,function () {
      if(!this.sprite.alive) return;
      new BulletType2Controller(
        Fighter.game.input.activePointer.x + 40,
        Fighter.game.input.activePointer.y + 40,
        'BulletBoss',
        {}
      )
    }, this);

    Fighter.game.time.events.loop(Phaser.Timer.SECOND * 0.2,function () {
      if(!this.sprite.alive) return;
      if(this.sprite.body.velocity.x != 0) return;
      new BulletType3Controller(
        this.sprite.x,
        this.sprite.y,
        'BulletBoss',
        {
        }
      )
    }, this);

    this.sprite.update = this.update.bind(this);
  }

  update(){
    if(Fighter.game.time.time % 6000 < 4500){
      this.sprite.body.velocity.x = this.SPEED*Math.sin(Fighter.game.time.time / 1000);
      this.sprite.body.velocity.y = this.SPEED*Math.cos(Fighter.game.time.time / 1000);
    } else {
      this.sprite.body.velocity.x = 0;
      this.sprite.body.velocity.y = 0;
    }
  }
}
