import { expect, describe, test } from "vitest";
import { Tennis } from "../src/Tennis";


describe('The first four Points', () => {

    test("Both players's scores are love when game start.", () => {
        const tennis = new Tennis('A', 'B');
        expect(tennis.getScore()).toBe('LOVE ALL');
    })

    test("Given A is at love, when A win a point, then A's score becomes 15.", () => {
        const tennis = new Tennis('A', 'B');
        tennis.winPoint('A');
        expect(tennis.getScore()).toBe('FIFTEEN,LOVE');
    })

    test("Given A is at 15, when A win a point, then A's score becomes 30.", () => {
        const tennis = new Tennis('A', 'B');
        tennis.setScoreOfPlayer('A', 1);
        tennis.winPoint('A');
        expect(tennis.getScore()).toBe('THIRTY,LOVE');
    })

    test("Given A is at 30, when A win a point, then A's score becomes 40.", () => {
        const tennis = new Tennis('A', 'B');
        tennis.setScoreOfPlayer('A', 2);
        tennis.winPoint('A');
        expect(tennis.getScore()).toBe('FORTY,LOVE');
    })

    test("Given 1-3, when A win a point, then A's score becomes 40.", () => {
        const tennis = new Tennis('A', 'B');
        tennis.setScoreOfPlayer('A', 1);
        tennis.setScoreOfPlayer('B', 3);
        tennis.winPoint('A');
        expect(tennis.getScore()).toBe('THIRTY,FORTY');
    })

    test("Given 0-2, when A win a point, then A's score becomes 40.", () => {
        const tennis = new Tennis('A', 'B');
        tennis.setScoreOfPlayer('A', 0);
        tennis.setScoreOfPlayer('B', 2);
        tennis.winPoint('B');
        expect(tennis.getScore()).toBe('LOVE,FORTY');
    })
})