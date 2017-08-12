class GiftType4Controller extends GiftController{
    constructor(x, y, spriteName, configs){
      super(x,y,'blast',configs);
      this.sprite.giftType = "Blast";
      this.configs = configs;

      this.sprite.update = this.update.bind(this);
    }
    update(){

    }
}
