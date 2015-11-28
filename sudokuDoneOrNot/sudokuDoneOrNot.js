 /*
  function done_or_not passing a board (list[list_lines]) as parameter. If the board is valid return 'Finished!', otherwise return 'Try again!'
   Sudoku rules:
     Complete the Sudoku puzzle so that each and every row, column, and region contains the numbers one through nine only once.
     Rows:
     There are 9 rows in a traditional Sudoku puzzle. Every row must contain the numbers 1, 2, 3, 4, 5, 6, 7, 8, and 9. There may not be any duplicate numbers in any row. In other words, there can not be any rows that are identical.
     In the illustration the numbers 5, 3, 1, and 2 are the "givens". They can not be changed. The remaining numbers in black are the numbers that you fill in to complete the row.
     Columns:
     There are 9 columns in a traditional Sudoku puzzle. Like the Sudoku rule for rows, every column must also contain the numbers 1, 2, 3, 4, 5, 6, 7, 8, and 9. Again, there may not be any duplicate numbers in any column. Each column will be unique as a result.
     In the illustration the numbers 7, 2, and 6 are the "givens". They can not be changed. You fill in the remaining numbers as shown in black to complete the column.
     Regions
   A region is a 3x3 box like the one shown to the left. There are 9 regions in a traditional Sudoku puzzle.
     Like the Sudoku requirements for rows and columns, every region must also contain the numbers 1, 2, 3, 4, 5, 6, 7, 8, and 9. Duplicate numbers are not permitted in any region. Each region will differ from the other regions.
     In the illustration the numbers 1, 2, and 8 are the "givens". They can not be changed. Fill in the remaining numbers as shown in black to complete the region.
     Valid board example:
     */
/*
Test.assertEquals(doneOrNot([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
                          [6, 7, 2, 1, 9, 5, 3, 4, 8],
                          [1, 9, 8, 3, 4, 2, 5, 6, 7],
                          [8, 5, 9, 7, 6, 1, 4, 2, 3],
                          [4, 2, 6, 8, 5, 3, 7, 9, 1],
                          [7, 1, 3, 9, 2, 4, 8, 5, 6],
                          [9, 6, 1, 5, 3, 7, 2, 8, 4],
                          [2, 8, 7, 4, 1, 9, 6, 3, 5],
                          [3, 4, 5, 2, 8, 6, 1, 7, 9]]), "Finished!");
                                                          
Test.assertEquals(doneOrNot([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
                     [6, 7, 2, 1, 9, 0, 3, 4, 9],
                     [1, 0, 0, 3, 4, 2, 5, 6, 0],
                     [8, 5, 9, 7, 6, 1, 0, 2, 0],
                     [4, 2, 6, 8, 5, 3, 7, 9, 1],
                     [7, 1, 3, 9, 2, 4, 8, 5, 6],
                     [9, 0, 1, 5, 3, 7, 2, 1, 4],
                     [2, 8, 7, 4, 1, 9, 6, 3, 5],
                     [3, 0, 0, 4, 8, 1, 1, 7, 9]]), "Try again!");

[0] [012]  [0] [345]  [0] [678]
[1] [012]  [1] [345]  [1] [678]
[2] [012]  [2] [345]  [2] [678]

[3] [012]  [3] [345]  [3] [678]
[4] [012]  [4] [345]  [4] [678]
[5] [012]  [5] [345]  [5] [678]

[6] [012]  [6] [345]  [6] [678]

cluster0  cluster1  cluster2
cluster3  cluster4  cluster5
cluster6  cluster7  cluster8

cluster0 starts at i=0,j=0
cluster1 starts at i=0,j=3
cluster2 starts at i=0,j=6 and ends at i=0,j=8

cluster3 starts at i=3,j=0
cluster4 starts at i=3,j=3 and ends at i=5,j=5
cluster5 starts at i=3,j=6

cluster6 starts at i=6,j=0 and ends at i=8,j=2

starting j and starting i
j=cluster*3+j
i=cluster

*/
function doneOrNot(board){
for (var c  = 0; c <=9; c++){
  for (var i = 0; i <=2; i++){
    console.log('a',a,'i',i);
  }
}

  //checking rows
  for ( var i = 0; i < board.length; i++ ){
    var rowArray = []; 
    for ( var j = 0; j < board.length; j++){
      if (rowArray.indexOf(board[i][j]===-1)){
        rowArray.push(board[i][j]);
      }else{
        return "Try Again";
      }
    }
  }
  //checking columns
  for (var j = 0; j < board.length; j++){
    var colArray = [];
    for ( var i = 0; i < board.length; i++){
      if (colArray.indexOf(board[i][j])===-1){
        colArray.push(board[i][j]);
      }else{
        return "Try Again";
      }
    }
  }
//checking clusters
  for (var j = 0; j < board.length; j++){
    var colArray = [];
    for ( var i = 0; i < board.length; i++){
      if (colArray.indexOf(board[i][j])===-1){
        colArray.push(board[i][j]);
      }else{
        return "Try Again";
      }
    }
  }

  return "Finished";
}

    
