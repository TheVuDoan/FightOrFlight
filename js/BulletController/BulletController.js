class BulletController{
  constructor(x, y, spriteName,configs){
    this.sprite = Fighter.enemyBulletGroup.create(x, y,'BulletBoss');
    Fighter.game.physics.arcade.enable(this.sprite);
    this.sprite.checkWorldBounds = true;
    this.sprite.outOfBoundsKill = true;

    this.sprite.anchor = new Phaser.Point(0.5, 0.5);
    this.configs = configs;
    this.SPEED = 200;
  }

  update(){

    }
}
