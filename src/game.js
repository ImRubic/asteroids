// index.js

import Asteroid from './asteroid';
import Ship from './ship';
import Lazer from './lazer';

/** @class Game
  * Represents a snake game
  */
  export default class Game {
    constructor() {
      //TODO: Create Aestroids/Ships
      this.ship = new Ship(150, 180);
      this.asteroid = [];
      this.aCount = 0;
      this.lazer = [];
      this.start = false;
      this.over = false;
      this.level = 1;
      this.life = 3;
      this.score = 0;
      this.cooldown = 0;
      this.input = {
        direction: 'neutral',
        angle: 'neutral',
        start: false,
      };
      this.audio1 = new Audio("laser.wav");
      this.audio2 = new Audio("rock.wav");
      this.audio3 = new Audio("explosion.wav");
    //Create the back buffer canvas
    this.backBufferCanvas = document.createElement('canvas');
    this.backBufferCanvas.width = 300;
    this.backBufferCanvas.height = 330;
    this.backBufferContext =  this.backBufferCanvas.getContext('2d');

    // Create the screen buffer canvas
    this.screenBufferCanvas =  document.createElement('canvas');
    this.screenBufferCanvas.width = 300;
    this.screenBufferCanvas.height = 330;
    document.body.appendChild(this.screenBufferCanvas);
    this.screenBufferContext = this.screenBufferCanvas.getContext('2d');

    //Create HTML UI Elements
    //TODO: Messages/Level/Life Tracker
    var message = document.createElement('div');
    message.id = "message";
    message.textContent = "";
    document.body.appendChild(message);
    var message2 = document.createElement('div');
    message2.id = "message2";
    message2.textContent = "Level: " + this.level + "       Score: " + this.score + "       Lives: " + this.life;
    document.body.appendChild(message2);

    // Bind class functions
    this.createAsteroid = this.createAsteroid.bind(this);
    this.createAsteroid2 = this.createAsteroid2.bind(this);
    this.lostLife = this.lostLife.bind(this);
    this.newLevel = this.newLevel.bind(this);
    this.gameOver = this.gameOver.bind(this);
    this.control = this.control.bind(this);
    this.hit = this.hit.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.update = this.update.bind(this);
    this.render = this.render.bind(this);
    this.loop = this.loop.bind(this);

    // Set up event handlers
    window.onkeydown = this.handleKeyDown;
    window.onkeyup =  this.handleKeyUp;
    // Start the game loop
    this.interval = setInterval(this.loop, 25);
    this.createAsteroid(10);
  }

  /** @method createAsteroid
    * Creates Asteroids
    */
  createAsteroid(amount) {
    for(var i=0; i<amount; i++) {
      var rand = Math.floor(Math.random()*10);
      var size = 0;
      if(rand < 3) size = 1;
      else if(rand < 7) size = 2;
      else size = 3;

      this.asteroid.push(new Asteroid(size));
      this.aCount++;
    }

    this.asteroid.forEach((asteroid) => {
      this.asteroid.forEach((asteroid2) => {
        if(asteroid !== asteroid2) {
          while((asteroid.body.x < (asteroid2.body.x + asteroid2.body.size) &&
                 asteroid.body.x + asteroid.body.size > asteroid2.body.x &&
                 asteroid.body.y < asteroid2.body.y + asteroid2.body.size &&
                 asteroid.body.y + asteroid.body.size > asteroid2.body.y) ||
                (asteroid.body.x > 125 && asteroid.body.x < 175) || (asteroid.body.y > 155 && asteroid.body.y < 205))
                {
                  asteroid.body.x = Math.floor(Math.random()*320);
                  asteroid.body.y = Math.floor(Math.random()*290);
                }
        }
      });
    });
  }

  /** @method createAsteroid2
    * Creates Asteroids
    */
  createAsteroid2(body) {
      var size = body.mass-1;
      var x = body.x;
      var y = body.y
      var velx = body.velocityX;
      var vely = body.velocityY;

      var a1 = new Asteroid(size);
      var a2 = new Asteroid(size);
      this.asteroid.push(a1);
      this.asteroid.push(a2);
      this.aCount+= 2;

      a1.body.x = x;
      a1.body.y = y;
      a2.body.x = x+body.width;
      a2.body.y = y+body.width;
      a1.body.velocityX = Math.floor(velx + velx/5);
      a1.body.velocityY = Math.floor(vely + vely/5);
      a2.body.velocityX = Math.floor(velx - velx/5);
      a1.body.velocityY = Math.floor(vely - vely/5);


  }

  /** @method lostLife
    * Removes a life
    */
  lostLife() {

    this.life--;
    if(this.life === 0) {
      this.gameOver();
      return;
    }
    this.ship = new Ship(150, 180);

    this.asteroid.forEach((asteroid) => {
      while((asteroid.body.x > 125 && asteroid.body.x < 175) || (asteroid.body.y > 155 && asteroid.body.y < 205))
            {
              asteroid.body.x = Math.floor(Math.random()*320);
              asteroid.body.y = Math.floor(Math.random()*290);
            }
    });

    //Message TODO: Adjust Message if needed.
    //var message = document.getElementById("message");
    //message.innerText = "";

  }

  /** @method newLevel
    * Starts a new level
    */
  newLevel() {
    this.level++;
    this.ship = new Ship(150, 180);
    this.asteroid = [];
    this.createAsteroid(10+(2*this.level)-2);
    this.aCount = 10+(2*this.level)-2;
  }

  /** @method gameOver
    * Displays a game over message
    */
  gameOver() {
    //End Game Message TODO: End Game Message
    var message = document.getElementById("message");
    message.textContent = "Game Over!";
    message.style.color = 'white';

    this.over = true;
  }

  hit() {
    //TODO: Call get position on everything.
    var shipP = this.ship.getPosition();

    this.asteroid.forEach((asteroid) => {
      if (shipP.x-3 <= asteroid.body.x + asteroid.body.width && shipP.x + 3 >= asteroid.body.x &&
          shipP.y-3 <= asteroid.body.y + asteroid.body.height && shipP.y + 3 >= asteroid.body.y)
          {
            this.lostLife();
            this.audio3.play();
          }
    });

    this.lazer.forEach((lazer) => {
      this.asteroid.forEach((asteroid) => {
          if (lazer.body.x <= asteroid.body.x + asteroid.body.width && lazer.body.x + 2 >= asteroid.body.x &&
              lazer.body.y <= asteroid.body.y + asteroid.body.height && lazer.body.y + 2 >= asteroid.body.y) {
            this.score += asteroid.body.width*100;
            lazer.destroy();
            this.lazer.splice(this.lazer.indexOf(lazer), 1);
            if(asteroid.body.mass > 1) this.createAsteroid2(asteroid.body);
            asteroid.destroy();
            this.asteroid.splice(this.asteroid.indexOf(asteroid), 1);
            this.aCount--;
            if(this.aCount === 0) this.newLevel();
          }
      });
    });

    for(var i = 0; i < this.asteroid.length-1; i++) {
      for(var j = i+1; j < this.asteroid.length; j++) {
        var a1 = this.asteroid[i].body;
        var a2 = this.asteroid[j].body;
        if(a1 !== a2) {
          if(a1.x <= a2.x + a2.width && a1.x + a1.width >= a2.x && a1.y <= a2.y + a2.height && a1.y + a1.height >= a2.y) {
            var m1 = a1.mass;
            var m2 = a2.mass;
            var vx1 = a1.velocityX;
            var vx2 = a2.velocityX;
            var vy1 = a1.velocityY;
            var vy2 = a2.velocityY;

            a1.velocityX = (((m1-m2)/(m1+m2))*vx1) + (((2*m2)/(m1+m2))*vx2);
            a1.velocityY = (((m1-m2)/(m1+m2))*vy1) + (((2*m2)/(m1+m2))*vy2);
            a2.velocityX = (((2*m1)/(m1+m2))*vx1) + (((m2-m1)/(m1+m2))*vx2);
            a2.velocityY = (((2*m1)/(m1+m2))*vy1) + (((m2-m1)/(m1+m2))*vy2);

            this.audio2.play();
         }
       }
    }
}
}
  /** @method control
    * Changes direction for movmeent
    */
  control() {
    //TODO: Define position
    var position = this.ship.getPosition();

    this.lazer.forEach((lazer) => {
      var location = lazer.getPosition();
      if(location.x <= 0 || location.x >= 299 || location.y <= 30 || location.y >= 329) {
        lazer.destroy();
        this.lazer.splice(this.lazer.indexOf(lazer), 1);
      }
    });

    this.asteroid.forEach((asteroid) => {
      if(asteroid.body.x <= 0) {
        asteroid.body.x = 299;
      } else if (asteroid.body.x >= 299) {
        asteroid.body.x = 0;
      } else if (asteroid.body.y <= 30) {
        asteroid.body.y = 329;
      } else if (asteroid.body.y >= 329) {
        asteroid.body.y = 30;
      }
    });

    if(position.x <= 0) {
      position.x = 299;
    } else if (position.x >= 299) {
      position.x = 0;
    } else if (position.y <= 30) {
      position.y = 329;
    } else if (position.y >= 329) {
      position.y = 30;
    }


  }


  /**@method handleKeyDown
    * Register when a key is pressed and changed out input object.
    */
    handleKeyDown(event) {
      event.preventDefault();
      switch(event.key){
        case 'a':
        case 'ArrowLeft':
          this.input.angle = 'left';
          break;
        case 'd':
        case 'ArrowRight':
          this.input.angle = 'right';
          break;
        case 'z':
          if(this.cooldown === 0) {
            var shipP = this.ship.getPosition();
            var shipA = this.ship.getAngle();
            this.lazer.push(new Lazer(shipP.x, shipP.y, shipA));
            this.audio1.play();
            this.cooldown = 10;
          }
          break;
        case ' ':
          this.input.direction = ' ';
          break;
      }
    }

    /**@method handleKeyUp
      * Register when a key is pressed and changed out input object.
      */
      handleKeyUp(event) {
        //TODO: Only set to neutral if the keyup is the same direction.
        event.preventDefault();
        switch(event.key){
          case 'a':
          case 'ArrowLeft':
            if (this.input.angle === 'left') this.input.angle = 'neutral';
            break;
          case 'd':
          case 'ArrowRight':
            if (this.input.angle === 'right') this.input.angle = 'neutral';
            break;
          case ' ':
            this.input.direction = 'neutral';
            break;
        }
      }

    /**@method update
      * Updates the game world
      */
      update() {
        if(!this.over) {

            this.control();
            this.hit();
          var message2 = document.getElementById("message2");
          message2.innerText = "Level: " + this.level + "       Score: " + this.score + "       Lives: " + this.life;
          message2.style.color = 'white';
            //TODO: Update Message if needed. (May call a Message method.)
            //var message2 = document.getElementById("message2");
            //message2.innerText = "Score: " + this.score;

          //TODO: Update functions of everything
          this.ship.update(this.input.direction, this.input.angle);
          this.lazer.forEach((lazer) => {
            lazer.update();
          });
          this.asteroid.forEach((asteroid) => {
            asteroid.update();
          });
        }
      }

      /**@method render
        * Renders the game world
        */
        render() {
          this.backBufferContext.fillStyle = 'black';
          this.backBufferContext.fillRect(0,0,300,330);

          //TODO: Call render functions.
          this.asteroid.forEach((asteroid) => {
            asteroid.render(this.backBufferContext);
          });
          this.ship.render(this.backBufferContext);
          this.lazer.forEach((lazer) => {
            lazer.render(this.backBufferContext);
          });

          this.backBufferContext.save();
          this.backBufferContext.fillStyle = 'white';
          this.backBufferContext.fillRect(0, 27, 300, 3);
          this.backBufferContext.restore();

          this.screenBufferContext.drawImage(this.backBufferCanvas,0,0);
        }

      /**@method loop
        * Loops
        */
        loop() {
          this.update();
          this.render();
          if(this.cooldown > 0) this.cooldown--;
        }
      }
