import chalk from "chalk";
import fs from "fs";
import path from "path";
import { validatePath, validateFileName } from "../utils/validate.js";
import { writeFile, ensureDir } from "../utils/fileUtils.js";

export function generateFile(argument) {
    if (!argument) {
        console.log(chalk.red("❗ Please specify a path. Example: scss-project generate pages/about"));
        process.exit(1);
    }

    const inputPath = argument.split("/");
    const fileName = inputPath.pop();
    const folderPath = inputPath.join("/");

    // Validate inputs
    if (!folderPath) {
        console.log(chalk.red("❌ Folder path is required. Example: generate pages/about"));
        process.exit(1);
    }
    if (!validatePath(folderPath) || !validateFileName(fileName)) {
        console.log(chalk.red("❌ Invalid characters in folder or file name."));
        process.exit(1);
    }

    const targetDir = path.join(process.cwd(), "src/scss", folderPath);
    const targetFile = path.join(targetDir, `_${fileName}.scss`);

    // Create folder if it doesn't exist
    ensureDir(targetDir);

    // File content
    const content = `@use "utilities/__utilities-dir" as *;\n\n.${fileName} {\n  // styles here\n}\n`;

    // Write file if it doesn't already exist
    if (fs.existsSync(targetFile)) {
        console.log(chalk.yellow(`⚠️  File already exists: src/scss/${folderPath}/_${fileName}.scss`));
    } else {
        writeFile(targetFile, content);
        console.log(chalk.green(`✅ Created: src/scss/${folderPath}/_${fileName}.scss`));
    }

    // Auto-import into __*-dir.scss
    const dirBaseName = path.basename(folderPath);
    const dirImportFile = path.join(targetDir, `__${dirBaseName}-dir.scss`);
    const importStatement = `@use "${fileName}";\n`;

    if (fs.existsSync(dirImportFile)) {
        const currentContent = fs.readFileSync(dirImportFile, "utf8");
        if (!currentContent.includes(`@use "${fileName}"`)) {
            const newContent = importStatement + currentContent;
            writeFile(dirImportFile, newContent);
            console.log(chalk.gray(`🔗 Updated: ${path.basename(dirImportFile)} with @use "${fileName}"`));
        } else {
            console.log(chalk.gray(`ℹ️  Import already exists in ${path.basename(dirImportFile)}`));
        }
    } else {
        console.log(chalk.yellow(`⚠️  Could not find ${dirImportFile} to auto-import. Skipped.`));
    }
}