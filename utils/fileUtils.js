import fs from "fs";
import path from "path";
import chalk from "chalk";

export function ensureDir(dirPath) {
    try {
        fs.mkdirSync(dirPath, { recursive: true });
    } catch (err) {
        console.error(chalk.red(`❌ Failed to create directory ${dirPath}: ${err.message}`));
        process.exit(1);
    }
}

export function writeFile(filePath, content) {
    try {
        fs.writeFileSync(filePath, content, "utf8");
        console.log(chalk.gray(`📝 ${filePath}`));
    } catch (err) {
        console.error(chalk.red(`❌ Failed to write ${filePath}: ${err.message}`));
        process.exit(1);
    }
}

export function copyFiles(sourceDir, targetDir) {
    try {
        const files = fs.readdirSync(sourceDir);
        files.forEach((file) => {
            const src = path.join(sourceDir, file);
            const dest = path.join(targetDir, file);
            fs.copyFileSync(src, dest);
            console.log(chalk.gray(`🖼️  Copied ${file} to ${targetDir}`));
        });
    } catch (err) {
        console.error(chalk.red(`❌ Failed to copy files from ${sourceDir}: ${err.message}`));
        process.exit(1);
    }
}