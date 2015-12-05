function staircase(height){
    var theStairs ="";
    for (x = 0; x < height; x++){//x will be what the current height is,height increases downward,
                                    //more steps as x increases,
        for(i=height; i >= 0; i--){//i is depth, it increases from left to right,
            if(x-i >= 0 ){ //first time through, x=0,i=0, should do "     #", five space, one #
                theStairs += "#";
            } else {
                theStairs += " ";
            }
            // theStairs+=i-x;
        }
        theStairs+="\n";
        // console.log("--------------\n",theStairs);
    }
    console.log(theStairs);
}

/*
x=0,i=0,stair = -
x=0,i=3,stair = -
x=0,i=5,stair = #

x-i
0,-1,-2,-3,-4,-5
1, 0,-1,-2,-3,-4
2,1,

i-x
0,

*/