// import Phaser from 'phaser';

class PreloadScene extends Phaser.Scene {
  constructor() {
    super("PreloadScene");
  }

  preload() {
    this.load.audio("jump", "./src/assets/jump.m4a");
    this.load.audio("hit", "./src/assets/hit.m4a");
    this.load.audio("reach", "./src/assets/reach.m4a");

    this.load.image("ground", "./src/assets/ground.png");
    this.load.image("dino-idle", "./src/assets/dino-idle.png");
    this.load.image("dino-hurt", "./src/assets/dino-hurt.png");
    this.load.image("restart", "./src/assets/restart.png");
    this.load.image("game-over", "./src/assets/game-over.png");
    this.load.image("cloud", "./src/assets/cloud.png");

    this.load.spritesheet("star", "./src/assets/stars.png", {
      frameWidth: 9,
      frameHeight: 9,
    });

    this.load.spritesheet("moon", "./src/assets/moon.png", {
      frameWidth: 20,
      frameHeight: 40,
    });

    this.load.spritesheet("dino", "./src/assets/dino-run.png", {
      frameWidth: 88,
      frameHeight: 94,
    });

    this.load.spritesheet("dino-down", "./src/assets/dino-down.png", {
      frameWidth: 118,
      frameHeight: 94,
    });

    this.load.spritesheet("enemy-bird", "./src/assets/enemy-bird.png", {
      frameWidth: 92,
      frameHeight: 77,
    });

    this.load.image("obsticle-1", "./src/assets/cactuses_small_1.png");
    this.load.image("obsticle-2", "./src/assets/cactuses_small_2.png");
    this.load.image("obsticle-3", "./src/assets/cactuses_small_3.png");
    this.load.image("obsticle-4", "./src/assets/cactuses_big_1.png");
    this.load.image("obsticle-5", "./src/assets/cactuses_big_2.png");
    this.load.image("obsticle-6", "./src/assets/cactuses_big_3.png");
  }

  create() {
    this.scene.start("PlayScene");
  }
}

// export default PreloadScene;
