class BulletController{
  constructor(x, y, spriteName,configs){
    this.sprite = Fighter.game.add.sprite(x, y, spriteName);
    Fighter.game.physics.arcade.enable(this.sprite);
    
   

    this.sprite.anchor = new Phaser.Point(0.5, 0.5);
    this.configs = configs;
    this.SPEED = 200;
 
    this.sprite.body.velocity.x = Math.cos(this.configs.Angle) * this.SPEED;
    this.sprite.body.velocity.y = Math.sin(this.configs.Angle) * this.SPEED;
  }

  update(){
     
    }
}