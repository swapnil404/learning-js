function rotate(matrix) {
  const n = matrix.length;
  let newMatrix = Array.from({ length: n }, () => Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      newMatrix[i][j] = matrix[n - j - 1][i];
    }
  }
  return newMatrix;
}
console.log(
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
); // [[7,4,1],[8,5,2],[9,6,3]]
console.log(
  rotate([
    [1, 2],
    [3, 4],
  ])
);
console.log(rotate([[1]]));
