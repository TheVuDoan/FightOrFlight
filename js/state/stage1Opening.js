var buttonNext,buttonSkip, flag1 = 0;
var stage1OpeningState = {
  create: function() {
    Fighter.game.stage.backgroundColor = '000000';
    buttonSkip = Fighter.game.add.button(1400, 800, 'skip',stage1OpeningState.onSkipClick, this);
    buttonSkip.height = 100;
    buttonSkip.width = 100;

    setTimeout(function(){
      if(flag1 === 0) {
        Fighter.game.add.text(400,200, 'Chapter 1: The Wanderers',{font: "bold 33px Courier", fill: "#ffffff", boundsAlignH: "center", boundsAlignV: "middle"});
      }

    }, 1000);
    setTimeout(function(){
      if(flag1 === 0) {
        Fighter.game.add.text(400,350, 'You see some strange-looking objects moving towards you…',{font: "bold 33px Courier", fill: "#ffffff", boundsAlignH: "center", boundsAlignV: "middle"});
      }

    }, 3000);
    setTimeout(function(){
      if(flag1 === 0) {
        Fighter.game.add.text(400,400, 'What are they…',{font: "bold 33px Courier", fill: "#ffffff", boundsAlignH: "center", boundsAlignV: "middle"});
      }

    }, 5000);
    setTimeout(function(){
      if(flag1 === 0) {
        Fighter.game.add.text(400,450, 'You realize they are not after you, they are just moving…',{font: "bold 33px Courier", fill: "#ffffff", boundsAlignH: "center", boundsAlignV: "middle"});
      }
    }, 7000);

    setTimeout(function(){
      if(flag1 === 0) {
        Fighter.game.add.text(400,500, 'Something tells you not to touch them…',{font: "bold 33px Courier", fill: "#ffffff", boundsAlignH: "center", boundsAlignV: "middle"});
      }

    }, 9000);
    setTimeout(function(){
      if(flag1 === 0) {
        Fighter.game.add.text(400,550, 'Or bad things will happen…',{font: "bold 33px Courier", fill: "#ffffff", boundsAlignH: "center", boundsAlignV: "middle"});
      }
    }, 11000);
    setTimeout(function(){
      if(flag1 === 0) {
        Fighter.game.state.start('play');
      }
    }, 12000);
  },

  onSkipClick: function() {
    flag1 = 1;
    Fighter.game.state.start('play');
  }
}
