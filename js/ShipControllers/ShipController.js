class ShipController{
  constructor(x, y, spriteName,configs){
    this.sprite = Fighter.playerGroup.create(x, y, "assets", spriteName);
    this.sprite.body.collideWorldBounds = true;
    this.sprite.anchor = new Phaser.Point(0.5, 0.5);

    this.configs = configs;
    this.configs.SHIP_SPEED = 500;

    this.sprite.update = this.update.bind(this);
  }

  update(){
    if (Fighter.keyboard.isDown(this.configs.left)){
      this.sprite.body.velocity.x = -this.configs.SHIP_SPEED;
    }
    else if (Fighter.keyboard.isDown(this.configs.right)){
      this.sprite.body.velocity.x = this.configs.SHIP_SPEED;
    }
    else {
      this.sprite.body.velocity.x = 0;
    }

    if (Fighter.keyboard.isDown(this.configs.up)){
      this.sprite.body.velocity.y = -this.configs.SHIP_SPEED;
    }
    else if (Fighter.keyboard.isDown(this.configs.down)){
      this.sprite.body.velocity.y = this.configs.SHIP_SPEED;
    }
    else {
      this.sprite.body.velocity.y = 0;
    }
  }
}


// TODO ...
