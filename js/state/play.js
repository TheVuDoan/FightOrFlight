var SPEED = 300;
var timeEnemy = 0;
var timeColli = 0;

var playState = {
  create: function() {
      Fighter.game.stage.backgroundColor = '9631ba';
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


      
      Fighter.playerGroup = Fighter.game.add.physicsGroup();
      Fighter.enemyGroup = Fighter.game.add.physicsGroup();
      Fighter.giftGroup = Fighter.game.add.physicsGroup();

      // Tao player
      Fighter.player = [];
      Fighter.player.push(
        new ShipController(
          Fighter.configs.PLAYER1_STARTX,
          Fighter.configs.PLAYER1_STARTY,
          'Player',
          {
            up : Phaser.Keyboard.UP,
            down: Phaser.Keyboard.DOWN,
            left: Phaser.Keyboard.LEFT,
            right: Phaser.Keyboard.RIGHT,
            fire : Phaser.Keyboard.SPACEBAR
          }
        )
      );
      Fighter.playerGroup.forEach(function(m){
      		//Fighter.bound = m.addChild(Fighter.game.make.sprite(0, 0,'playerBound'));
      		//Fighter.bound.anchor.setTo(0.5, 0.5);
      });

      // Tao Enemy
      Fighter.enemies = [];
      // thiet lap 5 lan tang toc cho enemy
      for( var i = 1; i < 5; i++){
        setTimeout(function() {
        SPEED += 100;
        }, i*5000);
      }

      Fighter.gift = [];
      for(var i = 1 ; i < 5; i++){
      		setTimeout(function(){
		        Fighter.gift.push(
		            new GiftController(
		              500 ,
		              50 ,
		            'CollectibleStar.png',
		            {}
		          )
		        );
		      }, i * 3000);
      }
    },

	
    update: function(){
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
        Fighter.giftGroup,
        getShield
      );

           	
        if(Fighter.game.time.now > timeEnemy ){
        	timeEnemy = Fighter.game.time.now + 300;
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
  var getShield = function (playerSprite, giftSprite){
      giftSprite.kill();      
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

var processHandler = function(player, veg) {
    return true;
}
var collisionHandler = function(player, veg) {
 		player.anchor.setTo(0.5, 0.5);
        veg.kill();
        getExplosion(veg.x,veg.y);
}