export default class Lazer {
  constructor(x, y, angle) {
    this.body = {x: x, y: y};
    this.width = 2;
    this.height = 2;
    this.speed = 3;
    this.velocityX = Math.sin(angle) * this.speed;
    this.velocityY = (Math.cos(angle) * this.speed)*-1;
    //bind class methods
    this.update =  this.update.bind(this);
    this.render = this.render.bind(this);
    this.destroy = this.destroy.bind(this);
    this.getPosition = this.getPosition.bind(this);
  }
  destroy() {
    this.body = {};
    this.speed = 0;
    this.velocityX = 0;
    this.velocityY = 0;
    this.width = 0;
    this.height = 0;
  }
  getPosition() {
    return this.body;
  }
  update() {
    this.body.x += this.velocityX;
    this.body.y += this.velocityY;
  }
  render(ctx) {
      ctx.save();
      ctx.fillStyle = 'white';
      ctx.fillRect(this.body.x, this.body.y, this.width, this.height);
      ctx.restore();
  }
}
