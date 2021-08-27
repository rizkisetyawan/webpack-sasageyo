customElements.define('anime-search', class extends HTMLElement {
  async connectedCallback() {
    this.render();
  }

  set clickEventSearch(event) {
    this._clickEventSearch = event;
    this.render();
  }

  get valueSearch() {
    return this.querySelector('.input-search').value;
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
        color: #fff;
        background-color: var(--bg-input);
        border: 1px solid var(--bg-input);
      }
      .input-search:focus-visible {
        outline: none;
      }
      .input-search::placeholder {
        color: var(--text-secondary);
      }
    </style>
    <div class="search-wrapper">
      <input class="input-search" type="text" placeholder="Search Anime ..." />
      <img
        class="search-icon"
        src="/src/assets/search-icon.png"
        alt="search icon"
      />
    </div>
    `;

    this.querySelector('.search-icon').addEventListener('click', this._clickEventSearch);
  }
});
