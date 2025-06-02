#!/usr/bin/env node
import chalk from "chalk";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { baseContent } from "./content/baseContent.js";
import { baseDirContent } from "./content/baseDirContent.js";
import { bootstrapBundleMinJsContent } from "./content/bootstrapBundleMinJsContent.js";
import { bootstrapMinCssContent } from "./content/bootstrapMinCssContent.js";
import { buttonContent } from "./content/buttonContent.js";
import { componentsDirContent } from "./content/componentsDirContent.js";
import { cssContent } from "./content/cssContent.js";
import { extendContent } from "./content/extendContent.js";
import { functionContent } from "./content/functionContent.js";
import { gitignoreContent } from "./content/gitignoreContent.js";
import { gulpFileContent } from "./content/gulpFileContent.js";
import { indexHtmlContent } from "./content/indexHtmlContent.js";
import { indexJsContent } from "./content/indexJsContent.js";
import { jqueryMinJsContent } from "./content/jqueryMinJsContent.js";
import { layoutContent } from "./content/layoutContent.js";
import { layoutDirContent } from "./content/layoutDirContent.js";
import { owlCarouselMinCssContent } from "./content/owlCarouselMinCssContent.js";
import { owlCarouselMinJsContent } from "./content/owlCarouselMinJsContent.js";
import { owlThemeDefaultMinCssContent } from "./content/owlThemeDefaultMinCssContent.js";
import { pagesDirContent } from "./content/pagesDirContent.js";
import { styleScssContent } from "./content/styleScssContent.js";
import { typographyContent } from "./content/typographyContent.js";
import { uiDirContent } from "./content/uiDirContent.js";
import { useUtils } from "./content/useUtils.js";
import { utilitiesDirContent } from "./content/utilitiesDirContent.js";
import { utilsContent } from "./content/utilsContent.js";
import { variablesContent } from "./content/variablesContent.js";
import { vendorsDirContent } from "./content/vendorsDirContent.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectName = process.argv[2];

if (!projectName) {
  console.log("❗ Usage: scss-project <project-name>");
  process.exit(1);
}

const projectPath = path.join(process.cwd(), projectName);
const forceFlag = process.argv.includes("--force");

const packageContent = `{
  "name": "${projectName}",
  "version": "1.0.0",
  "description": "Your project description",
  "main": "index.js",
  "scripts": {
    "start": "gulp watch",
    "gulp-minifycss": "gulp minifycss",
    "gulp-minifyjs": "gulp minifyjs",
    "build": "concurrently \\\"npm run gulp-minifycss\\\" \\\"npm run gulp-minifyjs\\\""
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "concurrently": "^9.0.0",
    "gulp": "^4.0.2",
    "gulp-autoprefixer": "^8.0.0",
    "gulp-clean-css": "^4.3.0",
    "gulp-concat": "^2.6.1",
    "gulp-csso": "^4.0.1",
    "gulp-merge-media-queries": "^0.2.1",
    "gulp-minify": "^3.1.0",
    "gulp-sass": "^6.0.1",
    "gulp-sourcemaps": "^3.0.0",
    "sass": "^1.54.5",
    "gulp-dart-sass": "^1.1.0"
  }
}`;

// ========== Utility Functions ==========
function writeFile(filePath, content) {
  try {
    fs.writeFileSync(filePath, content, "utf8");
    console.log(chalk.gray(`📝 ${filePath}`));
  } catch (err) {
    console.error(chalk.red(`❌ Failed to write ${filePath}: ${err.message}`));
  }
}

function createFolders(paths) {
  paths.forEach((dir) => fs.mkdirSync(dir, { recursive: true }));
}

