const rows = 30;
const cols = 30;

let gen =[rows];
let nextGen =[rows];
var interval;
var c = 0;
var sel = document.getElementById('patterns');
sel.addEventListener("change", selectPattern);

// Used source: 'Medium' to help make grid using html table //
function makeGrid() {
    let grid = document.querySelector('#grid');
    
    let table = document.createElement('table');
    table.setAttribute('id','gridd');
    for (let i = 0; i < rows; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < cols; j++) {
            let cell = document.createElement('td');
            cell.setAttribute('id', i + '-' + j);
            cell.setAttribute('class', 'dead');
            cell.addEventListener('click',clicked);            
            tr.appendChild(cell);
        }
        table.appendChild(tr);
    }
    grid.appendChild(table);
}

function clicked() {
    let loc = this.id.split("-");
    let row = Number(loc[0]);//Get i
    let col = Number(loc[1]);//Get j
// Toggle cell alive or dead
    if (this.className==='alive'){
        this.setAttribute('class', 'dead');
        gen[row][col]=0;
       
    }else{
        this.setAttribute('class', 'alive');
        gen[row][col]=1;
    }
}

// creates an array of arrays to fill grid //
function genArr() {
    for (let i = 0; i < rows; i++) {
        gen[i] = new Array(cols);
        nextGen[i] = new Array(cols);
    }
}

// initializes the arrays to dead //
function beginning() {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            gen[i][j] = 0;
            nextGen[i][j] = 0;
        }
    }
}

// counts the values of surrounding cells and adds together. // 
function countNeighbor(row, col) {
  let sum = 0;
  let roww = Number(row);
  let coll = Number(col);
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      let r = (roww + i + rows) % rows;
      let c = (coll + j + cols) % cols;
        if(gen[r][c] == 1){
            sum++;
        }
    }
  }
  sum -= gen[row][col];
  return sum;
}

// new generation array is created based from the sum of countNeighbor and applies rules of game //
function nxtgenArr(){
    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
            let cnt = countNeighbor(i,j);
            
            // dead
            if(gen[i][j] == 0){
                if(cnt == 3){
                    nextGen[i][j] = 1;
                }
            }
            
            // alive
            if(gen[i][j] == 1){
                if(cnt < 2){
                    nextGen[i][j]=0;
                }
                if(cnt > 3){
                    nextGen[i][j] = 0;
                }
                if(cnt == 2 || cnt == 3){
                    nextGen[i][j] = 1;
                }
            }
        }
    }
    
}

// updates gen array with next generation values //
function update(){
    
    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
            gen[i][j] = nextGen[i][j];
        }
    }
     // nextgen is reset
    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
            nextGen[i][j] = 0;
        }
    }
    
}

function updateGrid() {
        let cell='';
        for (row in gen) {
            for (col in gen[row]) {
                cell = document.getElementById(row + '-' + col);
                if (gen[row][col] == 0) {
                    cell.setAttribute('class', 'dead');
                } else {
                    cell.setAttribute('class', 'alive');
                }
            }
        }
}

//  Checks neighbors and applies rules. The next generation is then created and updated to the grid. //
function newGen(){
    nxtgenArr();
    update();
    updateGrid();
    counter();
}

function start(){
    intervals = setInterval(newGen,500);
    counter();
}

function stop(){
    clearInterval(intervals);
}

function skip(){
    start();
    setTimeout(stop,23000);
}

function reset(){
    c = 0;
    window.location.reload();
}

function counter(){
        c++;
        gencnt = document.getElementById('gencount').innerHTML = "Generation: "+c;
}

// Still Life Pattern: Block //
function block(){
    // resets grid
    beginning(); 
    updateGrid();

    gen[5][5] = 1;
    gen[5][6] = 1;
    gen[6][5] = 1;
    gen[6][6] = 1;
    updateGrid();
}

// Oscillators
function blinker(){
    beginning();
    updateGrid();

    gen[8][8] = 1;
    gen[8][9] = 1;
    gen[8][10] = 1;
    updateGrid();
    
}

function toad(){
    beginning();
    updateGrid();
    gen[9][9] = 1;
    gen[9][10] = 1;
    gen[9][11] = 1;
    gen[10][8] = 1;
    gen[10][9] = 1;
    gen[10][10] = 1;
    updateGrid();
}

// Glider
function glider(){
    beginning();
    updateGrid();
    gen[4][6] = 1;
    gen[5][7] = 1;
    gen[6][5] = 1;
    gen[6][6] = 1;
    gen[6][7] = 1;
    updateGrid();
}

function selectPattern(sel){
    if(sel.value == 'block'){
        block();
    }
    else if(sel.value == 'blinker'){
        blinker();
    }
    else if(sel.value == 'toad'){
        toad();
    }
    else if(sel.value == 'glider'){
        glider();
    }

}

window.onload=()=>{
    makeGrid();
    genArr();
    beginning();
}
