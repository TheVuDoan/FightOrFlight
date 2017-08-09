var playState = {
  create: function() {
    //Fighter.background = Fighter.game.add.sprite(0, 0, 'background');
      Fighter.game.stage.backgroundColor = '#808080';

      Fighter.countTime = 0;
      Fighter.timeScore = Fighter.game.add.text(
          90, 18, Fighter.countTime,
          { font: '34px Arial', fill: 'black', wordWrap: true, wordWrapWidth: 50 }
      );

      var updateTimeText = function() {
        let pad2 = (number) => (number < 10 ? '0' : '') + number;
        Fighter.timeScore.setText(Math.floor(Fighter.countTime / 60) + ":" + pad2(Fighter.countTime % 60));
      }

      var updateCounter = function() {
        Fighter.countTime++;
        updateTimeText();
      }

      updateTimeText();
      Fighter.timer = Fighter.game.time.events;
      Fighter.timer.loop(Phaser.Timer.SECOND, updateCounter, this);

    }
}
