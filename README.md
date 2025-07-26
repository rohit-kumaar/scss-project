# 📁 Create SCSS Folder Structure

Scss project is a command-line tool that helps you quickly set up a ready-to-use frontend project. It creates a clean folder structure with organized SCSS files, along with starter files for HTML, JavaScript, and Gulp tasks. This makes it easy to start building modern websites with a clear and maintainable layout.

## 🚀 Installation

```bash
npm install -g scss-project
npx scss-project <project-name>
cd <project-name>
npm i
npm start
```

## 🚧 Create SCSS Files via Command

```bash
scss-project g foldername/filename
```

📦 This will:

- 🔧 Create src/scss/foldername/\_filename.scss
- ✍️ Add boilerplate SCSS with @use "utilities/\_\_utilities-dir"
- 🔗 Auto-import into \_\_\*-dir.scss (sorted alphabetically)

## 📦 Features

- Creates a structured folder layout for frontend development
- Sets up SCSS architecture (base, layout, components, pages, utilities, vendors)
- Includes placeholder files like `index.js`, `style.scss`, `index.html`, and `gulpfile.js`
- Automatically writes `.gitignore` and `package.json`
- Optimized media query output: When you run the command gulp minifycss in the terminal, it takes your CSS file and combines all the same media queries into one group. This makes your CSS cleaner and easier to read. Then, it makes the CSS file smaller by removing extra spaces and unnecessary code. Finally, it saves the smaller, improved file as bundle.min.css, ready to use for your website.

```bash
gulp minifycss
```

```
.card {
 padding: 1rem;

 @media (max-width: 768px) {
   padding: 0.5rem;
 }
}

.header {
 font-size: 2rem;

 @media (max-width: 768px) {
   font-size: 1.5rem;
 }
}

```

Compiles to:

```
.card {
 padding: 1rem;
}

.header {
 font-size: 2rem;
}

@media (max-width: 768px) {
 .card {
   padding: 0.5rem;
 }
 .header {
   font-size: 1.5rem;
 }
}

```

## 📁 Folder Structure Generated

```
my-scss-project/
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

## 🔗 Links

[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://rohitkumar.netlify.app/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/-rohit-kumaar/)
