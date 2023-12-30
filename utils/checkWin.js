var board = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [0, 0, 2, 0, 0, 0, 0],
    [0, 0, 2, 1, 2, 2, 2],
    [0, 0, 2, 2, 2, 2, 2],
    [0, 0, 2, 0, 0, 0, 0],
    [0, 0, 2, 0, 0, 0, 0]
];
function hasHorizontalWin(board, row, player) {
    var n = board.length;
    var k = 5;
    outer: for (var i = 0; i < n - k + 1; i++) {
        inner: for (var j = i; j < i + k; j++) {
            if (board[row][j] != player) {
                continue outer;
            }
        }
        console.log("inside");
        return true;
    }
    console.log("outside");
    return false;
}
function hasVerticalWin(board, col, player) {
    var n = board.length;
    var k = 5;
    outer: for (var i = 0; i < n - k + 1; i++) {
        inner: for (var j = i; j < i + k; j++) {
            if (board[j][col] != player) {
                continue outer;
            }
        }
        console.log("inside");
        return true;
    }
    console.log("outside");
    return false;
}
console.log(hasHorizontalWin(board, 1, 1));
console.log(hasHorizontalWin(board, 3, 2));
console.log(hasHorizontalWin(board, 4, 2));
console.log(hasVerticalWin(board, 2, 2));
