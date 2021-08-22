import DataSource from '../data/data-source';
import './loading-data';

customElements.define('anime-content-list', class extends HTMLElement {
  static get observedAttributes() { return ['loading', 'dataAnime', 'category']; }

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

  async connectedCallback() {
    this.category = this.getAttribute('category') || null;
    this.loading = true;
    const response = await DataSource.categoryAnime(this.category);
    this.dataAnime = response.anime || response.top;
    this.loading = false;
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <style>
          .content-title {
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: relative;
          }
          .content-btn {
            font-size: 1rem;
            padding: .25rem 1rem;
            padding-right: 1.5rem;
            cursor: pointer;
            background-color: transparent;
            color: #fff;
            border-color: transparent;
          }
          .right-arrow-icon {
            width: 1rem;
            position: absolute;
            right: 0;
          }
          .list-content-anime {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
            height: 323px;
            overflow: hidden;
            gap: 1.5rem;
          }
          .text-eps {
            border-top-left-radius: 16px;
            left: 0;
          }
          .text-type {
            border-top-right-radius: 16px;
            top: 0;
            right: 0;
          }
          .text-eps,
          .text-type {
            position: absolute;
            background-color: rgba(0, 0, 0, 0.5);
            padding: 8px;
            font-size: 0.75rem;
          }
          .img-item-content {
            width: 100%;
            height: 279px;
            border-radius: 16px;
            margin-bottom: 0.5rem;
            object-fit: cover;
          }
          .fcn-item-content {
            display: flex;
            justify-content: space-between;
          }
          .star-wrapper {
            flex-shrink: 0;
            margin-left: 1rem;
            display: flex;
          }
          .star-icon {
            width: 1rem;
            height: 1rem;
            margin-right: 0.5rem;
          }
        </style>
        <article>
          <div class="content-title">
            <h2>${this.category}</h2>
            <button class="content-btn">More</button>
            <img
              class="right-arrow-icon"
              src="/src/assets/right-arrow.png"
              alt="right arrow icon"
            />
          </div>
          <div class="list-content-anime">
            ${this.loading ? '<loading-data/>' : this.dataAnime.map((anime) => `
              <section>
                <p class="text-eps">${anime.episodes || 'Unknown'} episodes</p>
                <p class="text-type">${anime.type}</p>
                <figure>
                  <img
                    class="img-item-content"
                    src="${anime.image_url}"
                    alt=""
                  />
                  <figcaption class="fcn-item-content">
                    ${anime.title}
                    <span class="star-wrapper"><img
                      class="star-icon"
                      src="/src/assets/star-icon.png"
                      alt="star icon"
                    />
                      <caption>
                        ${anime.score === 0 ? 'soon' : anime.score}
                      </caption>
                    </span>
                  </figcaption>
                </figure>
              </section>
            `).join('')}
          </div>
        </article>
    `;
  }
});
