import { expect, describe, test } from "vitest";
import { TicTacToe } from "../src/TicTacToe";

describe("player alternation",()=>{
    test('Switch to the next player after a move', () => {
        // given
        const tictactoe = new TicTacToe();
        // when
        tictactoe.play('O', 0, 0);
        // then
        expect(tictactoe.round).toBe('X');
    })
    
    test('Throw exception when a non-current player tries to make a move', () => {
        // given
        const tictactoe = new TicTacToe();
        // when & then
        expect(() => tictactoe.play('X', 0, 0)).toThrow("Invalid move: not your round");
    })
})