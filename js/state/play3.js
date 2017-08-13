var play3State = {
	create: function() {
	   Fighter.game.stage.backgroundColor = '808080';
		 // game score
		 Fighter.style = { font: "35px Arial", fill: "black", boundsAlignH: "center", boundsAlignV: "middle" };
		 Fighter.score = Fighter.score2;
		 Fighter.frame = 0;
		 Fighter.playerDie = false;
		 Fighter.displayingText = Fighter.game.add.text( 1300, 30, "Score: " + Fighter.score, Fighter.style);

		 //game time
		 Fighter.countTime = 180;
		 Fighter.timeScore = Fighter.game.add.text(
				 90, 30, Fighter.countTime,
				 { font: '34px Arial', fill: 'black', wordWrap: true, wordWrapWidth: 50 }
		 );

		 var updateTimeText = function() {
			 let pad2 = (number) => (number < 10 ? '0' : '') + number;
			 Fighter.timeScore.setText(Math.floor(Fighter.countTime / 60) + ":" + pad2(Fighter.countTime % 60));
		 }

		 var updateCounter = function() {
			 if(!Fighter.playerDie) {
				 Fighter.countTime++;
				 updateTimeText();
			 }
		 }

		 updateTimeText();
		 Fighter.timer = Fighter.game.time.events;
		 Fighter.timer.loop(Phaser.Timer.SECOND, updateCounter, this);

		 Fighter.playerGroup = Fighter.game.add.physicsGroup();
		 Fighter.enemyGroup = Fighter.game.add.physicsGroup();
		 Fighter.giftGroup = Fighter.game.add.physicsGroup();

		 // Generate player
		 Fighter.player = [];
		 Fighter.player.push(
			 new ShipController(
				 Fighter.configs.PLAYER1_STARTX,
				 Fighter.configs.PLAYER1_STARTY,
				 'Player',
				 {}
			 )
		 );

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
