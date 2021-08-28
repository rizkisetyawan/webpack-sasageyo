import TitanKolosal from '../assets/titan-kolosal.png';

customElements.define('anime-header', class extends HTMLElement {
  async connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <style>
      header {
        max-width: 1180px;
        width: 100%;
        margin-top: 1rem;
        margin-bottom: 2rem;
        padding: 0 1rem;
        border-radius: 1rem;
        background-color: #000;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .logo-icon {
        width: 4rem;
      }
      .jumbotron {
        display: flex;
        padding: 2rem;
        margin-bottom: 0;
      }
      .img-titan-kolosal {
        height: 300px;
        margin-left: 3rem;
      }
      .second-title {
        font-size: 1.25rem;
        font-weight: 400;
      }
      @media screen and (max-width: 620px) {
        .img-titan-kolosal {
          height: 150px;
        }
      }
    </style>
    <header>
      <div>
        <h1>Sasa<span style="color: #fff">geyo</span></h1>
        <p class="second-title">Anime move us like nothing else can, whether they’re scary, funny, dramatic, romantic or anywhere in-between. So many titles, so much to experience.</p>
      </div>
      <img
        class="img-titan-kolosal"
        src="${TitanKolosal}"
        alt="logo icon"
      />
    </header>
    `;
  }
});
