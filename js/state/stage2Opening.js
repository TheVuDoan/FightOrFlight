var buttonNext,buttonSkip;
var stage2OpeningState = {
  create: function() {
    Fighter.game.stage.backgroundColor = '000000';
    buttonSkip = Fighter.game.add.button(20, 800, 'skip',stage2OpeningState.onSkipClick, this);
    buttonSkip.height = 150;
    buttonSkip.width = 150;
    buttonNext = Fighter.game.add.button(1500, 800, 'next',stage2OpeningState.onNextClick, this);
    buttonNext.height = 150;
    buttonNext.width = 150;
  },
  onNextClick: function() {
    buttonSkip.pendingDestroy = true;
    buttonNext.pendingDestroy = true;
    setTimeout(function(){
      Fighter.game.add.text(400,200, 'Chapter 2: The Chasers',{font: "bold 30px Courier", fill: "#ffffff", boundsAlignH: "center", boundsAlignV: "middle"});
    }, 1000);
    setTimeout(function(){
      Fighter.game.add.text(400,350, 'You realize that they start to notice you…',{font: "bold 30px Courier", fill: "#ffffff", boundsAlignH: "center", boundsAlignV: "middle"});
    }, 3000);
    setTimeout(function(){
      Fighter.game.add.text(400,400, 'Maybe they realized you are not one of them…',{font: "bold 30px Courier", fill: "#ffffff", boundsAlignH: "center", boundsAlignV: "middle"});
    }, 5000);
    setTimeout(function(){
      Fighter.game.add.text(400,450, 'They start chasing you…',{font: "bold 30px Courier", fill: "#ffffff", boundsAlignH: "center", boundsAlignV: "middle"});
    }, 7000);
    setTimeout(function(){
      Fighter.game.add.text(400,500, 'What would you do…',{font: "bold 30px Courier", fill: "#ffffff", boundsAlignH: "center", boundsAlignV: "middle"});
    }, 9000);
    setTimeout(function(){
      Fighter.game.add.text(400,550, 'Fight…',{font: "bold 30px Courier", fill: "#ffffff", boundsAlignH: "center", boundsAlignV: "middle"});
    }, 11000);
    setTimeout(function(){
      Fighter.game.add.text(400,600, 'Or Flight…',{font: "bold 30px Courier", fill: "#ffffff", boundsAlignH: "center", boundsAlignV: "middle"});
    }, 13000);
    setTimeout(function(){
      Fighter.game.state.start('play2');
    }, 14000);
  },
  onSkipClick: function() {
    Fighter.game.state.start('play2');
  }
}
