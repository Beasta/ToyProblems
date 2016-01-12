var board = _.range(3).map(function(){
 return _.range(3).map(function(){
   return " ";
 });
});

var xTurn = true; //start the game on x's turn
var logic = function(token){ 
  return _.any(board,function(row){//testing for winner on any row
    return _.every(row,function(column){
      return column === token;
    });
  });
};

var app = angular.module('ticToe',[]);
app.controller('board',['$scope',function($scope){
  $scope.board = board;
  $scope.aClick = function(thisRow,thisColumn){
    if(board[thisRow][thisColumn]===" "){
      var token = xTurn ? 'x' : 'o';
      board[thisRow][thisColumn] = token;
      xTurn = !xTurn;
      console.log(logic(token));
    }
  };
}]);
