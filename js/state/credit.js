var creditState = {
  create: function() {


    var image = Fighter.game.add.image(0, 0, 'credit2');
    image.height = 960;
    image.width = 1600;
    Fighter.game.stage.backgroundColor = '808080';
    var buttonBack = Fighter.game.add.button(20, 850, 'back',howtoplayState.onBackClick, this);
    buttonBack.width =100;
    buttonBack.height = 100;
  },
  onBackClick: function() {
    Fighter.game.state.start('menu');
  }
}
