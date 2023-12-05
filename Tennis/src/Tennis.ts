

export class Tennis {
    constructor(
        private readonly player1: string,
        private readonly player2: string,
        private score_P1: string = 'love',
        private score_P2: string = 'love',
    ) { }

    getScoreOfPlayer(player: string) {
        return player === this.player1 ? this.score_P1 : this.score_P2;
    }

    setScoreOfPlayer(player: string, score: string) {
        if (player === this.player1) {
            this.score_P1 = score;
        } else {
            this.score_P2 = score;
        }
    }

    winPoint(player: string) {
        if (player === this.player1) {
            if (this.score_P1 === 'love') {
                this.score_P1 = '15';
            } else if (this.score_P1 === '15') {
                this.score_P1 = '30';
            } else if (this.score_P1 === '30') {
                this.score_P1 = '40';
            }
        } else {
            if (this.score_P2 === 'love') {
                this.score_P2 = '15';
            } else if (this.score_P2 === '15') {
                this.score_P2 = '30';
            } else if (this.score_P2 === '30') {
                this.score_P2 = '40';
            }
        }
    }

}