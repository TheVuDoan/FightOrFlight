var buttonNext;
var stage3OpeningState = {
  create: function() {
    Fighter.game.stage.backgroundColor = '000000';
    setTimeout(function(){
      Fighter.game.add.text(400,300, 'Chapter 3: The Boss',{font: "bold 30px Arial", fill: "#ffffff", boundsAlignH: "center", boundsAlignV: "middle"});
    }, 1000);
    setTimeout(function(){
      Fighter.game.add.text(400,350, 'They are not after you anymore…',{font: "bold 30px Arial", fill: "#ffffff", boundsAlignH: "center", boundsAlignV: "middle"});
    }, 3000);
    setTimeout(function(){
      Fighter.game.add.text(400,400, 'Soon afterwards, you know the reason…',{font: "bold 30px Arial", fill: "#ffffff", boundsAlignH: "center", boundsAlignV: "middle"});
    }, 5000);
    setTimeout(function(){
      Fighter.game.add.text(400,450, 'They are not scare of you…',{font: "bold 30px Arial", fill: "#ffffff", boundsAlignH: "center", boundsAlignV: "middle"});
    }, 7000);
    setTimeout(function(){
      Fighter.game.add.text(400,500, 'They are scare of IT…',{font: "bold 30px Arial", fill: "#ffffff", boundsAlignH: "center", boundsAlignV: "middle"});
    }, 9000);
    setTimeout(function(){
      Fighter.game.add.text(400,550, 'That THING in front of you…',{font: "bold 30px Arial", fill: "#ffffff", boundsAlignH: "center", boundsAlignV: "middle"});
    }, 11000);
    setTimeout(function(){
      buttonNext = Fighter.game.add.button(1300, 800, 'next',stage3OpeningState.onNextClick, this);
      buttonNext.height = 150;
      buttonNext.width = 280;
    }, 13000);
  },
  onNextClick: function() {
    Fighter.game.state.start('play3');
  }
}
