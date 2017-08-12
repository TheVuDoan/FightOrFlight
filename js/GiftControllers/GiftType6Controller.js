class GiftType6Controller extends GiftController{
    constructor(x, y, spriteName, configs){
      super(x,y,'dublicate',configs);
      this.sprite.giftType = "Dublicate";
      this.configs = configs;

      this.sprite.update = this.update.bind(this);
    }
    update(){

    }
}
