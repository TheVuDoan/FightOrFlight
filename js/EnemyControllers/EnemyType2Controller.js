class EnemyType2Controller extends EnemyController{
  constructor(x, y, spriteSuffix, configs){
    super(
      x,
      y,
      `${spriteSuffix}Type2.png`,
      configs
    );
    this.configs.moveRadius = 120;
    this.configs.startingX = x;
    this.configs.startingY = y;
  	this.sprite.health = 10;
  }
}
