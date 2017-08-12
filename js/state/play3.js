var playState3 = {
	create: function() {
	   Fighter.game.stage.backgroundColor = '808080';
	   Fighter.boss = new BossController(
          Fighter.configs.BOSS_X,
          Fighter.configs.BOSS_Y,
          'Boss',
          {}
        )
	},
	update: function(){

	}
}
