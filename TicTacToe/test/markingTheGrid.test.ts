import { expect, describe, test } from "vitest";
import { TicTacToe } from "../src/TicTacToe";

describe("marking the grid", () => {
    test('Update the board correctly after a move', () => {
        // given
        const tictactoe = new TicTacToe();
        // when
        tictactoe.play('O', 0, 0);
        // then
        expect(tictactoe.at(0, 0)).toBe('O');
    })

    test('Throw exception when attempting to move to an already occupied position', () => {
        // given
        const tictactoe = new TicTacToe();
        tictactoe.play('O', 0, 0);
        // when & then
        expect(() => tictactoe.play('X', 0, 0)).toThrow("Invalid move: position already occupied");
    })
})