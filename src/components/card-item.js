class TopBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
     <style>
         * {
             margin: 0;
             padding: 0;
             box-sizing: border-box;
         }
         :host {
             display: block;
             width: 100%;
             background-color: cornflowerblue;
             color: white;
             box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
         }
         h2 {
             padding: 16px;
         }
     </style>
     <article>
        <h2>Summer 2021 Anime</h2>
        <figure>
            <img src="" alt="">
            <figcaption>judul anime <span>bintang 5</span></figcaption>
        </figure>
     </article>`;
  }
}

customElements.define('top-bar', TopBar);
