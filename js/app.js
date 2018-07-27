//init

// Enemies our player must avoid
var Enemy = function() {
  // Variables applied to each of our instances go here,
  // we've provided one for you to get started

  // The image/sprite for our enemies, this uses
  // a helper we've provided to easily load images
  this.sprite = "images/enemy-bug.png";
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
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
    this.climb = 83;
    this.move = 101;
    this.xStart = this.move - 101;
    this.yStart = this.climb * 5 - 10;
    this.x = this.xStart;
    this.y = this.yStart;
    this.sprite = "images/char-princess-girl.png";
  }
  //screen draw runner
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
  //input keys dictate position of player

  handleInput(input) {
    switch (input) {
      case "up":
        if (this.y > this.climb) {
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
