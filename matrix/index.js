// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    const grid = Array.from({ length: n }, () => Array(n).fill(0)); 
    let value = 1;
    let topBoundary = 0, bottomBoundary = n - 1;
    let leftBoundary = 0, rightBoundary = n - 1;

    while (topBoundary <= bottomBoundary && leftBoundary <= rightBoundary) {
        // Fill top 
        for (let col = leftBoundary; col <= rightBoundary; col++) {
            grid[topBoundary][col] = value++;
        }
        topBoundary++;

        // Fill right 
        for (let row = topBoundary; row <= bottomBoundary; row++) {
            grid[row][rightBoundary] = value++;
        }
        rightBoundary--;

        // Fill  bottom 
        for (let col = rightBoundary; col >= leftBoundary; col--) {
            grid[bottomBoundary][col] = value++;
        }
        bottomBoundary--;

        // Fill left 
        for (let row = bottomBoundary; row >= topBoundary; row--) {
            grid[row][leftBoundary] = value++;
        }
        leftBoundary++;
    }

    return grid;
}

module.exports = matrix;

