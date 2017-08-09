var loadState = {
  preload: function() {

    Fighter.game.load.atlasJSONHash('assets', 'Assets/assets.png', 'Assets/assets.json');
    Fighter.game.load.image('menuBackground', 'Assets/background.png');
    Fighter.game.load.image('play', 'Assets/play.png');
    Fighter.game.load.image('howToPlay', 'Assets/howtoplay.png');
    Fighter.game.load.image('credit', 'Assets/credit.png');
  },

  create: function() {
    Fighter.game.state.start('menu');
  }
}
