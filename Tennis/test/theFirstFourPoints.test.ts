import { expect, describe, test } from "vitest";
import { Tennis } from "../src/Tennis";


describe('The first four Points', () => {

    test("Both players's scores are love when game start.", () => {
        const tennis = new Tennis('A', 'B');
        expect(tennis.getScoreOfPlayer('A')).toBe('love');
        expect(tennis.getScoreOfPlayer('B')).toBe('love');
    })

    test("Given A is at love, when A win a point, then A's score becomes 15.", () => {
        const tennis = new Tennis('A', 'B');
        tennis.winPoint('A');
        expect(tennis.getScoreOfPlayer('A')).toBe('15');
    })

    test("Given A is at 15, when A win a point, then A's score becomes 30.", () => {
        const tennis = new Tennis('A', 'B');
        tennis.setScoreOfPlayer('A', '15')
        tennis.winPoint('A');
        expect(tennis.getScoreOfPlayer('A')).toBe('30');
    })

    test("Given A is at 30, when A win a point, then A's score becomes 40.", () => {
        const tennis = new Tennis('A', 'B');
        tennis.setScoreOfPlayer('A', '30')
        tennis.winPoint('A');
        expect(tennis.getScoreOfPlayer('A')).toBe('40');
    })
})