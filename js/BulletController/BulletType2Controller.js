class BulletType2Controller extends BulletController{
  constructor(x, y, configs){
    //this.sprite = Fighter.enemyBulletGroup.create(x, y,'BulletBoss');
    super(x,y,configs);
    this.sprite.anchor = new Phaser.Point(0.5, 0.5);
    this.configs = configs;
    this.sprite.update = this.update.bind(this);
    this.sprite.a = Fighter.game.input.activePointer.x;
    this.sprite.b = Fighter.game.input.activePointer.y;
    this.sprite.c = Math.floor(Math.random() * 1600);
  }

  update(){
    if( Phaser.Math.distance(Fighter.game.input.activePointer.x,Fighter.game.input.activePointer.y,this.sprite.a,this.sprite.b) > 150){
      this.sprite.body.velocity.y = 500;
    } else {
      this.sprite.position.x = this.sprite.a+200*Math.sin((Fighter.game.time.time + this.sprite.c) / 100);
      this.sprite.position.y = this.sprite.b+200*Math.cos((Fighter.game.time.time + this.sprite.c) / 100);
    }
  }
}
