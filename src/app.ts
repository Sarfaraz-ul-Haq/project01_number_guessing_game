#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import showBanner from "node-banner";
import { displayGameTitleAndTagline } from "./gameTitle.js";
import { promptUserToGuessNum } from "./guessTheNum.js";
import { promptUserToPlayAgain } from "./playAgain.js";

export const startGame = async () => {
  await displayGameTitleAndTagline();
  await promptUserToGuessNum();
  promptUserToPlayAgain();
};
startGame();
