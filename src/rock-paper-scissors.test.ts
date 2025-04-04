import { play } from './rock-paper-scissors';

describe("play", () => {
    test.each([
        [" rock", "rock", 0], //tests if it matters if theres a space in front of the word
        ["rock", "rock ", 0], //tests if it matters if theres a space in the back of the word
        ["rock ", "paper", 2], //tests if it works default
        ["rock", "Scissors",1], //tests if it matters if something is Capitalized in player 2
        ["pAper", "rock", 1], //tests if it matters if something is capitalized in player 1
        ["paper", "Paper", 0], // rest are testing with the amount (adding more capital letters and spaces)
        ["paper", "sCiSsors",2], 
        ["     scisSOrs", "rock  ", 2],
        ["scissors     ", "   paper", 1],
        ["scissors   ", "scissors",0],
    ])("play(%s, %s) == %s", (player1, player2, expected) => {
        expect(play(player1, player2)).toBe(expected);
    });
});
