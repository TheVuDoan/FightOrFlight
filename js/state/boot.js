var bootState = {
  create: function () {
    Fighter.game.scale.minWidth = Fighter.configs.GAME_WIDTH/2;
    Fighter.game.scale.minHeight = Fighter.configs.GAME_HEIGHT/2;
    Fighter.game.scale.maxWidth = Fighter.configs.GAME_WIDTH;
    Fighter.game.scale.maxHeight = Fighter.configs.GAME_HEIGHT;
    Fighter.game.scale.pageAlignHorizontally = true;
    Fighter.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

    Fighter.game.time.advancedTiming = true;

    Fighter.game.physics.startSystem(Phaser.Physics.ARCADE);
    Fighter.keyboard = Fighter.game.input.keyboard;

    Fighter.game.state.start('load');
  }
}
