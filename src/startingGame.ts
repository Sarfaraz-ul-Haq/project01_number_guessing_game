import chalk from "chalk";
import { createSpinner } from "nanospinner";

// sleep promise that resolves in 3 seconds
const sleep = async (): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
};

// function that animates a spinner with a message for 3 seconds
export const startingGame = async () => {
  console.log(
    chalk.red(
      ` Discover your results after 10 rounds of the number guessing game!`
    )
  );
  const spinner = createSpinner(chalk.green(` Starting Number Guessing Game`));
  spinner.start();
  await sleep();
  spinner.stop();
};
