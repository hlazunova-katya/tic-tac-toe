class TicTacToe {
    constructor() {
        this.cur_player = 'x';
        this.field = [[null,null,null],[null,null,null],[null,null,null] ];
    }

    getCurrentPlayerSymbol() {
        return this.cur_player;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.field[rowIndex][columnIndex]===null){
            this.field[rowIndex][columnIndex]=this.cur_player;
            //this.cur_player === 'x' ? this.cur_player = 'o' : this.cur_player = 'x';
            this.cur_player = (this.cur_player === 'x') ? 'o' : 'x';
        }
    }

    isFinished() {
       if (this.isDraw()||this.getWinner()!==null) return true;
       else return false;
    }

    getWinner() {
        for (let i=0; i<3; i++){
            if (
                this.field[i][0]!==null
                && this.field[i][0]===this.field[i][1]
                && this.field[i][0]===this.field[i][2]
            )
                return this.field[i][0];
            else  if (
                this.field[0][i]!==null
                && this.field[0][i]===this.field[1][i]
                && this.field[0][i]===this.field[2][i]
            )
                return this.field[0][i];
        }
        //проверка диагоналей
        return (this.field[0][0] !== null
            && this.field[0][0] === this.field[1][1]
            && this.field[0][0] === this.field[2][2])
            ||
            (this.field[0][2] !== null
            && this.field[0][2] === this.field[1][1]
            && this.field[0][2] === this.field[2][0])
            ? this.field[1][1] : null;
    }

    noMoreTurns() {
        for (let i = 0; i < 3; i++) {
            if (this.field[i].includes(null))
                return false;
        }
        return true;
    }

    isDraw() {
       return this.noMoreTurns()&&(this.getWinner()===null);
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
