const gameBoard = document.getElementById("gameCanvas");
const mazeDif = [10, 24, 50, 100];
const gameWidth = 800;
const gameHeight = 800;
let maze = [];
const ctx = gameBoard.getContext("2d");
var e = document.getElementById("selection");
let cellIndex = 0;
let prizeX = 0;
let prizeY = 0;
let playerX = 0;
let playerY = 0;

// Initialization: Create a maze memory and mark all vertices as not visited.

function Initialization() {
  const PlayerstartingPoints = [[0, 0], [0, mazeDif[e.value] - 1], [mazeDif[e.value] - 1, 0], [mazeDif[e.value] - 1, mazeDif[e.value] - 1]];
  const PrizestartingPoints = [[mazeDif[e.value] - 1, mazeDif[e.value] - 1], [mazeDif[e.value] - 1, 0], [0, mazeDif[e.value] - 1], [0, 0]];
  let randomPoint = Math.floor(Math.random() * 4);
  prizeX = PrizestartingPoints[randomPoint][0];
  prizeY = PrizestartingPoints[randomPoint][1];
  var row = PlayerstartingPoints[randomPoint][0];
  var col = PlayerstartingPoints[randomPoint][1];
  playerX = row;
  playerY = col;

  for (i = 0; i < mazeDif[e.value]; i++) {
    maze[i] = [];
    for (j = 0; j < mazeDif[e.value]; j++) {
      maze[i][j] = [true, true, true, true, false, cellIndex];
    }
  }
  gameInitialization(playerX, playerY);
  dfs(row, col);
}

function randomDirection(row, col) {
  var dRow = [0, 0, 1, -1];
  var dCol = [1, -1, 0, 0];  // right, Left, bottom, Top
  var wallPrev = [0, 2, 1, 3]; // Walls order
  var wallNew = [2, 0, 3, 1];  // Opposite walls

  var randommax = 4;

  while (randommax > 0) {
    let randomnum = Math.floor(Math.random() * randommax);

    let newRow = row + dRow[randomnum];
    let newCol = col + dCol[randomnum];

    // Check if the new cell is valid and not visited
    if (newRow >= 0 && newCol >= 0 && newRow < mazeDif[e.value] && newCol < mazeDif[e.value] && maze[newRow][newCol][4] === false) {
      // Remove walls between the current and new cell
      maze[row][col][wallPrev[randomnum]] = false;
      maze[newRow][newCol][wallNew[randomnum]] = false;
      return { result: true, directions: { row: newRow, col: newCol } };
    } else {
      dRow.splice(randomnum, 1);
      dCol.splice(randomnum, 1);
      wallPrev.splice(randomnum, 1);
      wallNew.splice(randomnum, 1);
      randommax--;
    }
  }
  return false;
}


function dfs(row, col) {
  var stack = [];
  var result = [];
  console.log(cellIndex);

  maze[row][col][4] = true;
  result.push([row, col]);
  stack.push([row, col]);
  maze[row][col][5] = cellIndex++;

  while (stack.length != 0) {

    //mark the current cell with current cordinates
    var current = stack[stack.length - 1];
    stack.pop();
    row = current[0];
    col = current[1];

    let newDirection = randomDirection(row, col);

    if (newDirection === false) {
      // console.log("backtrack");

      while (newDirection === false) {
        if (result.length < 2) {
          // If there are no more cells to backtrack to, break out of the loop
          break;
        }
        var last = result[result.length - 2];
        result.pop();

        var row = last[0];
        var col = last[1];

        newDirection = randomDirection(row, col);
        // console.log("backtrack loop ideration " + row + ", " + col);

        if (newDirection) {
          // console.log("backtrack success " + row + ", " + col);
          break;
        }
      }
    }
    // if new cell can be visited, push it to the stack and result and mark it visited
    if (newDirection) {
      row = newDirection.directions.row;
      col = newDirection.directions.col;
      console.log(cellIndex);

      maze[row][col][4] = true;
      result.push([row, col]);
      stack.push([row, col]);
      maze[row][col][5] = cellIndex++;
    }
  }
  drawLabyrinth()

}

// draw the labyrint

function drawLabyrinth() {
  const cellWidth = gameWidth / mazeDif[e.value];
  const cellHeight = gameHeight / mazeDif[e.value];

  ctx.clearRect(0, 0, gameBoard.gameWidth, gameBoard.gameHeight);
  ctx.strokeStyle = 'whitesmoke';
  ctx.lineWidth = 2;

  //iderate through all the cells edges
  for (let i = 0; i < mazeDif[e.value]; i++) {
    for (let j = 0; j < mazeDif[e.value]; j++) {
      let x = j * cellWidth;
      let y = i * cellHeight;

      // Draw the walls based on the maze array
      if (maze[i][j][0]) ctx.moveTo(x + cellWidth, y), ctx.lineTo(x + cellWidth, y + cellHeight); // Right
      if (maze[i][j][1]) ctx.moveTo(x + cellWidth, y + cellHeight), ctx.lineTo(x, y + cellHeight); // Bottom
      if (maze[i][j][2]) ctx.moveTo(x, y + cellHeight), ctx.lineTo(x, y); // Left
      if (maze[i][j][3]) ctx.moveTo(x, y), ctx.lineTo(x + cellWidth, y); // Top
    }
  }
  ctx.closePath();
  ctx.stroke();
}
function drawPlayer() {
  ctx.fillText("🦧", playerX * (gameWidth / mazeDif[e.value]) + cellCenter, playerY * (gameHeight / mazeDif[e.value]) + cellCenter);
}

//player movement ability
function gameInitialization(playerX, playerY) {
  cellCenter = gameWidth / (mazeDif[e.value] * 2);
  ctx.font = cellCenter * 1.2 + "px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("🦧", playerX * (gameWidth / mazeDif[e.value]) + cellCenter, playerY * (gameHeight / mazeDif[e.value]) + cellCenter);
  ctx.fillText("🍌", prizeX * (gameWidth / mazeDif[e.value]) + cellCenter, prizeY * (gameHeight / mazeDif[e.value]) + cellCenter);
}

window.addEventListener('keydown', (event) => {
  if (gamiIsrunning) {
    switch (event.key) {
      case 'w':
        if (maze[playerX][playerY][0] == true && playerX > 0) {
          keys.d.pressed = true;
        }
        break;

      case 'a':
        keys.a.pressed = true;
        break;

      case 'd':
        if (player.position.y > 0) {
          player.velocity.y = -10;
        }
        break;

      case 's':
        break;
    }
  }
});

/*lähtö piste peli hahmolle on dfs lähtöpiste joka on yksi neljästä kulmasta
seinien läpi ei voi kulkea
pelihahmon liike aina yksi ruutu
lopetus piste on dfs viimeinen ruutu jonka se merkkaa
pelin voittaa kun peli hahmo löytää aarteen
🦧🍌*/