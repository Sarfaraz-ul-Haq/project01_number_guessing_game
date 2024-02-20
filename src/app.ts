#! /usr/bin/env node

import { displayGameTitleAndTagline } from "./gameTitle.js";
import { startingGame } from "./startingGame.js";
import { promptUserToGuessNum } from "./guessTheNum.js";
import { promptUserToPlayAgain } from "./playAgain.js";

export const start = async () => {
  await startingGame();
  await displayGameTitleAndTagline();
  // await promptUserToGuessNum();
  // promptUserToPlayAgain();
};

start();
