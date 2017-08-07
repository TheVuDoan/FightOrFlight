var Fighter = {};
Fighter.configs = {
  GAME_WIDTH: 640,
  GAME_HEIGHT: 960,
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

  //Fighter.game.load.atlasJSONHash('assets', 'Assets/assets.png', 'Assets/assets.json');
  //Fighter.game.load.image('background', 'Assets/Map1.png');
}

// initialize the game
var create = function(){
  Fighter.game.physics.startSystem(Phaser.Physics.ARCADE);
  Fighter.keyboard = Fighter.game.input.keyboard;

  //Fighter.background = Fighter.game.add.sprite(0, -960, 'background');
}

var update = function() {}

var render = function() {}
