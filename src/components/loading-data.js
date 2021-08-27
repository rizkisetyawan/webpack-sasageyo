customElements.define('loading-data', class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <style>
          .loading {
            height: 100%;
            padding: 3rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          .img-loading {
            margin-bottom; 1rem;
            height: 400px;
          }
        </style>
        <div class="loading">
          <h3>Loading ...</h3>  
        </div>
      `;
  }
});
