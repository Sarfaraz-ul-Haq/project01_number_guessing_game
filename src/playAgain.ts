import inquirer from "inquirer";
import chalk from "chalk";
import showBanner from "node-banner";
import { start } from "./app.js";

// function to prompt user to play again or quit
export const promptUserToPlayAgain = async () => {
  const userAns = await inquirer.prompt({
    name: "continueOrNot",
    type: "list",
    choices: ["Play again", "Quit"],
    message: chalk.green("Select an option"),
  });

  const userAnswer = userAns.continueOrNot;

  if (userAnswer === "Play again") {
    start();
  } else {
    console.clear();
    await showBanner(`Thanks for playing !`, undefined, "green");
  }
};
