const POINTS = ["LOVE", "FIFTEEN", "THIRTY", "FORTY"];

type Player = {
    name: string,
    score: number
}

export class Tennis {
    private player1: Player;
    private player2: Player;

    constructor(name1: string, name2: string) {
        this.player1 = { name: name1, score: 0 };
        this.player2 = { name: name2, score: 0 };
    }

    setScoreOfPlayer(name: string, score: number) {
        this.findPlayer(name).score = score;
    }

    winPoint(name: string) {
        this.findPlayer(name).score += 1;
    }

    getScore() {
        return this.isSameScore
            ? this.isDeuce ? "DEUCE" : this.sameScore()
            : this.isLookupScore ? this.lookupScore() : this.advantageScore();
    }

    private advantageScore() {
        const highScorePlayer = this.highScorePlayer.name;
        return this.isAdvantage ? ("ADVANTAGE " + highScorePlayer) : (highScorePlayer + " WINS");
    }
    private lookupScore() {
        return POINTS[this.player1.score] + "," + POINTS[this.player2.score];
    }

    private get isLookupScore() {
        return this.player1.score < 4 && this.player2.score < 4;
    }

    private get isAdvantage() {
        return Math.abs(this.player1.score - this.player2.score)===1;
    }

    private sameScore() {
        return POINTS[this.player1.score] + " ALL";
    }

    private get isDeuce() {
        return this.player1.score > 2;
    }

    private get isSameScore() {
        return this.player1.score === this.player2.score;
    }

    private findPlayer(name: string) {
        return (name === this.player1.name)
            ? this.player1 : this.player2;
    }

    private get highScorePlayer() {
        return this.player1.score >= this.player2.score ? this.player1 : this.player2;
    }
}
