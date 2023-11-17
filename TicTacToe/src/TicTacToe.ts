
type Symbol = "O" | "X" | 'N';
type X_pos = 0 | 1 | 2;
type Y_pos = 0 | 1 | 2;

export class TicTacToe {
    private _round: Symbol = 'O';
    private _board: Symbol[];
    private _gameOver: boolean = false;
    private _winner: Symbol | 'draw' | null = null;

    constructor(board: Symbol[] = []) {
        if (board.length) {
            this._board = board;
        } else {
            this._board = ["N", "N", "N", "N", "N", "N", "N", "N", "N"];
        }
    };

    set round(round: Symbol) {
        this._round = round;
    }

    get round() {
        return this._round;
    }

    get gameOver() {
        return this._gameOver;
    }

    get winner() {
        return this._winner;
    }

    at(x: X_pos, y: Y_pos) {
        return this._board[x * 3 + y];
    }

    play(player: Symbol, x: X_pos, y: Y_pos) {
        if (player !== this._round) throw "Invalid move: not your round";

        const index = x * 3 + y;
        if (this._board[index] !== "N") throw "Invalid move: position already occupied";
        this._board[index] = player;

        this._round = player === 'O' ? "X" : "O";
        this.checkWinningConditions();
        this.checkDrawConditions();
    }

    checkDrawConditions() {
        const draw = this._board.findIndex(symbol => symbol === "N") === -1;
        if (draw) {
            this._gameOver = true;
            this._winner = "draw";
        }
    }

    checkWinningConditions() {
        const winner = this.isHorizontalWin() || this.isVerticalWin() || this.isDiagonalWin();
        if (winner) {
            this._gameOver = true;
            this._winner = winner;
        }
    }

    isHorizontalWin() {
        for (let i = 0; i <= 6; i += 3) {
            if (this._board[i] === this._board[i + 1] &&
                this._board[i + 1] === this._board[i + 2] &&
                this._board[i] !== "N")
                return this._board[i];
        }
        return null;
    }

    isVerticalWin() {
        for (let i = 0; i <= 2; i += 1) {
            if (this._board[i] === this._board[i + 3] &&
                this._board[i + 3] === this._board[i + 6] &&
                this._board[i] !== "N")
                return this._board[i];
        }
        return null;
    }

    isDiagonalWin() {
        if (this._board[0] === this._board[4] &&
            this._board[4] === this._board[8] &&
            this._board[0] !== "N")
            return this._board[0];
        if (this._board[2] === this._board[4] &&
            this._board[4] === this._board[6] &&
            this._board[2] !== "N")
            return this._board[2];
        return null;
    }
}