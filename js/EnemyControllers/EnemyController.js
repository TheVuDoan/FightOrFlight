class EnemyController {
	constructor(x, y, spriteName, configs){
	this.sprite = Fighter.enemyGroup.create(x, y, 'assets',spriteName);
	Fighter.game.physics.arcade.enable(this.sprite);

	this.configs = configs;
  	this.sprite.update = this.update.bind(this);

	}
	update(){
		this.sprite.position.x = this.configs.startingX
		+ this.configs.moveRadius * Math.sin(Fighter.game.time.time / 1000);

	}
}
