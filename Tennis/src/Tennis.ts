const POINTS = ["LOVE", "FIFTEEN", "THIRTY", "FORTY"];

export class Tennis {
    private players: Map<string, number> = new Map();
    constructor(
        private readonly player1: string,
        private readonly player2: string,
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
        const score1: number = this.players.get(this.player1) as number;
        const score2: number = this.players.get(this.player2) as number;
        if (score1 === score2 && score1 === 0) return "LOVE ALL";
        return POINTS[score1] + "," + POINTS[score2];
    }
}