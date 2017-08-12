class GiftType2Controller extends GiftController{
    constructor(x, y, spriteName, configs){
      super(x,y,'transGift',configs);
      this.configs = configs;
      this.sprite.giftType = "Transperant";
      this.sprite.update = this.update.bind(this);
    }
    update(){

    }
}
