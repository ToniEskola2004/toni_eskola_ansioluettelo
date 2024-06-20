const gameBoard = document.getElementById("gameCanvas");
const mazeDif = [8, 12, 18, 24];
const gameWidth = 800;
const gameHeight = 800;
let maze = [];
const ctx = gameBoard.getContext("2d");
var e = document.getElementById("selection");
var x = 0, y = 0;

//generate full maze memory

function generateLabyrint() {

    for (i = 0; i < mazeDif[e.value]; i++) {
        maze[i] = [];
            for (j = 0; j < mazeDif[e.value]; j++) {
                maze[i][j] = [false, false, 0];            
            }
    }
    //start
    maze[0][0][4] = 2;
    maze[mazeDif[e.value] - 1][mazeDif[e.value] - 1][4] = 3;
    drawLabyrinth();
}

while (maze.length) {
    function randomSquare() {
    directions = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    const randnum = Math.floor(Math.random() * 4)
    let x = x + directions[randnum][0];
    let y = y + directions[randnum][1];

    if (x < 0 && x > mazeDif[e.value] && y < 0 && y > mazeDif[e.value] && maze[x][y][2] > 0) {randomSquare()}
    }
    console.log(x, y);
    const visited = maze[x][y][2];
    const vertex = stack.pop();

    if (!visited.has(0)) {
      visited.add(vertex);
      result.push(vertex);

      for (const neighbor of graph[vertex]) {
        stack.push(neighbor);
        }
    }
}

// draw the labyrint

function drawLabyrinth() {
    const cellWidth = gameWidth / mazeDif[e.value];
    const cellHeight = gameHeight / mazeDif[e.value];

    ctx.clearRect(0, 0, gameWidth, gameHeight);
    ctx.strokeStyle = 'black';

    for (let i = 0; i < mazeDif[e.value]; i++) {
        for (let j = 0; j < mazeDif[e.value]; j++) {
            let x = i * cellWidth;
            let y = j * cellHeight;

            // Draw the walls based on the maze array
            if (maze[i][j][0]) ctx.moveTo(x + cellWidth, y), ctx.lineTo(x + cellWidth, y + cellHeight); // Right
            if (maze[i][j][1]) ctx.moveTo(x + cellWidth, y + cellHeight), ctx.lineTo(x, y + cellHeight); // Bottom
        }
    }
    ctx.stroke();
}

// Initialize the maze generation and drawing

//player movement ability