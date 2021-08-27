import Services from '../services';
import './loading-data';

customElements.define('anime-list-side', class extends HTMLElement {
  static get observedAttributes() { return ['loading', 'dataAnime', 'category', 'isMore']; }

  get loading() {
    return JSON.parse(this.getAttribute('loading'));
  }

  set loading(v) {
    this.setAttribute('loading', JSON.stringify(v));
  }

  get dataAnime() {
    return JSON.parse(this.getAttribute('dataAnime'));
  }

  set dataAnime(v) {
    this.setAttribute('dataAnime', JSON.stringify(v));
  }

  set isMore(v) {
    this.setAttribute('isMore', JSON.stringify(v));
  }

  get isMore() {
    return JSON.parse(this.getAttribute('isMore'));
  }

  set moreClickEvent(event) {
    this._moreClickEvent = () => event(this.category);
    this.render();
  }

  async connectedCallback() {
    this.category = this.getAttribute('category') || null;
    this.loading = true;
    const response = await Services.listAnime(this.category);
    this.dataAnime = response.anime || response.top;
    this.loading = false;
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <style>
        .star-wrapper-side {
          margin-left: 0;
        }
        .art-side {
          margin-bottom: 3rem;
        }
        .item-side-anime {
          display: flex;
          margin-bottom: 1rem;
        }
        .img-item-side {
          width: 75px;
          height: 100px;
          border-radius: 8px;
          object-fit: cover;
        }
        .wrap-item-info {
          width: 130px;
          padding: 4px 0;
          margin-left: 1rem;
          display: flex;
          flex-direction: column;
        }
        .text-genre {
          margin-top: 4px;
          font-size: 0.9rem;
          font-weight: 400;
        }
        .wrap-star-side {
          flex: 1;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
        }
        .fav-wrapper {
          margin-top: 8px;
          flex-shrink: 0;
          display: flex;
        }
        .fav-icon {
          width: 1rem;
          height: 1rem;
          margin-right: 0.5rem;
        }
        .fav-count {
          font-size: 0.9rem;
          font-weight: 400;
        }
      </style>
      <article class="art-side">
        <h2>${this.category}</h2>
        <div class="list-side-anime">
          ${this.loading ? '<loading-data/>' : this.dataAnime?.slice(0, 2).map((anime) => `
            <section class="item-side-anime">
              <img
                class="img-item-side"
                src="${anime.image_url}"
                alt="${anime.title}"
              />
              <div class="wrap-item-info">
                <h3>${anime.title}</h3>
                ${this.category === 'Top Character' ? `
                <div class="fav-wrapper">
                  <img
                    class="fav-icon"
                    src="/src/assets/fav-icon.png"
                    alt="favorite icon"
                  />
                  <p class="fav-count">${anime.favorites}</p>
                </div>
              ` : `
                <p class="text-genre">${anime.type}</p>
                <div class="wrap-star-side">
                  <span class="star-wrapper star-wrapper-side">
                    <img
                      class="star-icon"
                      src="/src/assets/star-icon.png"
                      alt="star icon"
                    />
                    <caption>
                    ${anime.score === 0 ? 'soon' : anime.score}
                    </caption>
                  </span>
                </div>
                `}
              </div>
            </section>
          `).join('')}
        </div>
        <button class="btn side-button">See More</button>
      </article>
    `;

    this.querySelector('button.side-button').addEventListener(
      'click',
      this._moreClickEvent,
    );
  }
});
