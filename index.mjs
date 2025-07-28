#!/usr/bin/env node
import chalk from "chalk";
import { generateFile } from "./commands/generate.mjs";
import { createProject } from "./commands/createProject.mjs";
import { showHelp } from "./utils/help.mjs";

const command = process.argv[2];

if (!command) {
  console.log(chalk.red("❌ No command provided. Use 'help' for usage information."));
  process.exit(1);
}

switch (command) {
  case "generate":
  case "g":
    generateFile(process.argv[3]);
    break;
  case "help":
  case "--help":
    showHelp();
    break;
  default:
    createProject(command, process.argv.includes("--force"));
}