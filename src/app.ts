#! /usr/bin/env node

import { displayGameTitleAndTagline } from "./gameTitle.js";
import { promptUserToGuessNum } from "./guessTheNum.js";
import { promptUserToPlayAgain } from "./playAgain.js";

export const startGame = async () => {
  await displayGameTitleAndTagline();
  await promptUserToGuessNum();
  promptUserToPlayAgain();
};
startGame();
