import chalk from "chalk";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { confirmPrompt } from "../utils/prompt.mjs";
import { validateProjectName } from "../utils/validate.mjs";
import { writeFile, ensureDir, copyFiles } from "../utils/fileUtils.mjs";
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
} from "../content/index.js";



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function createProject(projectName, forceFlag) {
    if (!validateProjectName(projectName)) {
        console.log(chalk.red("❌ Invalid project name."));
        process.exit(1);
    }

    const projectPath = path.join(process.cwd(), projectName);

    // Check if project folder exists and handle --force flag
    if (fs.existsSync(projectPath)) {
        if (!forceFlag) {
            console.log(chalk.red(`❌ Folder "${projectName}" already exists. Use --force to overwrite.`));
            process.exit(1);
        } else {
            const confirmed = await confirmPrompt(
                chalk.yellow(`⚠️  Folder "${projectName}" will be deleted. Continue? (y/n): `)
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

    directories.forEach(ensureDir);

    // Copy icons
    const sourceIconsDir = path.join(__dirname, "../resources/icons");
    const targetIconsDir = path.join(projectPath, "src/icons");
    if (fs.existsSync(sourceIconsDir)) {
        copyFiles(sourceIconsDir, targetIconsDir);
    } else {
        console.warn(chalk.yellow("⚠️  No 'icons' directory found in CLI to copy icons."));
    }

    // Package.json content
    const packageContent = `{
  "name": "${projectName}",
  "version": "1.0.0",
  "description": "Your project description",
  "main": "index.js",
  "scripts": {
    "start": "gulp watch",
    "gulp-minifyCss": "gulp minifyCss",
    "gulp-minifyJs": "gulp minifyJs",
    "build": "concurrently \\\"npm run gulp-minifyCss\\\" \\\"npm run gulp-minifyJs\\\""
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

    // File definitions
    const files = [
        // CSS
        [`${projectPath}/src/css/style.css`, cssContent],
        // JS
        [`${projectPath}/src/js/index.js`, indexJsContent],
        [`${projectPath}/src/js/bootstrap/bootstrap.bundle.min.js`, bootstrapBundleMinJsContent],
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
        [`${projectPath}/src/scss/components/__components-dir.scss`, componentsDirContent],
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
        [`${projectPath}/src/scss/utilities/__utilities-dir.scss`, utilitiesDirContent],
        [`${projectPath}/src/scss/utilities/_extend.scss`, extendContent],
        [`${projectPath}/src/scss/utilities/_function.scss`, functionContent],
        [`${projectPath}/src/scss/utilities/_mixins.scss`, ``],
        [`${projectPath}/src/scss/utilities/_utils.scss`, utilsContent],
        [`${projectPath}/src/scss/utilities/_variables.scss`, variablesContent],
        // SCSS Vendors
        [`${projectPath}/src/scss/vendors/__vendors-dir.scss`, vendorsDirContent],
        [`${projectPath}/src/scss/vendors/bootstrap/bootstrap.min.css`, bootstrapMinCssContent],
        [`${projectPath}/src/scss/vendors/owl_carousel/owl.carousel.min.css`, owlCarouselMinCssContent],
        [`${projectPath}/src/scss/vendors/owl_carousel/owl.theme.default.min.css`, owlThemeDefaultMinCssContent],
        // Root Level
        [`${projectPath}/.gitignore`, gitignoreContent],
        [`${projectPath}/gulpfile.js`, gulpFileContent],
        [`${projectPath}/index.html`, indexHtmlContent],
        [`${projectPath}/package.json`, packageContent],
    ];

    files.forEach(([filePath, content]) => {
        if (fs.existsSync(filePath)) {
            console.log(chalk.yellow(`⚠️  File already exists, skipping: ${filePath}`));
        } else {
            writeFile(filePath, content);
        }
    });

    console.log(chalk.green(`✅ Project "${projectName}" created successfully!`));
}