var buttonNext;
var stage2OpeningState = {
  create: function() {
    Fighter.game.stage.backgroundColor = '000000';
    setTimeout(function(){
      Fighter.game.add.text(400,300, 'Chapter 2: The Chasers',{font: "bold 30px Arial", fill: "#ffffff", boundsAlignH: "center", boundsAlignV: "middle"});
    }, 1000);
    setTimeout(function(){
      Fighter.game.add.text(400,350, 'You realize that they start to notice you…',{font: "bold 30px Arial", fill: "#ffffff", boundsAlignH: "center", boundsAlignV: "middle"});
    }, 3000);
    setTimeout(function(){
      Fighter.game.add.text(400,400, 'Maybe they realized you are not one of them…',{font: "bold 30px Arial", fill: "#ffffff", boundsAlignH: "center", boundsAlignV: "middle"});
    }, 5000);
    setTimeout(function(){
      Fighter.game.add.text(400,450, 'They start chasing you…',{font: "bold 30px Arial", fill: "#ffffff", boundsAlignH: "center", boundsAlignV: "middle"});
    }, 7000);
    setTimeout(function(){
      Fighter.game.add.text(400,500, 'What would you do…',{font: "bold 30px Arial", fill: "#ffffff", boundsAlignH: "center", boundsAlignV: "middle"});
    }, 9000);
    setTimeout(function(){
      Fighter.game.add.text(400,550, 'Fight…',{font: "bold 30px Arial", fill: "#ffffff", boundsAlignH: "center", boundsAlignV: "middle"});
    }, 11000);
    setTimeout(function(){
      Fighter.game.add.text(400,600, 'Or Flight…',{font: "bold 30px Arial", fill: "#ffffff", boundsAlignH: "center", boundsAlignV: "middle"});
    }, 13000);
    setTimeout(function(){
      buttonNext = Fighter.game.add.button(1300, 800, 'next',stage2OpeningState.onNextClick, this);
      buttonNext.height = 150;
      buttonNext.width = 280;
    }, 15000);
  },
  onNextClick: function() {
    Fighter.game.state.start('play2');
  }
}
