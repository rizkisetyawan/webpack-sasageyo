customElements.define('anime-search', class extends HTMLElement {
  async connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <style>
      .search-wrapper {
        position: relative;
        margin-bottom: 3rem;
        display: flex;
        align-items: center;
      }
      .search-icon {
        width: 35px;
        height: 35px;
        position: absolute;
        right: 8px;
        padding: 8px;
        cursor: pointer;
      }
      .input-search {
        width: 100%;
        padding: 8px;
        border-radius: 8px;
        background-color: var(--bg-input);
        border: 1px solid var(--bg-input);
      }
      .input-search::placeholder {
        color: var(--text-secondary);
      }
    </style>
    <div class="search-wrapper">
      <input class="input-search" type="text" placeholder="Search" />
      <img
        class="search-icon"
        src="/src/assets/search-icon.png"
        alt="search icon"
      />
    </div>
    `;
  }
});
