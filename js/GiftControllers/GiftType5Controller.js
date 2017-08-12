class GiftType5Controller extends GiftController{
    constructor(x, y, spriteName, configs){
      super(x,y,'star',configs);
      this.sprite.giftType = "Star";
      this.configs = configs;

      this.sprite.update = this.update.bind(this);
    }
    update(){

    }
}
