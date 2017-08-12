var buttonNext;
var stage1OpeningState = {
  create: function() {
    Fighter.game.stage.backgroundColor = '000000';
    setTimeout(function(){
      Fighter.game.add.text(400,300, 'Chapter 1: The Wanderers',{font: "bold 30px Arial", fill: "#ffffff", boundsAlignH: "center", boundsAlignV: "middle"});
    }, 1000);
    setTimeout(function(){
      Fighter.game.add.text(400,350, 'You see some strange-looking objects moving towards you…',{font: "bold 30px Arial", fill: "#ffffff", boundsAlignH: "center", boundsAlignV: "middle"});
    }, 3000);
    setTimeout(function(){
      Fighter.game.add.text(400,400, 'What are they…',{font: "bold 30px Arial", fill: "#ffffff", boundsAlignH: "center", boundsAlignV: "middle"});
    }, 5000);
    setTimeout(function(){
      Fighter.game.add.text(400,450, 'You realize they are not after you, they are just moving…',{font: "bold 30px Arial", fill: "#ffffff", boundsAlignH: "center", boundsAlignV: "middle"});
    }, 7000);
    setTimeout(function(){
      Fighter.game.add.text(400,500, 'Something tells you not to touch them…',{font: "bold 30px Arial", fill: "#ffffff", boundsAlignH: "center", boundsAlignV: "middle"});
    }, 9000);
    setTimeout(function(){
      Fighter.game.add.text(400,550, 'Or bad things will happen…',{font: "bold 30px Arial", fill: "#ffffff", boundsAlignH: "center", boundsAlignV: "middle"});
    }, 11000);
    setTimeout(function(){
      buttonNext = Fighter.game.add.button(1300, 800, 'next',stage1OpeningState.onNextClick, this);
      buttonNext.height = 150;
      buttonNext.width = 280;
    }, 13000);
  },
  onNextClick: function() {
    Fighter.game.state.start('play');
  }
}
