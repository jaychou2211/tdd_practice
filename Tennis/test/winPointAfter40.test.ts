import { expect, describe, test } from "vitest";
import { Tennis } from "../src/Tennis";


describe('Win the point after 40.', () => {

    test("Given 3-0,when A wins the point,then A wins", () => {
        const tennis = new Tennis('A', 'B');
        tennis.setScoreOfPlayer('A',3);
        tennis.winPoint('A');
        expect(tennis.getScore()).toBe('A WINS');
    })

    test("Given 6-5,when A wins the point,then A wins", () => {
        const tennis = new Tennis('A', 'B');
        tennis.setScoreOfPlayer('A',6);
        tennis.setScoreOfPlayer('B',5);
        tennis.winPoint('A');
        expect(tennis.getScore()).toBe('A WINS');
    })

    test("Given 2-3,when A wins the point,then DEUCE", () => {
        const tennis = new Tennis('A', 'B');
        tennis.setScoreOfPlayer('A',2);
        tennis.setScoreOfPlayer('B',3);
        tennis.winPoint('A');
        expect(tennis.getScore()).toBe('DEUCE');
    })

    test("Given 5-6,when A wins the point,then DEUCE", () => {
        const tennis = new Tennis('A', 'B');
        tennis.setScoreOfPlayer('A',5);
        tennis.setScoreOfPlayer('B',6);
        tennis.winPoint('A');
        expect(tennis.getScore()).toBe('DEUCE');
    })

    test("Given 6-6,when A wins the point,then ADVANTAGE A", () => {
        const tennis = new Tennis('A', 'B');
        tennis.setScoreOfPlayer('A',6);
        tennis.setScoreOfPlayer('B',6);
        tennis.winPoint('A');
        expect(tennis.getScore()).toBe('ADVANTAGE A');
    })

})