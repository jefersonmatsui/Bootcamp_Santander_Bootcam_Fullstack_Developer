//PRÉ - ES2015

function exponencial(array, num) {
  if (num === undefined) {
    num =1;
  }
  
  const result = [];

  for(let i = 0; i < array.length; i++) {
    result.push(array[i] ** num);
  }

  return result;
}

exponencial([1, 2, 3, 4]) // [1, 2, 3, 4]
exponencial([1, 2, 3, 4], 4) // [1, 8, 27, 64]


// PÓS - ES2015
function exponencial(array, num = 1) {
  const result = [];

  for(let i = 0; i < array.length; i++) {
    result.push(array[i] ** num);
  }

  return result;
}

exponencial([1, 2, 3, 4]) // [1, 2, 3, 4]
exponencial([1, 2, 3, 4], 4) // [1, 8, 27, 64]


// OBJETO "arguments"

function findMax() {
  let max = -Infinity;

  for(let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }

  return max; 
}

// -> findMax(1, 2, 3,6, 90, 1)
// <- 90

/*Um array com todos os parâmetros passados quando a função foi invocada */ 

function showArgs() {
  return arguments;
}

// -> showArgs(1, 2, [2, 3, 4], "string")
// <- Arguments (4) [1, 2, array(3), "string", callee: f. Symbol(Symbol.iterator): f]
/*
0: 1
1: 2
2: [2, 3, 4]
3: "string"
*/