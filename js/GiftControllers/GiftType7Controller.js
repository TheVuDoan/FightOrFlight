class GiftType7Controller extends GiftController{
    constructor(x, y, spriteName, configs){
      super(x,y,'missile',configs);
      this.sprite.giftType = "Missile";
      this.sprite.height = 65;
      this.sprite.width = 65;
      this.configs = configs;

      this.sprite.update = this.update.bind(this);
    }
    update(){

    }
}
