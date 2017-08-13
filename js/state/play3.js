var shield = 0;
var myShield;
var loop,loop1,loop4;
var flash,fade;
var play3State = {
	create: function() {
	   Fighter.game.stage.backgroundColor = 'FFC857';
		 Fighter.explosionSound = Fighter.game.add.audio('Explosion');
		 Fighter.getItemSound = Fighter.game.add.audio('GetItem');
		 Fighter.gameoverSound = Fighter.game.add.audio('Gameover');
		 Fighter.soundtrackSound = Fighter.game.add.audio('Soundtrack');
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
		 Fighter.bossGroup = Fighter.game.add.physicsGroup();
 		 Fighter.enemyBulletGroup = Fighter.game.add.physicsGroup();
 		 Fighter.missileGroup = Fighter.game.add.physicsGroup();

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
        );

			Fighter.gift = [];
				loop = Fighter.game.time.events.loop(Phaser.Timer.SECOND * 20, function(){
					let x,y;
					x = Math.floor(Math.random() * 1500) + 50;
					y = Math.floor(Math.random() * 900) + 50;
					Fighter.gift.push(
						new GiftType7Controller(
							x,
							y,
							{}
						)
					);
				}, this);

				//shield
		    loop1 = Fighter.game.time.events.loop(Phaser.Timer.SECOND * 15, function(){
		        let x,y;
		        x = Math.floor(Math.random() * 1600) + 50;
		        y = Math.floor(Math.random() * 900) + 50;
		        Fighter.gift.push(
		          new GiftType1Controller(
		            x ,
		            y ,
		            {}
		          )
		        );
		    }, this);

				//star
		    loop4 = Fighter.game.time.events.loop(Phaser.Timer.SECOND * 10, function(){
		        let x,y;
		        x = Math.floor(Math.random() * 1600) + 50;
		        y = Math.floor(Math.random() * 900) + 50;
		        Fighter.gift.push(
		          new GiftType5Controller(
		            x ,
		            y ,
		            {}
		          )
		        );
		    }, this);
	},
	update: function(){
		// pause
		window.onkeydown = function() {
			if (Fighter.game.input.keyboard.event.keyCode == 32){
				Fighter.game.paused = !Fighter.game.paused;
			}
		}
		// update score
			//Fighter.score.bringToTop();
			if(!Fighter.playerDie){
					Fighter.frame++;
					Fighter.score += (Fighter.frame % 60 === 0);
					Fighter.score1 += (Fighter.frame % 60 === 0);
					Fighter.gameTime += (Fighter.frame % 60 === 0);
					Fighter.displayingText.setText("Score: " + Fighter.score);
			} else {
					Fighter.displayingText.destroy();

					if(localStorage.getItem("highscore") === null){
						localStorage.setItem("highscore", Fighter.score);
					}
					else if(localStorage.getItem("highscore") < Fighter.score){
						localStorage.setItem("highscore", Fighter.score);
					}

					clearInterval(this.enemyInterval);
					//Fighter.game.state.start('win');
			}

		// va cham shield va bullet
		if(shield == 1){
			Fighter.enemyBulletGroup.forEach(function(enemy){
				if(checkOverlap(enemy, Fighter.shield) && enemy.alive){
					getExplosion(enemy.x,enemy.y);
					Fighter.explosionSound.play();
					enemy.kill();
					Fighter.score += 1;
					Fighter.score2 += 1;
				}
			});
		}

		Fighter.game.physics.arcade.overlap(
	    Fighter.enemyBulletGroup,
	    Fighter.playerGroup,
	    onBulletHitPlayer
		);

		Fighter.game.physics.arcade.overlap(
			Fighter.bossGroup,
			Fighter.playerGroup,
	    onBulletHitPlayer
		);

		Fighter.game.physics.arcade.overlap(
			Fighter.missileGroup,
			Fighter.bossGroup,
			onMissileHitBoss
		);

		Fighter.game.physics.arcade.overlap(
			Fighter.playerGroup,
			Fighter.giftGroup,
			onPlayerGetGift7
		);
	},

	replay:function() {
    Fighter.game.state.start('play3');
  },

  pause:function() {
    Fighter.game.paused = !Fighter.game.paused;
  },

}

