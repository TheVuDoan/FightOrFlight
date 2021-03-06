var menuState = {
  create:function () {
    var background = Fighter.game.stage.backgroundColor = 'E16036';
    // var background = Fighter.game.add.image(Fighter.game.width, Fighter.game.height, 'menuBackground');

    background.anchor = new Phaser.Point(0.5, 0.5);
    background.width  = Fighter.game.width;
    background.height = Fighter.game.height;
    //var nameLabel = Fighter.game.add.text(300,100, 'Fight OR Flight',{font:'130px Verdana', fill:"#000000"});
    var gameName = Fighter.game.add.sprite(300,50,'name');
    gameName.height = 300;
    gameName.width = 1000;
    var buttonPlay = Fighter.game.add.button(600, 400, 'play',menuState.onPlayClick, this );
    var buttonHowToPlay = Fighter.game.add.button(600, 580, 'howToPlay',menuState.onHowToPlayClick, this );
    var buttonCredit = Fighter.game.add.button(600, 750, 'credit',menuState.onCreditClick, this );

    buttonPlay.height = 150;
    buttonPlay.width = 350;
    buttonHowToPlay.height = 150;
    buttonHowToPlay.width = 350;
    buttonCredit.height = 170;
    buttonCredit.width = 370;
  },
  onPlayClick: function() {
      Fighter.game.state.start('stage1Opening');
  },
  onHowToPlayClick: function() {
      //console.log("onHowToPlayClick");
      Fighter.game.state.start('howtoplay');
  },
  onCreditClick: function() {
      //console.log("onCreditClick");
      Fighter.game.state.start('credit');
  },
}
