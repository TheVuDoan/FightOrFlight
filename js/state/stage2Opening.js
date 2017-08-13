var buttonSkip, buttonNext, flag2 = 0;
var stage2OpeningState = {
  create: function() {
    Fighter.game.stage.backgroundColor = '000000';
    buttonSkip = Fighter.game.add.button(1400, 800, 'skip',stage2OpeningState.onSkipClick, this);
    buttonSkip.height = 100;
    buttonSkip.width = 100;

    setTimeout(function(){
      if(flag2 === 0) {
        Fighter.game.add.text(400,200, 'Chapter 2: The Chasers',{font: "bold 33px Courier", fill: "#ffffff", boundsAlignH: "center", boundsAlignV: "middle"});
      }

    }, 1000);
    setTimeout(function(){
      if(flag2 === 0) {
        Fighter.game.add.text(400,350, 'You realize that they start to notice you…',{font: "bold 33px Courier", fill: "#ffffff", boundsAlignH: "center", boundsAlignV: "middle"});
      }
    }, 3000);

    setTimeout(function(){
      if(flag2 === 0) {
        Fighter.game.add.text(400,400, 'Maybe they realized you are not one of them…',{font: "bold 33px Courier", fill: "#ffffff", boundsAlignH: "center", boundsAlignV: "middle"});

      }
    }, 5000);
    setTimeout(function(){
      if(flag2 === 0) {
      Fighter.game.add.text(400,450, 'They start chasing you…',{font: "bold 33px Courier", fill: "#ffffff", boundsAlignH: "center", boundsAlignV: "middle"});

      }
    }, 7000);
    setTimeout(function(){
      if(flag2 === 0) {
      Fighter.game.add.text(400,500, 'What would you do…',{font: "bold 33px Courier", fill: "#ffffff", boundsAlignH: "center", boundsAlignV: "middle"});

      }
    }, 9000);
    setTimeout(function(){
      if(flag2 === 0) {
      Fighter.game.add.text(400,550, 'Fight…',{font: "bold 33px Courier", fill: "#ffffff", boundsAlignH: "center", boundsAlignV: "middle"});

      }
    }, 11000);
    setTimeout(function(){
      if(flag2 === 0) {
        Fighter.game.add.text(400,600, 'Or Flight…',{font: "bold 33px Courier", fill: "#ffffff", boundsAlignH: "center", boundsAlignV: "middle"});

      }
    }, 13000);
    setTimeout(function(){
      if(flag2 === 0) {
        Fighter.game.state.start('play2');
      }
    }, 14000);

  },
  onSkipClick: function() {
    flag2 = 1;
    Fighter.game.state.start('play2');
  }
}
