// Enemies our player must avoid
var Enemy = function(x, y, speed) {
  this.x = x;
  this.y = y + 61; //center in row
  this.speed = speed;
  this.sprite = "images/enemy-bug.png";
  this.move = 101;
};

//badguy is Enemy
const badguy1 = new Enemy(-101, 0, 500);
const badguy2 = new Enemy(-101, 85, 500);
const badguy3 = new Enemy(-101, 170, 450);
const badguy4 = new Enemy(-303, 170, 500);
const badguy5 = new Enemy(-303, 0, 450);
const badguy6 = new Enemy(-303, 85, 400);
const allEnemies = [];
allEnemies.push(badguy1, badguy2, badguy3, badguy4, badguy5, badguy6);

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
  if (this.x < this.move * 5) {
    this.x += this.speed * dt;
  } else {
    //enemy back to start of screen
    this.x = -101;
  }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

class Runner {
  constructor() {
    this.climb = 85;
    this.move = 101;
    this.xStart = this.move - 101;
    this.yStart = this.climb * 4 + 61;
    this.x = this.xStart;
    this.y = this.yStart;
    this.sprite = "images/char-princess-girl.png";
  }

  //screen draw runner
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

  //check for impact!
update() {
  for (let enemy of allEnemies) {
    if (
      this.y === enemy.y &&
      (enemy.x + enemy.move/1.8 > this.x && enemy.x < this.x + this.move/1.8)
    ) {
      alert('smash');
    }
  }
}

  //input keys dictate position of player
  handleInput(input) {
    switch (input) {
      case "up":
        if (this.y > 0) {
          this.y -= this.climb;
        }
        break;
      case "down":
        if (this.y < this.climb * 4) {
          this.y += this.climb;
        }
        break;
      case "left":
        if (this.x > 0) {
          this.x -= this.move;
        }
        break;
      case "right":
        if (this.x < this.move * 4) {
          this.x += this.move;
        }
        break;
    }
  }
}

//player is Runner
const player = new Runner();

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener("keyup", function(e) {
  var allowedKeys = {
    37: "left",
    38: "up",
    39: "right",
    40: "down"
  };

  player.handleInput(allowedKeys[e.keyCode]);
});
