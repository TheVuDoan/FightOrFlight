var howtoplayState = {
  create: function() {
    Fighter.game.stage.backgroundColor = '808080';
    buttonBack = Fighter.game.add.button(20, 800, 'back',howtoplayState.onBackClick, this);
    buttonBack.height = 150;
    buttonBack.width = 150;
    Fighter.game.add.text(600,30, 'HOW TO PLAY',{font: "bold 60px Arial", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle"});
    Fighter.game.add.sprite(50,150,'shieldGift');
    Fighter.game.add.text(110,160, 'Create Shield',{font: "bold 30px Arial", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle"});
    Fighter.game.add.sprite(50,250,'star');
    Fighter.game.add.text(110,260, 'Bonus Score',{font: "bold 30px Arial", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle"});
    Fighter.game.add.sprite(50,350,'blast');
    Fighter.game.add.text(110,360, 'Destroy Enemy nearby',{font: "bold 30px Arial", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle"});
    Fighter.game.add.sprite(50,450,'killGift');
    Fighter.game.add.text(110,460, 'Destroy All Enemy',{font: "bold 30px Arial", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle"});
    Fighter.game.add.sprite(50,550,'transGift');
    Fighter.game.add.text(110,560, 'Invisible',{font: "bold 30px Arial", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle"});
    Fighter.game.add.sprite(50,650,'dublicate');
    Fighter.game.add.text(110,660, 'Create a clone',{font: "bold 30px Arial", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle"});

    var mouse = Fighter.game.add.sprite(800,130,'Mouse');
    mouse.height = 100;
    mouse.width = 100;
    Fighter.game.add.text(910,160, 'Move with Mouse, avoid the Enemy',{font: "bold 30px Arial", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle"});
    var space = Fighter.game.add.sprite(800,250,'Space');
    space.height = 100;
    space.width = 100;
    Fighter.game.add.text(910,280, 'Pause game',{font: "bold 30px Arial", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle"});

    Fighter.game.add.sprite(830,370,'Player');
    Fighter.game.add.text(910,370, 'Player',{font: "bold 30px Arial", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle"});
    Fighter.game.add.sprite(830,450,'Enemy1');
    Fighter.game.add.text(910,450, 'Enemy',{font: "bold 30px Arial", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle"});
    Fighter.game.add.sprite(830,530,'Enemy2');
    Fighter.game.add.text(910,530, 'Following Enemy',{font: "bold 30px Arial", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle"});
    Fighter.game.add.sprite(830,600,'Boss');
    Fighter.game.add.text(910,600, 'Boss',{font: "bold 30px Arial", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle"});
  },
  onBackClick: function() {
    Fighter.game.state.start('menu');
  }
}
