var app = angular.module('ticToe',[]);
app.controller('board',['$scope',function($scope){
  

  $scope.xTurn = true;
  $scope.initialize = function(){
    $scope.board =  _.range(3).map(function(){
     return _.range(3).map(function(){
       return " ";
     });
    });
  };
  $scope.initialize();
  $scope.aClick = function(thisRow,thisColumn){
    if($scope.board[thisRow][thisColumn]===" "){
      var token = $scope.xTurn ? 'x' : 'o';
      $scope.board[thisRow][thisColumn] = token;
      $scope.xTurn = !$scope.xTurn;
      console.log($scope.logic(token));
    }
  };
  $scope.logic = function(token){ 
    return _.any($scope.board,function(row){//testing for winner on any row
      return _.every(row,function(column){
        return column === token;
      });
    });
  };
}]);
