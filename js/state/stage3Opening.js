var buttonNext, flag3=0 , buttonSkip;
var stage3OpeningState = {
  create: function() {
    Fighter.game.stage.backgroundColor = '000000';
    buttonSkip = Fighter.game.add.button(1400, 800, 'skip',stage3OpeningState.onSkipClick, this);
    buttonSkip.height = 100;
    buttonSkip.width = 100;

    setTimeout(function(){
      if(flag3 === 0) {
       Fighter.game.add.text(400,200, 'Chapter 3: The Boss',{font: "bold 33px Courier", fill: "#ffffff", boundsAlignH: "center", boundsAlignV: "middle"});

      }
    }, 1000);
    setTimeout(function(){
      if(flag3 === 0) {

        Fighter.game.add.text(400,350, 'They are not after you anymore…',{font: "bold 33px Courier", fill: "#ffffff", boundsAlignH: "center", boundsAlignV: "middle"});
      }
    }, 3000);
    setTimeout(function(){
      if(flag3 === 0) {
        Fighter.game.add.text(400,400, 'Soon afterwards, you know the reason…',{font: "bold 33px Courier", fill: "#ffffff", boundsAlignH: "center", boundsAlignV: "middle"});

      }
    }, 5000);
    setTimeout(function(){
      if(flag3 === 0) {
      Fighter.game.add.text(400,450, 'They are not scare of you…',{font: "bold 33px Courier", fill: "#ffffff", boundsAlignH: "center", boundsAlignV: "middle"});

      }
    }, 7000);
    setTimeout(function(){
      if(flag3 === 0) {
      Fighter.game.add.text(400,500, 'They are scare of IT…',{font: "bold 33px Courier", fill: "#ffffff", boundsAlignH: "center", boundsAlignV: "middle"});

      }
    }, 9000);
    setTimeout(function(){
      if(flag3 === 0) {
      Fighter.game.add.text(400,550, 'That THING in front of you…',{font: "bold 33px Courier", fill: "#ffffff", boundsAlignH: "center", boundsAlignV: "middle"});
      }
    }, 11000);
    setTimeout(function(){
      if(flag3 === 0) {
      Fighter.game.add.text(400,600, 'Dont move too fast or you will die...',{font: "bold 33px Courier", fill: "#ffffff", boundsAlignH: "center", boundsAlignV: "middle"});
      }
    }, 13000);
    setTimeout(function(){
      if(flag3 === 0) {
        Fighter.game.state.start('play3');      }
    }, 14000);
  },
  onSkipClick: function() {
    flag3 = 1;
    Fighter.game.state.start('play3');
  }
}
