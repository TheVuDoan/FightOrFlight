var Fighter = {};

Fighter.configs = {
  GAME_WIDTH: 1600,
  GAME_HEIGHT: 960,
  PLAYER1_STARTX: 500,
  PLAYER1_STARTY: 500,
  SHIELD_DELAY: 15,
  MEGA_DELAY: 25,
  BOSS_X: 1000,
  BOSS_Y: 500
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
  Fighter.game.state.add('play2', play2State);
  Fighter.game.state.add('play3', play2State);
  Fighter.game.state.add('opening', openingState);
  Fighter.game.state.add('stage1Opening', stage1OpeningState);
  Fighter.game.state.add('stage2Opening', stage2OpeningState);
  Fighter.game.state.add('stage3Opening', stage3OpeningState);
  // Fighter.game.state.add('win', winState);

  Fighter.game.state.start('boot');

}
