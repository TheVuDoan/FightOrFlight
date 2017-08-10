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
    if (Fighter.keyboard.isDown(this.configs.left)){
      this.sprite.body.velocity.x = -this.sprite.SHIP_SPEED;
    }
    else if (Fighter.keyboard.isDown(this.configs.right)){
      this.sprite.body.velocity.x = this.sprite.SHIP_SPEED;
    }
    else {
      this.sprite.body.velocity.x = 0;
    }

    if (Fighter.keyboard.isDown(this.configs.up)){
      this.sprite.body.velocity.y = -this.sprite.SHIP_SPEED;
    }
    else if (Fighter.keyboard.isDown(this.configs.down)){
      this.sprite.body.velocity.y = this.sprite.SHIP_SPEED;
    }
    else {
      this.sprite.body.velocity.y = 0;
    }

    
  }
}


// TODO ...
