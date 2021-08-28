import Services from '../services';
import RightArrow from '../assets/right-arrow.png';
import StarIcon from '../assets/star-icon.png';
import './loading-data';

customElements.define(
  'anime-list-content',
  class extends HTMLElement {
    static get observedAttributes() {
      return ['loading', 'dataAnime', 'category', 'isMore', 'isSearch'];
    }

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

    set isSearch(v) {
      this.setAttribute('isSearch', JSON.stringify(v));
    }

    get isSearch() {
      return JSON.parse(this.getAttribute('isSearch'));
    }

    set moreClickEvent(event) {
      this._moreClickEvent = () => event(this.category);
      this.render();
    }

    async connectedCallback() {
      this.category = this.getAttribute('category') || null;
      this.isMore = this.getAttribute('isMore') || false;
      this.loading = true;
      const response = await Services.listAnime(this.category);
      this.dataAnime = response.anime || response.top || response.results;
      this.isSearch = !!response.results;
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
            gap: 1.5rem;
            ${!this.isMore
              && `
              height: 323px;
              overflow: hidden;
            `}
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

        </style>
        <article>
          <div class="content-title">
            <h2>${this.isSearch ? `Search "${this.category}"` : this.category}</h2>
            ${!this.isMore ? `
              <button class="content-btn">More</button>
              <img
                class="right-arrow-icon"
                src="${RightArrow}"
                alt="right arrow icon"
              />
            ` : ''}
          </div>
          <div class="list-content-anime">
            ${
  this.loading
    ? '<loading-data/>'
    : this.dataAnime
      ?.map(
        (anime) => `
              <section>
              ${this.category !== 'Top Character' ? `
                <p class="text-eps">${anime.episodes || 'Unknown'} episodes</p>
                <p class="text-type">${anime.type}</p>
              ` : ''}
                <figure>
                  <img
                    class="img-item-content"
                    src="${anime.image_url}"
                    alt="${anime.title}"
                  />
                  <figcaption class="fcn-item-content">
                    ${anime.title}
                    <span class="star-wrapper"><img
                      class="star-icon"
                      src="${StarIcon}"
                      alt="star icon"
                    />
                    ${this.category !== 'Top Character' ? `
                      <caption>
                        ${anime.score === 0 ? 'soon' : anime.score}
                      </caption>
                    ` : `
                      <caption>
                        ${anime.favorites}
                      </caption>
                    `}
                    </span>
                  </figcaption>
                </figure>
              </section>
            `,
      )
      .join('')
}
          </div>
        </article>
    `;
      this.querySelector('.content-btn').addEventListener(
        'click',
        this._moreClickEvent,
      );
    }
  },
);
