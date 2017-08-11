class GiftType2Controller extends GiftController{
    constructor(x, y, spriteName, configs){
      super(x,y,'speedGift',configs);
      this.configs = configs;

      this.sprite.update = this.update.bind(this);
    }
    update(){

    }
}
