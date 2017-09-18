class TicTacToe {
    constructor() {
        this.cur_player = 'x';
        this.field = [,];
    }

    getCurrentPlayerSymbol() {
        return this.cur_player;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.field[rowIndex][columnIndex]===null){
            this.field[rowIndex][columnIndex]=this.cur_player;
        }
        (this.cur_player==='x') ? this.cur_player = 'o' : this.cur_player = 'x';
    }

    isFinished() {

    }

    getWinner() {

    }

    noMoreTurns() {

    }

    isDraw() {

    }

    getFieldValue(rowIndex, colIndex) {

    }
}

module.exports = TicTacToe;
