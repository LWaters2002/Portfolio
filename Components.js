class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <link rel="stylesheet" href="/Navbar.css" />
      <nav id = "navbar">
        <div id="navgroup">
          <h3 class="nav_item">
            <a href="/index.html" style="text-decoration: none">HOME</a>
          </h3>
          <h3 class="nav_item">
            <a href="/index.html#portfolio" style="text-decoration: none">PORTFOLIO</a>
          </h3>
          <h3 class="nav_item">
            <a href="/experiments.html" style="text-decoration: none">EXPERIMENTS</a>
          </h3>
          <h3 class="nav_item">
            <a href="./contact.html" style="text-decoration: none">CONTACT</a>
          </h3>
          <h3 class="nav_item">
            <a href="./cv.html" style="text-decoration: none">CV</a>
          </h3>
        </div>
    </nav >
      `
  }
}

class ProjectCard extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    let title = this.attributes.title.value;
    let description = this.attributes.description.value;
    let image = this.attributes.image.value;
    let link = this.attributes.link.value;
    let tags = this.attributes.sortTags.value;

    this.innerHTML =
      `<div class="projectTile" tags="${tags}">
      <a href="${link}">
        <img src="${image}" alt="" />

        <div class="cardCover">
          <h5>${title}</h5>
          <p>${description}</p>
          <h4>Tags: ${tags}</h4>
        </div>
      </a>
    </div>
    `
  }
}

customElements.define("header-bar", Header);
customElements.define("project-card", ProjectCard);
