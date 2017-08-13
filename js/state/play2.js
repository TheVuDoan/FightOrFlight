var timeEnemy = 0;
var timeColli = 0;
var shield = 0;
var myShield;
var loop,loop1,loop2,loop3,loop4,loop5,loop6,loop7,loop8;
var flash,fade;
var dublicate = false;
var normalEnemy = 1;
var play2State = {
  create:function() {
    Fighter.game.stage.backgroundColor = '#808080';
    // game score
    Fighter.style = { font: "35px Arial", fill: "black", boundsAlignH: "center", boundsAlignV: "middle" };
    Fighter.score = Fighter.score1;
    Fighter.score2 = Fighter.score1; // Diem man 2+1
    Fighter.frame = 0;
    Fighter.playerDie = false;
    Fighter.displayingText = Fighter.game.add.text( 1300, 30, "Score: " + Fighter.score, Fighter.style);

    //game time
    Fighter.countTime = 90;
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

    // Generate Enemy
    Fighter.enemies = [];
    // thiet lap tang toc cho enemy
    loop = Fighter.game.time.events.loop(Phaser.Timer.SECOND * 10, function(){
        SPEED += 50;
    },this);

    loop6 = Fighter.game.time.events.loop(Phaser.Timer.SECOND * 30, function(){
        normalEnemy = 0;
        createEnemy3();
        normalEnemy = 1;
    }, this);

    loop7 = Fighter.game.time.events.loop(Phaser.Timer.SECOND * 22, function(){
        Fighter.round = Fighter.game.add.sprite(600, 600, 'Enemy1');
        Fade(Fighter.round);
      }, this);
    loop8 = Fighter.game.time.events.loop(Phaser.Timer.SECOND * 24, function(){
        normalEnemy = 0;
        createEnemy4();
        normalEnemy = 1;
    }, this);

    Fighter.gift = [];
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
    //Blast
    loop2 = Fighter.game.time.events.loop(Phaser.Timer.SECOND * 25, function(){
        let x,y;
        x = Math.floor(Math.random() * 1600) + 50;
        y = Math.floor(Math.random() * 900) + 50;
        Fighter.gift.push(
          new GiftType4Controller(
            x ,
            y ,
            {}
          )
        );
    }, this);
    //Megablast
    loop3 = Fighter.game.time.events.loop(Phaser.Timer.SECOND * 45, function(){
        let x,y;
        x = Math.floor(Math.random() * 1600) + 50;
        y = Math.floor(Math.random() * 900) + 50;
        Fighter.gift.push(
          new GiftType3Controller(
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
    //dublicate
    loop5 = Fighter.game.time.events.loop(Phaser.Timer.SECOND * 35, function(){
        let x,y;
        x = Math.floor(Math.random() * 1600) + 50;
        y = Math.floor(Math.random() * 900) + 50;
        Fighter.gift.push(
          new GiftType6Controller(
            x ,
            y ,
            {}
          )
        );
    }, this);
  },

  replay:function() {
    Fighter.game.state.start('play2');
  },

  pause:function() {
    Fighter.game.paused = !Fighter.game.paused;
  },

  update: function(){
    // pause
    window.onkeydown = function() {
      if (Fighter.game.input.keyboard.event.keyCode == 32){
        Fighter.game.paused = !Fighter.game.paused;
      }
    }
    // update score
    if(!Fighter.playerDie){
      Fighter.frame++;
      Fighter.score += (Fighter.frame % 60 === 0);
      Fighter.score2 += (Fighter.frame % 60 === 0);
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
      // va cham shield va enemy
      if(shield == 1){
        Fighter.enemyGroup.forEach(function(enemy){
          if(checkOverlap(enemy, Fighter.shield) && enemy.alive){
            getExplosion(enemy.x,enemy.y);
            enemy.kill();
            Fighter.score += 1;
            Fighter.score2 += 1;
          }
        });
      }
      // va cham cac enemy vs nhau
    	Fighter.game.physics.arcade.collide(Fighter.enemyGroup);
      // va cham player vs enemy
        Fighter.game.physics.arcade.overlap(
          Fighter.playerGroup,
          Fighter.enemyGroup,
          getCollie2
        );

      Fighter.game.physics.arcade.overlap(
        Fighter.playerGroup,
        Fighter.giftGroup,
        onPlayerGetGift2
      );

      if(Fighter.game.time.now > timeEnemy && normalEnemy == 1){
        timeEnemy = Fighter.game.time.now + 500;
        createEnemy2();
	    }
      //Level up
      if(Fighter.countTime === 180 && !Fighter.playerDie) {
        Fighter.game.state.start('stage3Opening');
      }
    }
}

var createEnemy2 = function(){
  		var x,y;
        	x = Math.floor(Math.random() * 1800) ;
        	y = Math.floor(Math.random() * 1800) ;
        	if(x > 900) x+= 900;
        	else x -= 900;
        	if(y > 900) y += 900;
        	else y -= 900;
		      Fighter.enemies.push(
		        new EnemyType2Controller(
		          x,
		          y,
		          {}
		        )
		      );
}

var createEnemy3 = function(){
  		for (let i = 10 ; i < 1500 ; i+=100) {
		      Fighter.enemies.push(
		        new EnemyType3Controller(
		          i,
		          10,
		          {
                type : 'down'
              }
		        )
		      );
        }
      for (let i = 157 ; i < 1800 ; i+=100) {
  		     Fighter.enemies.push(
  		       new EnemyType3Controller(
  		         i,
  		         900,
  		         {
                 type : 'up'
               }
  		       )
  		     );
        }
}

var createEnemy4 = function(){

        //Fade(Fighter.round);

          for(var i = 0 ; i < 361 ; i+= 10)
          {
              new EnemyType4Controller(
               600,
               600,
              {
                Angle : i
              }
            )
          }
          Fighter.round.kill();
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

var getCollie2 = function(playerSprite, enemySprite){
      if(shield == 0){
	      getExplosion(playerSprite.x, playerSprite.y);
	      playerSprite.kill();
        // GAMEOVER

        SPEED = 300;
        Fighter.game.time.events.remove(loop);
        Fighter.game.time.events.remove(loop1);
        Fighter.game.time.events.remove(loop2);
        Fighter.game.time.events.remove(loop3);
        Fighter.game.time.events.remove(loop4);
        Fighter.game.time.events.remove(loop5);
        Fighter.game.time.events.remove(loop6);
        Fighter.game.time.events.remove(loop7);
        Fighter.game.time.events.remove(loop8);

        Fighter.playerDie = true;
        var gameover = Fighter.game.add.image(550, 150, 'gameover');
        gameover.width = 500;
        gameover.height = 350;

        if(localStorage.getItem("highscore") < Fighter.score){
          localStorage.setItem("highscore", Fighter.score);
        }
        var score = Fighter.game.add.text(700,550, 'Score: ' + Fighter.score,{font: "bold 50px Arial", fill: "#ffffff", boundsAlignH: "center", boundsAlignV: "middle"});
        var highscore = Fighter.game.add.text(650,650, 'Highscore:' + localStorage.getItem("highscore"),{font: "bold 50px Arial", fill: "white", boundsAlignH: "center", boundsAlignV: "middle"});

        var replay = Fighter.game.add.button(700, 750, 'replay', play2State.replay, this);
        replay.width = 200;
        replay.height = 200;
        Fighter.game.paused;
      }
}

var onPlayerGetGift2 = function(playerSprite, giftSprite) {
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

      if (giftSprite.giftType == "Blast") {
        giftSprite.kill();
        Fighter.enemyGroup.forEach(function(enemy){
          if(enemy.alive && Phaser.Math.distance(Fighter.game.input.activePointer.x,Fighter.game.input.activePointer.y, enemy.x, enemy.y) < 500){
	          getExplosion(enemy.x,enemy.y);
	          enemy.kill();
	          Fighter.score += 1;
            Fighter.score1 += 1;
        	}
        });
      }

      if (giftSprite.giftType == "Mega Blast") {
        giftSprite.kill();
        Fighter.enemyGroup.forEach(function(enemy){
          if (enemy.inWorld && enemy.alive) {
            getExplosion(enemy.x,enemy.y);
            enemy.kill();
            Fighter.score += 1;
            Fighter.score2 += 1;
          }
        });
      }

      if (giftSprite.giftType == "Star") {
        giftSprite.kill();
        Fighter.score += 5;
        Fighter.score2 += 5;
      }

      if(giftSprite.giftType == "Dublicate"){
      	giftSprite.kill();
      	playerSprite.clone = Fighter.game.add.sprite(20,20,'Player');
        dublicate = true;
        setTimeout(function(){
          dublicate = false;
          playerSprite.clone.kill();
        }, 5000);
      }
}

var checkOverlap = function(spriteA, spriteB) {
  var boundsA = spriteA.getBounds();
  var boundsB = spriteB.getBounds();
  return Phaser.Rectangle.intersects(boundsA, boundsB);
}

var fadeSprite = function() {
	 flash = Fighter.game.time.events.loop(Phaser.Timer.SECOND * 0.2,
		function(){
	    Fighter.game.add.tween(Fighter.shield).to( { alpha: 0 }, 0, Phaser.Easing.Linear.None, true);
	    Fighter.game.add.tween(Fighter.shield).to( { alpha: 1 }, 100, Phaser.Easing.Linear.None, true);
		}
		,this);
}

var Fade = function(sprite) {
	 flash = Fighter.game.time.events.loop(Phaser.Timer.SECOND * 0.2,
		function(){
	    Fighter.game.add.tween(sprite).to( { alpha: 0 }, 0, Phaser.Easing.Linear.None, true);
	    Fighter.game.add.tween(sprite).to( { alpha: 1 }, 100, Phaser.Easing.Linear.None, true);
		}
		,this);
}
