var buttonNext;
var openingState = {
  create: function() {
    Fighter.game.stage.backgroundColor = '000000';
    setTimeout(function(){
      Fighter.game.add.text(430,300, 'You wake up and find yourself in a strange place…',{font: "bold 30px Arial", fill: "#ffffff", boundsAlignH: "center", boundsAlignV: "middle"});
    }, 1000);
    setTimeout(function(){
      Fighter.game.add.text(430,350, 'A place you have never seen before…',{font: "bold 30px Arial", fill: "#ffffff", boundsAlignH: "center", boundsAlignV: "middle"});
    }, 3000);
    setTimeout(function(){
      Fighter.game.add.text(430,400, 'This is not even the World you know…',{font: "bold 30px Arial", fill: "#ffffff", boundsAlignH: "center", boundsAlignV: "middle"});
    }, 5000);
    setTimeout(function(){
      Fighter.game.add.text(430,450, 'What would you do?',{font: "bold 30px Arial", fill: "#ffffff", boundsAlignH: "center", boundsAlignV: "middle"});
    }, 7000);
    setTimeout(function(){
      buttonNext = Fighter.game.add.button(1300, 800, 'next',openingState.onNextClick, this);
      buttonNext.height = 150;
      buttonNext.width = 280;
    }, 9000);
  },
  onNextClick: function() {
    Fighter.game.state.start('menu');
  }
}
