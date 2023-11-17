import { expect, describe, test } from "vitest";
import { TicTacToe } from "../src/TicTacToe";

describe("draw condition", () => {
    test('draw_whenAllPositionsAreOccupied', () => {
        // given
        const tictactoe = new TicTacToe([
            'O', 'X', 'O',
            'X', 'O', 'X',
            'X', 'O', 'N']);
        tictactoe.round = 'X'
        // when
        tictactoe.play('X', 2, 2);
        // then
        expect(tictactoe.gameOver).toBe(true);
        expect(tictactoe.winner).toBe('draw');
    })

})