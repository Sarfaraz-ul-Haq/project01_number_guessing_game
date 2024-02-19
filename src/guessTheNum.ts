import inquirer from "inquirer";
import chalk from "chalk";

// function to prompt user to guess the number that is generated by the computer
export const promptUserToGuessNum = async () => {
  const userAnswer = await inquirer.prompt({
    name: "guess",
    type: "number",
    message: chalk.green("Guess the number (0 - 10) generated by the computer"),
    validate: (guess: number) => {
      if (isNaN(guess)) {
        return chalk.red("\nPlease press up key then enter a valid number:");
      }
      return true;
    },
  });

  const userGuessedNumber = userAnswer.guess;

  // computer generated random number (0 - 10)
  let computerGeneratedNumber = Math.round(Math.random() * 10);

  // compare user's guess with the computer generated random number
  if (userGuessedNumber === computerGeneratedNumber) {
    console.log(chalk.green("\nYour guess is right!\n"));
  } else if (userGuessedNumber < computerGeneratedNumber) {
    console.log(
      chalk.red(
        `\t\nYour guess is less than computer generated number -> (${computerGeneratedNumber})\n`
      )
    );
  } else if (userGuessedNumber > computerGeneratedNumber) {
    console.log(
      chalk.red(
        `\t\nYour guess is greater than computer generated number (${computerGeneratedNumber})\n`
      )
    );
  }
};