class GiftController {
    constructor(x, y, spriteName, configs){
      this.sprite = Fighter.giftGroup.create(x, y, spriteName);
      Fighter.game.physics.arcade.enable(this.sprite);

      this.sprite.anchor = new Phaser.Point(0.5, 0.5);
      this.configs = configs;

      this.sprite.update = this.update.bind(this);
    }
    update(){}
}
