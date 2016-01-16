var app = angular.module('ticToe',[]);
app.controller('board',['$scope',function($scope){
  $scope.xTurn = true;

  $scope.initialize = function(){
    $scope.board =  _.range(3).map(function(){
     return _.range(3).map(function(){
       return "";
     });
    });
    $scope.boardActive = true;
    $scope.statusUpdate();
  };

  $scope.aClick = function(thisRow,thisColumn){
    if($scope.board[thisRow][thisColumn]==="" && $scope.boardActive){ //check to see if spot is taken and if board is active
      var token = $scope.xTurn ? 'x' : 'o';
      $scope.board[thisRow][thisColumn] = token; 
      $scope.statusUpdate();
    }
  };
  
  $scope.logic = function(token){ 
    return _.any($scope.board,function(row){//testing for winner on any row
      return _.every(row,function(column){
        return column === token;
      });
    }) ||
     _.any(_.zip.apply(_,$scope.board),function(row){// rotate the board and check for winner on any column
      return _.every(row,function(column){
        return column === token;
      });
    }) ||
     $scope.board.every(function(row,rowIndex){ //check for a winner on diagonal from left to right
        return row[rowIndex] === token;
    }) ||
      $scope.board.every(function(row,rowIndex){ //check for winner on diagonal from right to left
        return row[$scope.board.length-1-rowIndex] === token;
    });
  };
  
  $scope.statusUpdate = function(){ 
    var token = $scope.xTurn ? 'x' : 'o'; 
    if($scope.logic(token)){ //if there is a winner
      $scope.gameStatus ='Player ' + token + " wins!";
      $scope.boardActive = false;
    }else{ //still no winner
      $scope.xTurn = !$scope.xTurn; //other persons turn
      token = $scope.xTurn ? 'x' : 'o';
      $scope.gameStatus = "It is player " + token + "'s turn";
      
    }
  };

  $scope.initialize();

}]);
