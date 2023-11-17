import { expect, describe, test } from "vitest";
import { TicTacToe } from "../src/TicTacToe";

describe('Horizontal Winning Condition', () => {
    test('raw 1', () => {
        // given
        const tictactoe = new TicTacToe([
            'O', 'O', 'N',
            'N', 'N', 'N',
            'N', 'N', 'N']);
        // when
        tictactoe.play('O', 0, 2);
        // then
        expect(tictactoe.gameOver).toBe(true);
        expect(tictactoe.winner).toBe('O');
    })

    test('raw 2', () => {
        // given
        const tictactoe = new TicTacToe([
            'N', 'N', 'N',
            'O', 'O', 'N',
            'N', 'N', 'N']);
        // when
        tictactoe.play('O', 1, 2);
        // then
        expect(tictactoe.gameOver).toBe(true);
        expect(tictactoe.winner).toBe('O');
    })

    test('raw 3', () => {
        // given
        const tictactoe = new TicTacToe([
            'N', 'N', 'N',
            'N', 'N', 'N',
            'O', 'O', 'N']);
        // when
        tictactoe.play('O', 2, 2);
        // then
        expect(tictactoe.gameOver).toBe(true);
        expect(tictactoe.winner).toBe('O');
    })
})

describe('Vertical Winning Condition', () => {
    test('column 1', () => {
        // given
        const tictactoe = new TicTacToe([
            'O', 'N', 'N',
            'O', 'N', 'N',
            'N', 'N', 'N']);
        // when
        tictactoe.play('O', 2, 0);
        // then
        expect(tictactoe.gameOver).toBe(true);
        expect(tictactoe.winner).toBe('O');
    })

    test('column 2', () => {
        // given
        const tictactoe = new TicTacToe([
            'N', 'O', 'N',
            'N', 'O', 'N',
            'N', 'N', 'N']);
        // when
        tictactoe.play('O', 2, 1);
        // then
        expect(tictactoe.gameOver).toBe(true);
        expect(tictactoe.winner).toBe('O');
    })

    test('column 3', () => {
        // given
        const tictactoe = new TicTacToe([
            'N', 'N', 'O',
            'N', 'N', 'O',
            'N', 'N', 'N']);
        // when
        tictactoe.play('O', 2, 2);
        // then
        expect(tictactoe.gameOver).toBe(true);
        expect(tictactoe.winner).toBe('O');
    })
})

describe('Diagonal Winning Conditions', () => {
    test('↘', () => {
        // given
        const tictactoe = new TicTacToe([
            'O', 'N', 'N',
            'N', 'O', 'N',
            'N', 'N', 'N']);
        // when
        tictactoe.play('O', 2, 2);
        // then
        expect(tictactoe.gameOver).toBe(true);
        expect(tictactoe.winner).toBe('O');
    })

    test('↙', () => {
        // given
        const tictactoe = new TicTacToe([
            'N', 'N', 'O',
            'N', 'O', 'N',
            'N', 'N', 'N']);
        // when
        tictactoe.play('O', 2, 0);
        // then
        expect(tictactoe.gameOver).toBe(true);
        expect(tictactoe.winner).toBe('O');
    })
})