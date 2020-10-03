
exports.min = function min (array) {
  if(array === 0) {
    return 0;
  } else if (array === undefined) {
    return 0;
  } else if (array.length == 0) {
    return 0;
  } else {    
    return Math.min(...array)
    }
}

exports.max = function max (array) {
  if(array === 0) {
    return 0;
  } else if (array === undefined) {
    return 0;
  } else if (array.length == 0) {
    return 0;
  } else {    
    return Math.max(...array)
    }
}

exports.avg = function avg (array) {
  let sum = 0;
  if(array === 0) {
    return 0;
  } else if (array === undefined) {
    return 0;
  } else if (array.length == 0) {
    return 0;
  } else {
    for (let arg of array) {
    sum += arg;
    }
    return sum/array.length;
  } 
  }
