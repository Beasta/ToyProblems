#!/usr/bin/env ruby

#---------------------------------------------------


def numberOfPaths(a)
  totalPaths = 0
  
  #recursive function - parameters (current location)
  def recursivePaths(xlocation,ylocation)
  ###check to see if current location is end (empty to the right and left)
    if !(a[ylocation][xlocation+1]) && !(a[ylocation+1][xlocation])
  #####if end, increment number paths
      totalPaths += 1
  #####else
    else
  ###check to see if right is a valid move
  #####is right empty?
  #####is right a 0?
      if (a[ylocation][xlocation+1]) && (a[ylocation][xlocation+1] != 0)
  #######if both are false then call recursion with incremented x coordinate
        recursivePaths(++xlocation, ylocation)
      end
  ###check to see if down is a valid move
  #####is down empty?
  #####is down a 0?
      if (a[ylocation+1][xlocation]) && (a[ylocation+1][xlocation] != 0)
  #######if both are false then call recursion with incremented y coordinate
        recursivePaths(xlocation, ++ylocation)
      end
    end

  end

  recursivePaths(0,0)
  puts totalPaths
end



#------------------------------------------------
x = gets
input = x.split(' ')
_a_cnt = input[0].to_i
_b_cnt = input[1].to_i
_a_i=0
_a = Array.new(_a_cnt)

while (_a_i < _a_cnt)
    _b_i = 0
    _b = Array.new(_a_cnt)
    input = gets.split(" ")
    while (_b_i < _b_cnt)
        _b[_b_i] = input[_b_i].to_i
        _b_i+=1
    end
    _a[_a_i] = (_b)
    _a_i+=1
end

res = numberOfPaths(_a)
print res
