import chalk from "chalk";

export function showHelp() {
    console.log(chalk.cyan(`
Usage: scss-project <command> [options]

Commands:
  generate <path>  Generate a new SCSS file (e.g., generate pages/about)
  <project-name>   Create a new project with the given name
  help             Show this help message

Options:
  --force          Overwrite existing project folder
  `));
}