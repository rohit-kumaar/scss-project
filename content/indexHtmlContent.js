export const indexHtmlContent = `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="author" content="Rohit Kumar" />
  <meta name="description" content="Your Project Description" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Your Project Title</title>

  <!-- Start : Favicon -->
  <link rel="icon" href="src/icons/favicon.ico" type="image/x-icon" />
  <link rel="android-chrome" sizes="192x192" href="src/icons/android-chrome-192x192.png" />
  <link rel="android-chrome" sizes="512x192" href="src/icons/android-chrome-512x512.png" />
  <link rel="apple-touch-icon" sizes="180x180" href="src/icons/apple-touch-icon.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="src/icons/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="src/icons/favicon-16x16.png" />
  <link rel="manifest" href="src/icons/site.webmanifest" />
  <!-- End   : Favicon -->

  <!-- Start : Custom CSS -->
  <link rel="stylesheet" href="src/css/style.css" />
  <!-- End   : Custom CSS -->
</head>

<body>
  <!-- Start : main -->
  <main class="container bg-primary-700" style="
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
        height: 100dvh;
        padding: 30px;
      ">
    <h1 style="
          color: white;
          font-size: clamp(0.6875rem, -0.0582rem + 3.7285vw, 3.125rem);
        ">
      Welcome! This is your SCSS project.
    </h1>

    <section style="display: flex; flex-wrap: wrap; gap: 20px; padding-inline: 20px">
      <button class="button button--primary">Primary</button>
      <button class="button button--secondary">Secondary</button>
      <button class="button button--disable">Disable</button>
      <button class="button button--transparent">Transparent</button>
    </section>

    <p style="padding-inline: 40px; color: white; text-align: center">
      For responsive font sizes, please refer to the
      <b>_function.scss</b> file. All font scaling logic and helper functions
      are defined there for consistency across the project. For example, you
      can set a responsive font size like font-size: fs(16, 32);. This will
      automatically scale the font between 16px and 32px based on the screen
      size.
    </p>
  </main>
  <!-- End   : main -->

  <!-- Start : Custom JS -->
  <script type="module" src="src/js/index.js"></script>
  <!-- End   : Custom JS -->
</body>

</html>`;
