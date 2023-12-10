const POINTS = ["LOVE", "FIFTEEN", "THIRTY", "FORTY"];

export class Tennis {
    private players: Map<string, number> = new Map();
    constructor(
        player1: string,
        player2: string,
    ) {
        this.players.set(player1, 0);
        this.players.set(player2, 0);
    }

    setScoreOfPlayer(player: string, score: number) {
        this.players.set(player, score);
    }

    winPoint(player: string) {
        const score = this.players.get(player);
        this.setScoreOfPlayer(player, (score as number) + 1);
    }

    getScore() {
        const [player1, player2] = [...this.players.keys()];
        const score1: number = this.players.get(player1) as number;
        const score2: number = this.players.get(player2) as number;
        if (score1 === score2 && score1 === 0) return "LOVE ALL";
        const highScore = Math.max(score1, score2);
        if (highScore >= 4) {
            const highScorePlayer = [...this.players.entries()].find(([_, score]) => score === highScore)?.[0];
            if (Math.abs(score1 - score2) >= 2)
                return highScorePlayer + " WINS";
            else if (Math.abs(score1 - score2) === 1)
                return "ADVANTAGE " + highScorePlayer;
        }
        if (highScore >= 3 && score1 === score2) {
            return "DEUCE";
        }
        return POINTS[score1] + "," + POINTS[score2];
    }
}
