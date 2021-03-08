
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let temp = []
  if (!matrix || matrix.length == 0) {
    return temp
  }
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 == 0) {
        matrix[i].forEach(x => {
            temp.push(x)
        });
    } else {
        matrix[i].reverse().forEach(x => {
        temp.push(x)
        });
    }
  }
  return temp
}