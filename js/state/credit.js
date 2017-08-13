var creditState = {
  create: function() {
    Fighter.game.stage.backgroundColor = '808080';
    Fighter.game.add.text(500,300, 'Team: Hackasatic 4',{font: "bold 60px Arial", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle"});
    Fighter.game.add.text(500,400, 'Đoàn Thế Vũ',{font: "bold 60px Arial", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle"});
    Fighter.game.add.text(500,500, 'Vũ Công Duy',{font: "bold 60px Arial", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle"});
    Fighter.game.add.text(500,600, 'Bùi Thị Cúc',{font: "bold 60px Arial", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle"});
    Fighter.game.add.text(500,700, 'Phạm Hữu Thọ',{font: "bold 60px Arial", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle"});
    buttonBack = Fighter.game.add.button(20, 800, 'back',creditState.onBackClick, this);
    buttonBack.height = 150;
    buttonBack.width = 280;
  },
  onBackClick: function() {
    Fighter.game.state.start('menu');
  }
}
