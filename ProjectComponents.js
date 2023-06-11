class ProjectDescription extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    let description = this.attributes.description.value;
    let software = this.attributes.software.value;
    let skills = this.attributes.skills.value;

    {
      this.innerHTML = `      <div class="container">
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
</div>`;
    }
  }
}

class FeatureCard extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    let title = this.attributes.title.value;
    let description = this.attributes.description.value;

    setTimeout(() => {
      let start = `
  <div class="featureTile">
  <div style="width: 100%; margin: 10px">
  `;

      let end = `    </div>
  </div>`;

      let core = `
      <h2>${title}</h2>
      <p>
    ${description}
      </p>
      `;

      let content;

      content += start;

      content += this.CheckImage();
      content += core;

      content += this.CheckVideo();

      content += end;

      this.innerHTML = content;
    });
  }

  CheckVideo() {
    if (this.hasAttribute("video")) {
      let video = this.attributes.video.value;
      var videoBlock = `      <div style="width: 100%; margin: 10px">
    <div class="player">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/${video}"
        title="YouTube video player"
        frameborder="0"
        autoplay="0"
        allow="accelerometer;clipboard-write; encrypted-media; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>`;

      return videoBlock;
    }
    return "";
  }

  CheckImage() {
    if (this.hasAttribute("image")) {
      let image = this.attributes.image.value;

      var imageBlock = `<img src="${image}">`;

      return imageBlock;
    }
    return "";
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

    setTimeout(() => {
      this.innerHTML = `
    <h1 style="padding-top: 40px; font-weight: 700">${title}</h1>
    <h2 style="margin-top: -60px">${tagline}</h2>
    <iframe class="player" type="text/html" width="640" height="360"
      src="https://www.youtube.com/embed/${video}"
      frameborder="0"></iframe>
      `;
    });
  }
}

class ProjectFeature extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    setTimeout(() => {
      // Uses timeout to load DOM first
      let content = this.innerHTML;

      let featuresWorked = `
      <div class="featuresWorked">
        <h1 style="font-weight: 600; letter-spacing: 2px; font-size: 5vw">
          FEATURES
        </h1>
      </div>
  
      <div class="features">
        `;
      featuresWorked += content;
      featuresWorked += "</div>";

      this.innerHTML = featuresWorked;
    });
  }
}

customElements.define("project-intro", ProjectIntro);
customElements.define("project-features", ProjectFeature);
customElements.define("project-description", ProjectDescription);
customElements.define("feature-card", FeatureCard);
