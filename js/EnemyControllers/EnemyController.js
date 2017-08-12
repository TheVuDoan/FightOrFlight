class EnemyController {
	constructor(x, y, spriteName, configs){
		this.sprite = Fighter.enemyGroup.create(x, y, spriteName);
		Fighter.game.physics.arcade.enable(this.sprite);
		this.configs = configs;
	}
	update(){

  }
}
