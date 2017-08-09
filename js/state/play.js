var playState = {
  create: function() {
    //Fighter.background = Fighter.game.add.sprite(0, 0, 'background');
      Fighter.game.stage.backgroundColor = '#808080';

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


      // Tao player
      Fighter.playerGroup = Fighter.game.add.physicsGroup();
      Fighter.enemyGroup = Fighter.game.add.physicsGroup();
      Fighter.giftGroup = Fighter.game.add.physicsGroup();

      Fighter.player = [];
      Fighter.player.push(
        new ShipType1Controller(
          Fighter.configs.PLAYER1_STARTX,
          Fighter.configs.PLAYER1_STARTY,
          '-Player',
          {
            up : Phaser.Keyboard.UP,
            down: Phaser.Keyboard.DOWN,
            left: Phaser.Keyboard.LEFT,
            right: Phaser.Keyboard.RIGHT,
            fire : Phaser.Keyboard.SPACEBAR
          }
        )
      );


      Fighter.enemies = [];
      Fighter.enemies.push(
        new EnemyType1Controller(
          Fighter.configs.ENEMY1_STARTX,
          Fighter.configs.ENEMY1_STARTY,
          'Enemy',
          {}
        )
      );


      Fighter.gift = [];
      setTimeout(function(){
        Fighter.gift.push(
            new GiftController(
              500 ,
              50 ,
            'CollectibleStar.png',
            {}
          )
        );
      }, 3000);
    },

    update: function(){
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
  };

var timeColli = 0;
var getCollie = function(playerSprite, enemySprite){    
    if(timeColli < Fighter.game.time.time){
      if(playerSprite.shield == 0){
      getExplosion(playerSprite.x, playerSprite.y);
      playerSprite.kill();
      timeColli = Fighter.game.time.time + 1000;
      }else{
      getExplosion(enemySprite.x, enemySprite.y);
        enemySprite.kill();
        timeColli = Fighter.game.time.time + 500;
      }
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


      myShield = setTimeout(function(){
        Fighter.shield.kill();
        playerSprite.shield = 0;
      }, 5000);
  }