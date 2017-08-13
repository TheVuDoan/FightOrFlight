var loadState = {
  preload: function() {

    Fighter.game.load.atlasJSONHash('assets', 'Assets/assets.png', 'Assets/assets.json');
    Fighter.game.load.image('menuBackground', 'Assets/background.png');
    Fighter.game.load.image('name', 'Assets/Name.png');
    Fighter.game.load.image('play', 'Assets/play.png');
    Fighter.game.load.image('howToPlay', 'Assets/howtoplay.png');
    Fighter.game.load.image('credit', 'Assets/credit.png');
    Fighter.game.load.image('skip', 'Assets/Skip.png');
    Fighter.game.load.image('next', 'Assets/Next.png');
    Fighter.game.load.image('back', 'Assets/Back.png');


    // Load animation explosion, khien
    Fighter.game.load.spritesheet('explosion', 'Assets/bomb.png', 128, 128);
    Fighter.game.load.image('shield','Assets/Shield.png');
    Fighter.game.load.image('trans','Assets/Transparent.png');
    Fighter.game.load.image('Player','Assets/player.png');
    Fighter.game.load.image('playerBound','Assets/playerBound.png');
    Fighter.game.load.image('Enemy1','Assets/EnemyType1.png');
    Fighter.game.load.image('Enemy2','Assets/EnemyType2.png');
    Fighter.game.load.image('Boss','Assets/Boss.png');
    Fighter.game.load.image('BulletBoss','Assets/BossBullet.png');
    Fighter.game.load.image('BossKiller','Assets/BossKiller.png');
    Fighter.game.load.image('missile','Assets/missile.png');

    Fighter.game.load.image('Mouse','Assets/Mouse.png');
    Fighter.game.load.image('Space','Assets/Space.png');

    Fighter.game.load.image('howtoplay2', 'Assets/howtoplay2.png');
    Fighter.game.load.image('gameover', 'Assets/gameover.png');
    Fighter.game.load.image('replay', 'Assets/replay.png');

    Fighter.game.load.image('transGift','Assets/Vanish.png');
    Fighter.game.load.image('shieldGift','Assets/shieldGift.png');
    Fighter.game.load.image('killGift','Assets/killGift.png');
    Fighter.game.load.image('star','Assets/Star.png');
    Fighter.game.load.image('dublicate','Assets/split.png');
    Fighter.game.load.image('blast','Assets/Blast.png');

    //load audio
    Fighter.game.load.audio('Explosion', ['Assets/Explosion.mp3']);
    Fighter.game.load.audio('GetItem', ['Assets/getItem.wav']);
    Fighter.game.load.audio('Gameover', ['Assets/gameover.wav']);
    Fighter.game.load.audio('Soundtrack', ['Assets/soundtrack1.mp3']);
  },

  create: function() {
    Fighter.game.state.start('opening');
  }
}
