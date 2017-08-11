class ShipController{
  constructor(x, y, spriteName,configs){
    this.sprite = Fighter.playerGroup.create(x, y, spriteName);
    this.sprite.body.collideWorldBounds = true;
    this.sprite.anchor = new Phaser.Point(0.5, 0.5);

    this.configs = configs;
    this.sprite.shield = 0;

    this.sprite.SHIP_SPEED = 400;

    this.sprite.update = this.update.bind(this);
  }

  update(){
    this.sprite.x = Fighter.game.input.activePointer.x;
    this.sprite.y = Fighter.game.input.activePointer.y;

  }
}


// TODO ...
