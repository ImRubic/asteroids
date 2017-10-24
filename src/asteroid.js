export default class Asteroid {
  constructor(size) {
    this.body = {
      x: Math.floor(Math.random()*290),
      y: Math.floor(Math.random()*290),
      mass: size,
      velocityX: Math.floor((Math.random()*(10+10))-10)/10,
      velocityY: Math.floor((Math.random()*(10+10))-10)/10,
      width: size*3,
      height: size*3
    };

    //Prevents an initial velocity of 0.
    while(this.body.velocityX === 0 || this.body.velocityY === 0) {
      this.body.velocityX = Math.floor((Math.random()*(10+10))-10)/10;
      this.body.velocityY = Math.floor((Math.random()*(10+10))-10)/10;
    }

    //Keeps asteroid from spawning on ship.
    while((this.body.x > 125 && this.body.x < 175) || (this.body.y > 155 && this.body.y < 205)) {
      this.body.x = Math.floor(Math.random()*290);
      this.body.y = Math.floor(Math.random()*290);
    }

    //bind class methods
    this.update =  this.update.bind(this);
    this.render = this.render.bind(this);
    this.destroy = this.destroy.bind(this);
    this.getAsteroid = this.getAsteroid.bind(this);
  }

  getAsteroid() {
    return this.body;
  }

  update() {
    this.body.x += this.body.velocityX;
    this.body.y += this.body.velocityY;
  }

  destroy() {
    this.body = {};
  }

  render(ctx) {
    ctx.save();
    ctx.fillStyle = 'white';
    ctx.fillRect(this.body.x, this.body.y, this.body.width, this.body.height);
    ctx.restore();
  }
}
