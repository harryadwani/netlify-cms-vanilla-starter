function render(container, html) {
  container.innerHTML = html;
}

(async function () {
  const app = document.getElementById('app');

  // Fetching and rendering the header
  let headerData = await fetch('content/header.json');
  let { title, subtitle } = await headerData.json();
  render(app, `<h1>${title}</h1><h2>${subtitle}</h2>`);

  // Fetching and rendering about section
  let aboutData = await fetch('content/about.json');
  let { message } = await aboutData.json();
  const aboutSection = document.createElement('p');
  app.appendChild(aboutSection);
  render(aboutSection, message);

  // Navigation link to CMS admin
  const nav = document.createElement('nav');
  app.appendChild(nav);
  render(nav, `Edit content at the <a href="/admin">admin panel</a>.`);
})();

// Example JSON content (content/header.json)
// {
//   "title": "Welcome to Our Website",
//   "subtitle": "Learn more about what we do"
// }

// Example JSON content (content/about.json)
// {
//   "message": "Here is a detailed paragraph about the company, its mission, and services. Edit this content from the admin panel to keep it updated."
// }
