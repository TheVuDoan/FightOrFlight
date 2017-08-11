var Fighter = {};

Fighter.configs = {
  GAME_WIDTH: 1600,
  GAME_HEIGHT: 960,
  PLAYER1_STARTX: 500,
  PLAYER1_STARTY: 500,
  SHIELD_DELAY: 15,
  MEGA_DELAY: 25
};

window.onload = function() {
  Fighter.game = new Phaser.Game(
    Fighter.configs.GAME_WIDTH,
    Fighter.configs.GAME_HEIGHT,
    Phaser.AUTO, ''
  );

  Fighter.game.state.add('boot', bootState);
  Fighter.game.state.add('load', loadState);
  Fighter.game.state.add('menu', menuState);
  Fighter.game.state.add('play', playState);
  // Fighter.game.state.add('win', winState);

  Fighter.game.state.start('boot');

}
