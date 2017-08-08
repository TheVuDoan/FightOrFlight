var Fighter = {};
Fighter.configs = {
  GAME_WIDTH: 1600,
  GAME_HEIGHT: 960,
  PLAYER1_STARTX: 500,
  PLAYER1_STARTY: 500
};

window.onload = function(){
  Fighter.game = new Phaser.Game(
    Fighter.configs.GAME_WIDTH,
    Fighter.configs.GAME_HEIGHT,
    Phaser.AUTO,'',
    {
      preload: preload,
      create: create,
      update: update,
      render: render
    }, false, false
  );
}

// preparations before game starts
var preload = function(){
  Fighter.game.scale.minWidth = Fighter.configs.GAME_WIDTH/2;
  Fighter.game.scale.minHeight = Fighter.configs.GAME_HEIGHT/2;
  Fighter.game.scale.maxWidth = Fighter.configs.GAME_WIDTH;
  Fighter.game.scale.maxHeight = Fighter.configs.GAME_HEIGHT;
  Fighter.game.scale.pageAlignHorizontally = true;
  Fighter.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

  Fighter.game.time.advancedTiming = true;

  Fighter.game.load.atlasJSONHash('assets', 'Assets/assets.png', 'Assets/assets.json');
  Fighter.game.load.image('background', 'Assets/Background.png');
}

// initialize the game
var create = function(){
  Fighter.game.physics.startSystem(Phaser.Physics.ARCADE);
  Fighter.keyboard = Fighter.game.input.keyboard;

  //Fighter.background = Fighter.game.add.sprite(0, 0, 'background');
  Fighter.game.stage.backgroundColor = '#808080';

  Fighter.countTime = 0;
  Fighter.timeScore = Fighter.game.add.text(
        90, 18, Fighter.countTime,
        { font: '34px Arial', fill: 'black', wordWrap: true, wordWrapWidth: 50 }
    );
    updateTimeText();
  Fighter.timer = Fighter.game.time.events;
  Fighter.timer.loop(Phaser.Timer.SECOND, updateCounter, this);

  Fighter.playerGroup = Fighter.game.add.physicsGroup();
  Fighter.players = [];
  Fighter.players.push(
    new ShipType1Controller(
      Fighter.configs.PLAYER1_STARTX,
      Fighter.configs.PLAYER1_STARTY,
      '-Player',
      {
        up : Phaser.Keyboard.UP,
        down : Phaser.Keyboard.DOWN,
        left : Phaser.Keyboard.LEFT,
        right : Phaser.Keyboard.RIGHT,
      }
    )
  );
}

var updateTimeText = function() {
  let pad2 = (number) => (number < 10 ? '0' : '') + number;
  Fighter.timeScore.setText(Math.floor(Fighter.countTime / 60) + ":" + pad2(Fighter.countTime % 60));
}

var updateCounter = function() {
  Fighter.countTime++;
  updateTimeText();
}

var update = function() {}

var render = function() {
}
