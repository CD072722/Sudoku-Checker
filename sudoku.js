function getRow(grid, rowIdx){
    return grid[rowIdx];
}

function getColumn(grid, columnIdx){
    let column = [];
    for (let i = 0; i < 9; i++) {
        column.push(grid[i][columnIdx]);
    }
    return column;
}

function getSection(grid, x, y){
    let yCor = y*3 //take the given coordinates and times by 3 to get the starting section coordinates
    let xCor = x*3
    let section = [];
    for(j = yCor; j < yCor + 3; j++){  //only loop through the next three elements after the starting section coordinate       
        for(i = xCor; i < xCor + 3; i++){
             section.push(grid[j][i]); 
         }
    }
    return section;
}

function includes1to9(arr){
    let numChecker  = [];
    for (i = 0; i < 9; i++){
        if(numChecker.includes(arr[i])){
            return false;
        } else {
            numChecker.push(arr[i]);
        } 
    }
    return true;
}
    

//create main function 
function sudokuChecker (grid) {
    for(i = 0; i < 9; i++){  //check each row
        row = getRow(grid, i);
        if(!includes1to9(row)){ // if it comes back false, return false and end function
        return false;
        }
    }
    for(j = 0; j < 9; j++){
        column = getColumn(grid, j); //check each column
        if(!includes1to9(column)){
            return false;
        }   
    } 
    for(k = 0; k < 3; k++){
        for(p = 0; p < 3; p++){   
            section = getSection(grid, k, p); //check each section
            if(!includes1to9(section)){
                return false;
            }  
        }
    }
    return true; //if it all passes the tests, return true
}

    
// test the functions
let puzzle = [[ 8,9,5,7,4,2,1,3,6 ],
              [ 2,7,1,9,6,3,4,8,5 ],
              [ 4,6,3,5,8,1,7,9,2 ],
              [ 9,3,4,6,1,7,2,5,8 ],
              [ 5,1,7,2,3,8,9,6,4 ],
              [ 6,8,2,4,5,9,3,7,1 ],
              [ 1,5,9,8,7,4,6,2,3 ],
              [ 7,4,6,3,2,5,8,1,9 ],
              [ 3,2,8,1,9,6,5,4,7 ]];

console.log(sudokuChecker(puzzle)); // expected output: true

let p8zzle = [[ 8,9,5,7,4,2,1,3,6 ],
              [ 8,7,1,9,6,3,4,8,5 ],
              [ 4,6,3,5,8,1,7,9,2 ],
              [ 9,3,4,6,1,7,2,5,8 ],
              [ 5,1,7,2,3,8,9,6,4 ],
              [ 6,8,2,4,5,9,3,7,1 ],
              [ 1,5,9,8,7,4,6,2,3 ],
              [ 7,4,6,3,2,5,8,1,9 ],
              [ 3,2,8,1,9,6,5,4,7 ]];

console.log(sudokuChecker(p8zzle)); // Expected output: false