// ========== Main Execution ==========
try {
  if (fs.existsSync(projectPath)) {
    if (!forceFlag) {
      console.log(
        chalk.red(
          `❌ Folder "${projectName}" already exists. Use --force to overwrite.`
        )
      );
      process.exit(1);
    } else {
      console.log(
        chalk.yellow(`⚠️  Overwriting existing folder "${projectName}"`)
      );
      fs.rmSync(projectPath, { recursive: true, force: true });
    }
  }

  // === Directory Structure ===
  const directories = [
    `${projectPath}/src/css`,
    `${projectPath}/src/fonts`,
    `${projectPath}/src/icons`,
    `${projectPath}/src/images`,
    `${projectPath}/src/js`,
    `${projectPath}/src/js/bootstrap`,
    `${projectPath}/src/js/jquery`,
    `${projectPath}/src/js/owl_carousel`,
    `${projectPath}/src/scss/base`,
    `${projectPath}/src/scss/components`,
    `${projectPath}/src/scss/components/ui`,
    `${projectPath}/src/scss/layout`,
    `${projectPath}/src/scss/pages`,
    `${projectPath}/src/scss/utilities`,
    `${projectPath}/src/scss/vendors`,
    `${projectPath}/src/scss/vendors/bootstrap`,
    `${projectPath}/src/scss/vendors/owl_carousel`,
  ];

  createFolders(directories);

  // === Copy Icons AFTER creating folders ===
  const sourceIconsDir = path.join(__dirname, "icons");
  const targetIconsDir = path.join(projectPath, "src/icons");

  if (fs.existsSync(sourceIconsDir)) {
    const iconFiles = fs.readdirSync(sourceIconsDir);
    iconFiles.forEach((file) => {
      const src = path.join(sourceIconsDir, file);
      const dest = path.join(targetIconsDir, file);
      fs.copyFileSync(src, dest);
      console.log(chalk.gray(`🖼️  Copied ${file} to src/icons/`));
    });
  } else {
    console.warn(
      chalk.yellow(
        "⚠️  No 'icons' directory found in your CLI project to copy icons."
      )
    );
  }

  // === File Definitions ===
  const files = [
    // CSS
    [`${projectPath}/src/css/style.css`, cssContent],

    // JS
    [`${projectPath}/src/js/index.js`, indexJsContent],
    [`${projectPath}/src/js/bootstrap/bootstrap.bundle.min.js`,bootstrapBundleMinJsContent],
    [`${projectPath}/src/js/jquery/jquery.min.js`, jqueryMinJsContent],
    [`${projectPath}/src/js/owl_carousel/owl.carousel.min.js`, owlCarouselMinJsContent],

    // SCSS Main Entry
    [`${projectPath}/src/scss/style.scss`, styleScssContent],

    // SCSS Base
    [`${projectPath}/src/scss/base/__base-dir.scss`, baseDirContent],
    [`${projectPath}/src/scss/base/_base.scss`, baseContent],
    [`${projectPath}/src/scss/base/_typography.scss`, typographyContent],

    // SCSS Components
    [`${projectPath}/src/scss/components/ui/__ui-dir.scss`, uiDirContent],
    [`${projectPath}/src/scss/components/ui/_button.scss`, buttonContent],
    [
      `${projectPath}/src/scss/components/__components-dir.scss`,
      componentsDirContent,
    ],
    [`${projectPath}/src/scss/components/_component-name.scss`, useUtils],

    // SCSS Layout
    [`${projectPath}/src/scss/layout/__layout-dir.scss`, layoutDirContent],
    [`${projectPath}/src/scss/layout/_footer.scss`, useUtils],
    [`${projectPath}/src/scss/layout/_header.scss`, useUtils],
    [`${projectPath}/src/scss/layout/_layout.scss`, layoutContent],
    [`${projectPath}/src/scss/layout/_main.scss`, useUtils],
    [`${projectPath}/src/scss/layout/_navigation.scss`, useUtils],
    [`${projectPath}/src/scss/layout/_sidebar.scss`, useUtils],

    // SCSS Pages
    [`${projectPath}/src/scss/pages/__pages-dir.scss`, pagesDirContent],
    [`${projectPath}/src/scss/pages/_login.scss`, useUtils],

    // SCSS Utilities
    [
      `${projectPath}/src/scss/utilities/__utilities-dir.scss`,
      utilitiesDirContent,
    ],
    [`${projectPath}/src/scss/utilities/_extend.scss`, extendContent],
    [`${projectPath}/src/scss/utilities/_function.scss`, functionContent],
    [`${projectPath}/src/scss/utilities/_mixins.scss`, ``],
    [`${projectPath}/src/scss/utilities/_utils.scss`, utilsContent],
    [`${projectPath}/src/scss/utilities/_variables.scss`, variablesContent],

    // SCSS Vendors
    [`${projectPath}/src/scss/vendors/__vendors-dir.scss`, vendorsDirContent],
    [
      `${projectPath}/src/scss/vendors/bootstrap/bootstrap.min.css`,
      bootstrapMinCssContent,
    ],
    [
      `${projectPath}/src/scss/vendors/owl_carousel/owl.carousel.min.css`,
      owlCarouselMinCssContent,
    ],
    [
      `${projectPath}/src/scss/vendors/owl_carousel/owl.theme.default.min.css`,
      owlThemeDefaultMinCssContent,
    ],

    // Root Level
    [`${projectPath}/.gitignore`, gitignoreContent],
    [`${projectPath}/gulpfile.js`, gulpFileContent],
    [`${projectPath}/index.html`, indexHtmlContent],
    [`${projectPath}/package.json`, packageContent],
  ];

  files.forEach(([filePath, content]) => writeFile(filePath, content));

  console.log(chalk.green(`✅ Project "${projectName}" created successfully!`));
} catch (err) {
  console.error(
    chalk.red(`❌ Error creating project "${projectName}": ${err.message}`)
  );
  process.exit(1);
}