var onMissileHitBoss = function(bulletSprite, enemySprite) {
		bulletSprite.kill();
		enemySprite.damage(1);
}

var onBulletHitPlayer = function(bulletSprite, playerSprite){
	if(shield == 0){
		getExplosion(playerSprite.x, playerSprite.y);
		playerSprite.kill();
		// GAMEOVER
		Fighter.soundtrackSound.stop();
		Fighter.explosionSound.play();
		SPEED = 300;
		Fighter.game.time.events.remove(loop);
		Fighter.game.time.events.remove(loop1);
		Fighter.game.time.events.remove(loop4);

		Fighter.playerDie = true;
		var gameover = Fighter.game.add.image(200, 150, 'gameover');
		gameover.width = 1300;
		gameover.height = 250;

		if(localStorage.getItem("highscore") < Fighter.score){
			localStorage.setItem("highscore", Fighter.score);
		}
		var score = Fighter.game.add.text(700,450, 'Score: ' + Fighter.score,{font: "bold 50px Arial", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle"});
		var highscore = Fighter.game.add.text(650,550, 'Highscore:' + localStorage.getItem("highscore"),{font: "bold 50px Arial", fill: "black", boundsAlignH: "center", boundsAlignV: "middle"});

		var replay = Fighter.game.add.button(700, 650, 'replay', play3State.replay, this);
		replay.width = 200;
		replay.height = 200;
		Fighter.game.paused;
	}
}
var getExplosion = function(x, y) {
	explosion = Fighter.game.add.sprite(0, 0, 'explosion');
	explosion.anchor.setTo(0.5, 0.5);
	var animation = explosion.animations.add('boom', [0,1,2,3], 60, false);
	animation.killOnComplete = true;

	explosion.x = x;
	explosion.y = y;

	explosion.animations.play('boom');
}

var onPlayerGetGift7 = function(playerSprite, giftSprite) {
	Fighter.getItemSound.play();
	if (giftSprite.giftType == "Missile") {
		giftSprite.kill();
		Fighter.missile = [];
		Fighter.missile.push(
			new Missile(
				Fighter.game.input.activePointer.x + 50,
				Fighter.game.input.activePointer.y + 50,
				"BossKiller",
				{}
			)
		);
	}

	if (giftSprite.giftType == "Shield") {
		giftSprite.kill();
		if(shield == 1) {
			Fighter.shield.kill();
			clearTimeout(myShield);
			Fighter.game.time.events.remove(fade);
			Fighter.game.time.events.remove(flash);
		}
		else shield = 1;
		Fighter.shield = playerSprite.addChild(Fighter.game.add.sprite(0, 0, 'shield'));
		Fighter.shield.anchor.setTo(0.5, 0.5);

		Fighter.game.physics.arcade.enable(Fighter.shield);
		myShield = setTimeout(function(){
			Fighter.shield.kill();
			shield = 0;
		}, 5000);
		Fighter.game.time.events.remove(flash);
		fade = Fighter.game.time.events.add(Phaser.Timer.SECOND * 3, fadeSprite,this);
	}

	if (giftSprite.giftType == "Star") {
		giftSprite.kill();
		Fighter.score += 5;
		Fighter.score2 += 5;
	}
}

var fadeSprite = function() {
	 flash = Fighter.game.time.events.loop(Phaser.Timer.SECOND * 0.2,
		function(){
	    Fighter.game.add.tween(Fighter.shield).to( { alpha: 0 }, 0, Phaser.Easing.Linear.None, true);
	    Fighter.game.add.tween(Fighter.shield).to( { alpha: 1 }, 100, Phaser.Easing.Linear.None, true);
		}
		,this);
}

var checkOverlap = function(spriteA, spriteB) {
  var boundsA = spriteA.getBounds();
  var boundsB = spriteB.getBounds();
  return Phaser.Rectangle.intersects(boundsA, boundsB);
}
