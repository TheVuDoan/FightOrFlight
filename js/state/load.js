var loadState = {
  preload: function() {

    Fighter.game.load.atlasJSONHash('assets', 'Assets/assets.png', 'Assets/assets.json');
    Fighter.game.load.image('menuBackground', 'Assets/background.png');
    Fighter.game.load.image('play', 'Assets/play.png');
    Fighter.game.load.image('howToPlay', 'Assets/howtoplay.png');
    Fighter.game.load.image('credit', 'Assets/credit.png');


    // Load animation explosion, khien
    Fighter.game.load.spritesheet('explosion', 'Assets/bomb.png', 128, 128);
    Fighter.game.load.image('shield','Assets/Shield.png');
    Fighter.game.load.image('Player','Assets/player.png');
    Fighter.game.load.image('playerBound','Assets/playerBound.png');
    Fighter.game.load.image('Enemy1','Assets/EnemyType1.png');
    Fighter.game.load.image('Enemy2','Assets/EnemyType2.png');

    Fighter.game.load.image('levelup', 'Assets/levelup.png');
    Fighter.game.load.image('gameover', 'Assets/gameover.png');
    Fighter.game.load.image('replay', 'Assets/replay.png');

    Fighter.game.load.image('transGift','Assets/speedGift.png');
    Fighter.game.load.image('shieldGift','Assets/shieldGift.png');
    Fighter.game.load.image('killGift','Assets/killGift.png');
  },

  create: function() {
    Fighter.game.state.start('menu');
  }
}
