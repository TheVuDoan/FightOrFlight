class GiftType3Controller extends GiftController{
    constructor(x, y, spriteName, configs){
      super(x,y,'killGift',configs);
      this.sprite.giftType = "Mega Blast";
      this.configs = configs;

      this.sprite.update = this.update.bind(this);
    }
    update(){

    }
}
