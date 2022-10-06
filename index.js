// Import stylesheets
import './style.css';
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 400;
canvas.height = 400;
//Store input for keyboard input keys
let keys = {
  UP: 'w',
  DOWN: 's',
  LEFT: 'a',
  RIGHT: 'd',
};
//Store each direction of movement as a boolean initially set to false
let direction = {
  moveUp: false,
  moveDown: false,
  moveLeft: false,
  moveRight: false,
};
let player = {
  //Set the player's properties
  x: 200,
  y: 200,
  velocity_x: 0,
  velocity_y: 0,
  max_speed: 3,
  width: 50,
  height: 50,
  //Define player's update method
  update: function () {
    //Horizontal movement

    //Vertical movement
    //If not moving horizontally
    //If not moving vertically

    //If no keys are pressed

    //Update player position every frame

    //screen boundaries
    if (this.x + this.width > canvas.width) {
      this.x = canvas.width - this.width;
    }
    if (this.x < 0) {
      this.x = 0;
    }
    if (this.y + this.height > canvas.height) {
      this.y = canvas.height - this.height;
    }
    if (this.y < 0) {
      this.y = 0;
    }
  },
  //Define player's draw method
  draw: function (ctx) {
    ctx.fillStyle = 'red';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  },
};
//Main game loop
function mainLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  //update

  //draw
  player.draw(ctx);
  requestAnimationFrame(mainLoop);
}
mainLoop();
//Add Event Listeners for keydown and keyup events
window.addEventListener('keydown', function (e) {
  if (e.key == keys.UP) {
    direction.moveUp = true;
  }
  if (e.key == keys.DOWN) {
    direction.moveDown = true;
  }
  if (e.key == keys.LEFT) {
    direction.moveLeft = true;
  }
  if (e.key == keys.RIGHT) {
    direction.moveRight = true;
  }
});
window.addEventListener('keyup', function (e) {
  if (e.key == keys.UP) {
    direction.moveUp = false;
  }
  if (e.key == keys.DOWN) {
    direction.moveDown = false;
  }
  if (e.key == keys.LEFT) {
    direction.moveLeft = false;
  }
  if (e.key == keys.RIGHT) {
    direction.moveRight = false;
  }
});