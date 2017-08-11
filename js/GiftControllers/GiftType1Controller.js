class GiftType1Controller extends GiftController {
    constructor(x, y, configs){
      super(x,y,'shieldGift',configs);
      this.configs = configs;
      this.sprite.giftType = "Shield";
      this.sprite.update = this.update.bind(this);
    }
    update(){}
}
