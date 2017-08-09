class GiftController {
    constructor(x, y, spriteName, configs){
      this.sprite = Fighter.giftGroup.create(x, y, 'assets', spriteName);
      Fighter.game.physics.arcade.enable(this.sprite);
      

      this.sprite.anchor = new Phaser.Point(0.5, 0.5);
      this.configs = configs;
      this.sprite.body.velocity.y = 50;
      this.sprite.update = this.update.bind(this);
    }
    update(){

    }
}