import chalk from "chalk";
import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import {
  baseContent,
  baseDirContent,
  bootstrapBundleMinJsContent,
  bootstrapMinCssContent,
  buttonContent,
  componentsDirContent,
  cssContent,
  extendContent,
  functionContent,
  gitignoreContent,
  gulpFileContent,
  indexHtmlContent,
  indexJsContent,
  jqueryMinJsContent,
  layoutContent,
  layoutDirContent,
  owlCarouselMinCssContent,
  owlCarouselMinJsContent,
  owlThemeDefaultMinCssContent,
  pagesDirContent,
  styleScssContent,
  typographyContent,
  uiDirContent,
  useUtils,
  utilitiesDirContent,
  utilsContent,
  variablesContent,
  vendorsDirContent,
  mixinsContent,
} from "../content/index.js";
import { copyFiles, ensureDir, writeFile } from "../utils/fileUtils.js";
import { confirmPrompt } from "../utils/prompt.js";
import { validateProjectName } from "../utils/validate.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function isCliInstalledGlobally(cliName) {
  try {
    execSync(`npm list -g --depth=0 ${cliName}`, { stdio: "ignore" });
    return true; // Installed globally
  } catch {
    return false; // Not installed globally
  }
}

export async function createProject(projectName, forceFlag) {
  if (!validateProjectName(projectName)) {
    console.log(chalk.red("❌ Invalid project name."));
    process.exit(1);
  }

  const projectPath = path.join(process.cwd(), projectName);

  // Check if project folder exists and handle --force flag
  if (fs.existsSync(projectPath)) {
    if (!forceFlag) {
      console.log(
        chalk.red(
          `❌ Folder "${projectName}" already exists. Use --force to overwrite.`
        )
      );
      process.exit(1);
    } else {
      const confirmed = await confirmPrompt(
        chalk.yellow(
          `⚠️  Folder "${projectName}" will be deleted. Continue? (y/n): `
        )
      );
      if (!confirmed) {
        console.log(chalk.red("❌ Project creation aborted."));
        process.exit(1);
      }
      fs.rmSync(projectPath, { recursive: true, force: true });
      console.log(chalk.yellow(`⚠️  Removed existing folder "${projectName}"`));
    }
  }

  // Directory structure
  const directories = [
    "/src/css",
    "/src/fonts",
    "/src/icons",
    "/src/images",
    "/src/js",
    "/src/js/bootstrap",
    "/src/js/jquery",
    "/src/js/owl_carousel",
    "/src/scss/base",
    "/src/scss/components",
    "/src/scss/layout",
    "/src/scss/pages",
    "/src/scss/ui",
    "/src/scss/utilities",
    "/src/scss/vendors",
    "/src/scss/vendors/bootstrap",
    "/src/scss/vendors/owl_carousel",
  ];

  directories.forEach((dir) => ensureDir(path.join(projectPath, dir)));

  // Copy icons
  const sourceIconsDir = path.join(__dirname, "../resources/icons");
  const targetIconsDir = path.join(projectPath, "src/icons");
  if (fs.existsSync(sourceIconsDir)) {
    copyFiles(sourceIconsDir, targetIconsDir);
  } else {
    console.warn(
      chalk.yellow("⚠️  No 'icons' directory found in CLI to copy icons.")
    );
  }

  // Package.json content
  const packageContent = `{
  "name": "${projectName}",
  "version": "1.0.0",
  "description": "Your project description",
  "main": "index.js",
  "scripts": {
    "start": "gulp watch",
    "buildcss": "gulp minifyCss",
    "buildjs": "gulp minifyJs",
    "build": "concurrently \\\"npm run buildcss\\\" \\\"npm run buildjs\\\""
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "concurrently": "^9.2.1",
    "gulp": "^5.0.1",
    "gulp-autoprefixer": "^10.0.0",
    "gulp-clean-css": "^4.3.0",
    "gulp-concat": "^2.6.1",
    "gulp-csso": "^4.0.1",
    "gulp-dart-sass": "^1.1.0",
    "gulp-merge-media-queries": "^0.2.1",
    "gulp-minify": "^3.1.0",
    "gulp-sass": "^6.0.1",
    "gulp-sourcemaps": "^3.0.0",
    "sass": "^1.93.1"
  }
}`;

  // File definitions
  const files = [
    // CSS
    ["src/css/style.css", cssContent],
    // JS
    ["src/js/index.js", indexJsContent],
    ["src/js/bootstrap/bootstrap.bundle.min.js", bootstrapBundleMinJsContent],
    ["src/js/jquery/jquery.min.js", jqueryMinJsContent],
    ["src/js/owl_carousel/owl.carousel.min.js", owlCarouselMinJsContent],
    // SCSS Main Entry
    ["src/scss/style.scss", styleScssContent],
    // SCSS Base
    ["src/scss/base/__base-dir.scss", baseDirContent],
    ["src/scss/base/_base.scss", baseContent],
    ["src/scss/base/_typography.scss", typographyContent],
    // SCSS Components
    ["src/scss/components/__components-dir.scss", componentsDirContent],
    // SCSS Layout
    ["src/scss/layout/__layout-dir.scss", layoutDirContent],
    ["src/scss/layout/_footer.scss", useUtils],
    ["src/scss/layout/_header.scss", useUtils],
    ["src/scss/layout/_layout.scss", layoutContent],
    ["src/scss/layout/_main.scss", useUtils],
    ["src/scss/layout/_navigation.scss", useUtils],
    ["src/scss/layout/_sidebar.scss", useUtils],
    // SCSS Pages
    ["src/scss/pages/__pages-dir.scss", pagesDirContent],
    ["src/scss/pages/_login.scss", useUtils],
    // SCSS UI
    ["src/scss/ui/__ui-dir.scss", uiDirContent],
    ["src/scss/ui/_buttons.scss", buttonContent],
    // SCSS Utilities
    ["src/scss/utilities/__utilities-dir.scss", utilitiesDirContent],
    ["src/scss/utilities/_extend.scss", extendContent],
    ["src/scss/utilities/_function.scss", functionContent],
    ["src/scss/utilities/_mixins.scss", mixinsContent],
    ["src/scss/utilities/_utils.scss", utilsContent],
    ["src/scss/utilities/_variables.scss", variablesContent],
    // SCSS Vendors
    ["src/scss/vendors/__vendors-dir.scss", vendorsDirContent],
    ["src/scss/vendors/bootstrap/bootstrap.min.css", bootstrapMinCssContent],
    [
      "src/scss/vendors/owl_carousel/owl.carousel.min.css",
      owlCarouselMinCssContent,
    ],
    [
      "src/scss/vendors/owl_carousel/owl.theme.default.min.css",
      owlThemeDefaultMinCssContent,
    ],
    // Root Level
    [".gitignore", gitignoreContent],
    ["gulpfile.js", gulpFileContent],
    ["index.html", indexHtmlContent],
    ["package.json", packageContent],
  ];

  files.forEach(([relPath, content]) => {
    const filePath = path.join(projectPath, relPath);
    if (fs.existsSync(filePath)) {
      console.log(
        chalk.yellow(`⚠️  File already exists, skipping: ${filePath}`)
      );
    } else {
      writeFile(filePath, content);
    }
  });

  console.log(chalk.yellow("Please wait ..."));

  if (!isCliInstalledGlobally("scss-project")) {
    try {
      console.log(chalk.blue("🌍 Installing CLI globally..."));
      execSync("npm install -g scss-project", { stdio: "inherit" });
      console.log(chalk.green("✅ CLI installed globally!"));
    } catch (err) {
      console.error(chalk.red("❌ Failed to install CLI globally."));
    }
  } else {
    console.log(
      chalk.yellow(
        "⚠️  CLI 'scss-project' already installed globally. Skipping global install."
      )
    );
  }

  console.log(chalk.blue("📦 Dependencies setup..."));

  const installDeps = await confirmPrompt(
    chalk.yellow("👉 Do you want to install dependencies now? (y/n): ")
  );

  if (installDeps) {
    console.log(
      chalk.blue("📦 Installing dependencies... This may take a minute ⏳")
    );
    try {
      execSync("npm install", { stdio: "ignore", cwd: projectPath });
      console.log(
        chalk.green(`🚀 Successfully! created project "${projectName}"`)
      );
    } catch (error) {
      console.error(
        chalk.red(
          "❌ Failed to install dependencies. Please run 'npm install' manually."
        )
      );
    }
  } else {
    console.log(
      chalk.yellow(
        "⚠️ Skipping dependency installation. Run 'npm install' inside the project later."
      )
    );
  }

  console.log(
    `${chalk.yellow("👉 Get started with the following commands: ")}`
  );
  console.log(`${chalk.cyan(`$ cd ${projectName}`)}`);
  console.log(`${chalk.cyan("$ npm start")}`);
}
