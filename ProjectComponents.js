class ProjectDescription extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    let description = this.attributes.description.value;
    let software = this.attributes.software.value;
    let skills = this.attributes.skills.value;

    this.innerHTML =

      `      <div class="container">
<div class="textBox">
  <h2>Description</h2>
  <p>
    ${description}
  </p>
</div>

<div class="textBox">
  <div id="col11">
    <div id="cont">
      <h2>Software</h2>
      <p>${software}</p>
    </div>

    <div id="cont">
      <h2 id="subHalf">Skills/Topics Explored</h2>
      <p>
        ${skills}
      </p>
    </div>
  </div>
</div>
</div>`
  }
}

class FeatureCard extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    let title = this.attributes.title.value;
    let description = this.attributes.description.value;
    let image = this.attributes.image.value;
    let video = this.attributes.video.value;

    this.innerHTML = `
    <div class="featureTile">
    <div style="width: 100%; margin: 10px">
      <div style="width: 100%; margin: 10px">
        <div class="player">
          <iframe
            width="560"
            height="315"
            src="${video}"
            title="YouTube video player"
            frameborder="0"
            autoplay="0"
            allow="accelerometer;clipboard-write; encrypted-media; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <h2>${title}</h2>
      <p>
${description}
      </p>
    </div>
  </div>
    `
  }
}

class ProjectIntro extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    let title = this.attributes.title.value;
    let tagline = this.attributes.tagline.value;
    let video = this.attributes.video.value;

    this.innerHTML = `
    <h1 style="padding-top: 40px; font-weight: 700">${title}</h1>
    <h2 style="margin-top: -60px">${tagline}</h2>
    <iframe class="player" type="text/html" width="640" height="360"
      src="${video}"
      frameborder="0"></iframe>
      `
  }
}

class ProjectFeature extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    let featuresWorked = `
    <div class="featuresWorked">
      <h1 style="font-weight: 600; letter-spacing: 2px; font-size: 8em">
        FEATURES
      </h1>
      <h2 style="font-size: 4.5em; margin-top: -69px; font-weight: 600">
        WORKED ON
      </h2>
    </div>

    <div class="features">
      `

    this.insertAdjacentHTML('afterbegin', featuresWorked)
    this.insertAdjacentHTML('beforeend', '</div>')
  }
}

customElements.define("project-intro", ProjectIntro);
customElements.define("project-features", ProjectFeature);
customElements.define("project-description", ProjectDescription);
customElements.define("feature-card", FeatureCard);
