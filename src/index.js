
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined) {return [];}
  else if (matrix.length == 1) {return matrix;}
  else {const out_matrix = [];
        for(let i=0; i<matrix.length; i++) {
          if (i%2 === 0) {out_matrix.push(matrix[i]);}
          else {out_matrix.push(matrix[i].reverse());}
        }return [].concat(...out_matrix);
  }
};
