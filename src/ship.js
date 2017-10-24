export default class Ship {
  constructor(x, y) {
    this.body = {x: x, y: y};
    this.width = 6;
    this.height = 6;
    this.velocityX = 0;
    this.velocityY = 0;
    this.speed = 0.05;
    this.start = false;
    this.angle = 0;
    //bind class methods
    this.update =  this.update.bind(this);
    this.render = this.render.bind(this);
    this.getPosition = this.getPosition.bind(this);
    this.getAngle = this.getAngle.bind(this);
  }
  getPosition() {
    return this.body;
  }
  getAngle() {
    return this.angle;
  }
  update(input, input2) {
    switch(input) {
      case ' ':
        this.velocityX += Math.sin(this.angle) * this.speed;
        this.velocityY -= Math.cos(this.angle) * this.speed;
        break;
    }
    switch(input2){
      case 'left':
        this.angle-=10*Math.PI/180;
        break;
      case 'right':
        this.angle+=10*Math.PI/180
        break;
    }
    this.body.x += this.velocityX;
    this.body.y += this.velocityY;
  }
  render(ctx) {
  ctx.save();
  ctx.strokeStyle = "white";
  ctx.beginPath();
  ctx.translate(this.body.x, this.body.y)
  ctx.rotate(this.angle);
  ctx.moveTo(0, -3);
  ctx.lineTo(3, 3);
  ctx.lineTo(-3, 3);
  ctx.closePath();
  ctx.stroke();
  ctx.restore();
}
}
