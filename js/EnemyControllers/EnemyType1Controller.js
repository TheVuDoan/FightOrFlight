class EnemyType1Controller extends EnemyController{
  constructor(x, y, spriteSuffix, configs){
    super(
      x,
      y,
      `${spriteSuffix}Type1.png`,
      configs
    );
    this.configs.moveRadius = 220;
    this.configs.startingX = x;
    this.configs.startingY = y;
  	
    this.sprite.health = 5;
  }
}
