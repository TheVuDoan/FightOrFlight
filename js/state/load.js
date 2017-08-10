var loadState = {
  preload: function() {

    Fighter.game.load.atlasJSONHash('assets', 'Assets/assets.png', 'Assets/assets.json');
    Fighter.game.load.image('menuBackground', 'Assets/background.png');
    Fighter.game.load.image('play', 'Assets/play.png');
    Fighter.game.load.image('howToPlay', 'Assets/howtoplay.png');
    Fighter.game.load.image('credit', 'Assets/credit.png');


    // Load animation explosion, khien 
    Fighter.game.load.spritesheet('explosion', 'Assets/bomb.png', 128, 128);
    Fighter.game.load.image('shield','Assets/Original Sprites/Shield.png');
    Fighter.game.load.image('Player','../../Assets/Original Sprites/player.png');
    Fighter.game.load.image('playerBound','../../Assets/Original Sprites/playerBound.png');
    Fighter.game.load.image('Enemy','../../Assets/Original Sprites/enemy.png');
  },

  create: function() {
    Fighter.game.state.start('menu');
  }
}
