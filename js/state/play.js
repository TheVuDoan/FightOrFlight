var SPEED = 300; //toc do ban dau cua enemy
var timeEnemy = 0;
var timeColli = 0;

var playState = {
  create: function() {
      Fighter.game.stage.backgroundColor = '808080';
      //game time
      Fighter.countTime = 0;
      Fighter.timeScore = Fighter.game.add.text(
          90, 18, Fighter.countTime,
          { font: '34px Arial', fill: 'black', wordWrap: true, wordWrapWidth: 50 }
      );

      var updateTimeText = function() {
        let pad2 = (number) => (number < 10 ? '0' : '') + number;
        Fighter.timeScore.setText(Math.floor(Fighter.countTime / 60) + ":" + pad2(Fighter.countTime % 60));
      }

      var updateCounter = function() {
        Fighter.countTime++;
        updateTimeText();
      }

      updateTimeText();
      Fighter.timer = Fighter.game.time.events;
      Fighter.timer.loop(Phaser.Timer.SECOND, updateCounter, this);

      // game score
      Fighter.style = { font: "35px Arial", fill: "black", boundsAlignH: "center", boundsAlignV: "middle" };
      Fighter.score = 0;
      Fighter.frame = 0;
      Fighter.displayingText = Fighter.game.add.text( 1300, 30, "Score: " + Fighter.score, Fighter.style);
      Fighter.playerDie = false;

      Fighter.playerGroup = Fighter.game.add.physicsGroup();
      Fighter.enemyGroup = Fighter.game.add.physicsGroup();
      Fighter.gift1Group = Fighter.game.add.physicsGroup();
      Fighter.gift2Group = Fighter.game.add.physicsGroup();
      Fighter.gift3Group = Fighter.game.add.physicsGroup();

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
      // thiet lap 5 lan tang toc cho enemy
      for( var i = 1; i < 5; i++){
        setTimeout(function() {
        SPEED += 100;
        }, i*5000);
      }

      // random giap
      Fighter.gift1 = [];
      for(var i = 1 ; i < 3; i++){
      		let x,y;
        	x = Math.floor(Math.random() * 1600) + 50;
        	y = Math.floor(Math.random() * 900) + 50;
      		setTimeout(function(){
		        Fighter.gift1.push(
		            new GiftType1Controller(
		              x ,
		              y ,
		            'shieldGift',
		            {}
		          )
		        );
		      }, i * 10000);
      }

      // random speed up
      Fighter.gift2 = [];
      for(var i = 1 ; i < 3; i++){
      		let x,y;
        	x = Math.floor(Math.random() * 1600) + 50;
        	y = Math.floor(Math.random() * 900) + 50;
      		setTimeout(function(){
		        Fighter.gift2.push(
		            new GiftType2Controller(
		              x ,
		              y ,
		            'speedGift',
		            {}
		          )
		        );
		      }, i * 3000);
      }

      Fighter.gift3 = [];
      for(var i = 1 ; i < 4; i++){
          let x,y;
          x = Math.floor(Math.random() * 1600) + 50;
          y = Math.floor(Math.random() * 900) + 50;
          setTimeout(function(){
            Fighter.gift3.push(
                new GiftType3Controller(
                  x ,
                  y ,
                'killGift',
                {}
              )
            );
          }, i * 4000);
      }
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
            Fighter.game.state.start('win');
        }
      // va cham shield va enemy
		    Fighter.game.physics.arcade.collide(Fighter.shield, Fighter.enemyGroup, collisionHandler, processHandler, this);
      // va cham cac enemy vs nhau
    	   Fighter.game.physics.arcade.collide(Fighter.enemyGroup);
      // va cham player vs enemy
        Fighter.game.physics.arcade.overlap(
        Fighter.playerGroup,
        Fighter.enemyGroup,
        getCollie
      );

        // an duoc giap
        Fighter.game.physics.arcade.overlap(
        Fighter.playerGroup,
        Fighter.gift1Group,
        getShield
      );

        // tang toc do
        Fighter.game.physics.arcade.overlap(
        Fighter.playerGroup,
        Fighter.gift2Group,
        speedUp
      );

        // kill all
        Fighter.game.physics.arcade.overlap(
        Fighter.playerGroup,
        Fighter.gift3Group,
        killAll
      );

        if(Fighter.game.time.now > timeEnemy ){
        	timeEnemy = Fighter.game.time.now + 200;
        	createEnemy();
	    }
    }
}

  var createEnemy = function(){
  		var x,y;
        	x = Math.floor(Math.random() * 1800) ;
        	y = Math.floor(Math.random() * 1800) ;
        	if(x > 900) x+= 900;
        	else x -= 900;
        	if(y > 900) y += 900;
        	else y -= 900;
		      Fighter.enemies.push(
		        new EnemyController(
		          x,
		          y,
		          'Enemy',
		          {}
		        )
		      );
  }

  var getExplosion = function(x, y) {
      explosion = Fighter.game.add.sprite(0, 0, 'explosion');
      explosion.anchor.setTo(0.5, 0.5);
      var animation = explosion.animations.add('boom', [0,1,2,3], 60, false);
      animation.killOnComplete = true;

      explosion.x = x;
      explosion.y = y;

      explosion.animations.play('boom');
  };


var getCollie = function(playerSprite, enemySprite){
      if(playerSprite.shield == 0){
	      getExplosion(playerSprite.x, playerSprite.y);
	      playerSprite.kill();
      }
  }



  var myShield;
  var getShield = function (playerSprite, gift1Sprite){
      gift1Sprite.kill();
      if(playerSprite.shield == 1) {
        Fighter.shield.kill();
        clearTimeout(myShield);
      }
       else playerSprite.shield = 1;
      Fighter.shield = Fighter.game.add.sprite(playerSprite.x,playerSprite.y, 'shield');
      Fighter.shield.anchor.setTo(0.5, 0.5);
      setInterval(function(){
        Fighter.shield.x = playerSprite.x;
        Fighter.shield.y = playerSprite.y;
      }, 0);

      Fighter.game.physics.arcade.enable(Fighter.shield);
      myShield = setTimeout(function(){
        Fighter.shield.kill();
        playerSprite.shield = 0;
      }, 10000);
  }


var speedUp = function(playerSprite, gift2Sprite){
	   playerSprite.SHIP_SPEED += 50;
     gift2Sprite.kill();
}
var killAll = function(playerSprite, gift3Sprite){
    gift3Sprite.kill();
    Fighter.enemyGroup.forEach(function(m){
      getExplosion(m.x,m.y);
      m.kill();
    });
}
var processHandler = function(player, veg) {
    return true;
}
var collisionHandler = function(player, veg) {
        veg.kill();
        getExplosion(veg.x,veg.y);
}
