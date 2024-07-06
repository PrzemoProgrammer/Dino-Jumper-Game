// import Phaser from 'phaser';

// import PlayScene from './PlayScene';
// import PreloadScene from './PreloadScene';

const config = {
  type: Phaser.AUTO,
  width: 1000,
  height: 340,
  pixelArt: true,
  transparent: true,
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
    },
  },
  scale: {
    mode: Phaser.Scale.FIT,
    width: 1000,
    height: 340,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  scene: [PreloadScene, PlayScene],
};

new Phaser.Game(config);
