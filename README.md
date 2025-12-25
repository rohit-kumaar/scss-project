### 📁 Create SCSS Folder Structure

SCSS Project is a CLI tool that sets up a ready-to-use frontend boilerplate with structured SCSS, HTML, JS, and Gulp tasks for faster, maintainable web development.

### 🚀 Installation

```bash
npm install -g scss-project
npx scss-project <project-name>
```

**You can use the `scss/` folder with any modern frontend setup like:**

- Angular
- React
- Vue

It provides a modular architecture (base, components, layout, pages, utilities, vendors) for `clean`, `reusable`, and `maintainable` styles.
You can also add third-party libraries like `Bootstrap` or `Owl Carousel` in the `vendors/` folder for extended functionality.

### 🚧 Create SCSS Files via Command

```bash
scss-project g foldername/filename
```

This will:

- 🔧 Create src/scss/foldername/\_filename.scss
- ✍️ Add boilerplate SCSS with @use "utilities/\_\_utilities-dir"
- 🔗 Auto-import into \_\_\*-dir.scss (sorted alphabetically)

### 📦 Features

Running gulp minifycss merges duplicate media queries, cleans and minifies the CSS, and outputs a smaller, optimized file as bundle.min.css for your website.

```bash
npm run buildcss
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

### 📁 Folder Structure Generated

```
Project/
├── .gitignore
├── gulpfile.js
├── index.html
├── package.json
└── src/
    ├── css/
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
        │   ├── _login.scss
        │   └── __pages-dir.scss
        ├── ui/
        │   ├── _button.scss
        │   └── __ui-dir.scss
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
