const home = () => {
  const contentElement = document.querySelector('#content');
  const searchAnimeEl = document.querySelector('anime-search');
  const animeListContentArr = document.querySelectorAll('anime-list-content');
  const animeListSideArr = document.querySelectorAll('anime-list-side');
  const animeList = [...animeListContentArr, ...animeListSideArr];
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const buttonBackEl = () => {
    const buttonBack = document.createElement('button');
    const textButtonBack = document.createTextNode('Back');
    buttonBack.appendChild(textButtonBack);
    buttonBack.addEventListener('click', () => window.location.reload());
    buttonBack.classList.add('btn', 'm-b');
    return buttonBack;
  };

  const handleClickMore = (title) => {
    scrollToTop();
    contentElement.innerHTML = '<loading-data/>';
    setTimeout(() => {
      contentElement.innerHTML = `<anime-list-content category="${title}" isMore="false"></anime-list-content>`;
      contentElement.appendChild(buttonBackEl());
    }, 2000);
  };

  const handleClickSearch = () => {
    console.log(searchAnimeEl.valueSearch);
    scrollToTop();
    contentElement.innerHTML = '<loading-data/>';
    setTimeout(() => {
      contentElement.innerHTML = `<anime-list-content category="${searchAnimeEl.valueSearch}" isMore="false"></anime-list-content>`;
      contentElement.appendChild(buttonBackEl());
    }, 2000);
  };

  animeList.forEach((anime) => {
    // eslint-disable-next-line no-param-reassign
    anime.moreClickEvent = handleClickMore;
  });

  searchAnimeEl.clickEventSearch = handleClickSearch;
};

export default home;
