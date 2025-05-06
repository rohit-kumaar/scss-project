# create-myfolder

A CLI tool to quickly scaffold a structured frontend project with pre-defined directories and starter files for JavaScript, SCSS, assets, and more.

## 📦 Features

- Creates a structured folder layout for frontend development
- Sets up SCSS architecture (base, layout, components, pages, utilities, vendors)
- Includes placeholder files like `index.js`, `style.scss`, `index.html`, and `gulpfile.js`
- Automatically writes `.gitignore` and `package.json`
- Uses `chalk` for clean terminal output
- Optional `--force` flag to overwrite existing project directory

## 🚀 Installation

### Option 1: Local

Clone this repo or save the script file:

```bash
chmod +x create-myfolder.js
npm install
```

### Option 2: Global (for CLI usage)

```bash
npm link
```

## 🛠️ Usage

```bash
create-myfolder <project-name>
```

Example:

```bash
create-myfolder my-awesome-project
```

If the folder already exists, use the `--force` flag to overwrite:

```bash
create-myfolder my-awesome-project --force
```

## 📁 Folder Structure Generated

```
my-awesome-project/
├── .gitignore
├── gulpfile.js
├── index.html
├── package.json
└── src/
    ├── fonts/
    ├── icons/
    ├── images/
    ├── js/
    │   ├── index.js
    │   ├── bootstrap/
    │   ├── jquery/
    │   └── owl_carousel/
    └── scss/
        ├── style.scss
        ├── base/
        │   ├── _base.scss
        │   ├── _typography.scss
        │   └── __base-dir.scss
        ├── components/
        │   ├── _button.scss
        │   ├── _dropdown.scss
        │   └── __components-dir.scss
        ├── layout/
        │   ├── _footer.scss
        │   ├── _header.scss
        │   ├── _layout.scss
        │   ├── _main.scss
        │   ├── _navigation.scss
        │   ├── _sidebar.scss
        │   └── __layout-dir.scss
        ├── pages/
        │   ├── _contact.scss
        │   ├── _login.scss
        │   └── __pages-dir.scss
        ├── utilities/
        │   ├── _extend.scss
        │   ├── _function.scss
        │   ├── _icons.scss
        │   ├── _mixins.scss
        │   ├── _utils.scss
        │   ├── _variables.scss
        │   └── __utilities-dir.scss
        └── vendors/
            ├── __vendors-dir.scss
            ├── bootstrap/
            │   └── bootstrap.min.css
            └── owl_carousel/
                ├── owl.carousel.min.css
                └── owl.theme.default.min.css
```

## 🧠 How It Works

1. Parses the project name from CLI input.
2. Verifies if the target directory exists.
3. If not, it:
   - Creates the full folder tree.
   - Writes all predefined file templates.
   - Displays progress with `chalk`-styled output.

## 📄 License

MIT
