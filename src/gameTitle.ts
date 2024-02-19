import showBanner from "node-banner";

// function to display game title and tagline
export const displayGameTitleAndTagline = async () => {
  await showBanner(
    "Number Guessing Game",
    `\tCLI NUMBER GUESSING GAME WRITTEN IN TYPESCRIPT/NODE.JS
        ______________________________________________________
       \n`,
    "green",
    "gray"
  );
};
