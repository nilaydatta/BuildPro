// 1+2+3+4+5+6 = 21

// ES 5
var array_sum = function(my_array) {
  if (my_array.length === 1) {
    return my_array[0];
  } else {
    return my_array.pop() + array_sum(my_array);
  }
};

console.log(array_sum([1, 2, 3, 4, 5, 6]));
