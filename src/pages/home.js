const home = () => {
  const contentElement = document.querySelector('#content');
  const searchAnimeEl = document.querySelector('anime-search');
  const animeListContentArr = document.querySelectorAll('anime-list-content');
  const animeListSideArr = document.querySelectorAll('anime-list-side');
  const animeList = [...animeListContentArr, ...animeListSideArr];

  const buttonBackEl = () => {
    const buttonBack = document.createElement('button');
    const textButtonBack = document.createTextNode('Back');
    buttonBack.appendChild(textButtonBack);
    buttonBack.addEventListener('click', () => window.location.reload());
    buttonBack.classList.add('btn', 'm-b');
    return buttonBack;
  };

  const loadDataAnime = (keyword) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    contentElement.innerHTML = '<loading-data/>';
    setTimeout(() => {
      contentElement.innerHTML = `<anime-list-content category="${keyword}" isMore="false"></anime-list-content>`;
      contentElement.appendChild(buttonBackEl());
    }, 2000);
  };

  const handleClickMore = (title) => {
    loadDataAnime(title);
  };

  const handleClickSearch = () => {
    loadDataAnime(searchAnimeEl.valueSearch);
  };

  const handleEnterSearch = (e) => {
    if (e.key === 'Enter') {
      loadDataAnime(searchAnimeEl.valueSearch);
    }
  };

  animeList.forEach((anime) => {
    // eslint-disable-next-line no-param-reassign
    anime.moreClickEvent = handleClickMore;
  });

  searchAnimeEl.clickEventSearch = handleClickSearch;
  searchAnimeEl.enterEventSearch = handleEnterSearch;
};

export default home;
