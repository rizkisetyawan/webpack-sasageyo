const home = () => {
  const contentElement = document.querySelector('#content');
  const animeListContentArr = document.querySelectorAll('anime-list-content');
  const animeListSideArr = document.querySelectorAll('anime-list-side');
  const animeList = [...animeListContentArr, ...animeListSideArr];
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const buttonBackEl = () => {
    const buttonBack = document.createElement('button');
    const textButtonBack = document.createTextNode('Back');
    buttonBack.appendChild(textButtonBack);
    buttonBack.addEventListener('click', () => {
      scrollToTop();
      contentElement.innerHTML = `
        <anime-list-content category="Summer 2021 Anime"></anime-list-content>
        <anime-list-content category="Upcoming Anime"></anime-list-content>`;
    });
    buttonBack.classList.add('btn', 'm-b');
    return buttonBack;
  };

  const handleClickMore = async (title) => {
    scrollToTop();
    contentElement.innerHTML = '<loading-data/>';
    setTimeout(() => {
      contentElement.innerHTML = `<anime-list-content category="${title}" isMore="false"></anime-list-content>`;
      contentElement.appendChild(buttonBackEl());
    }, 2000);
  };

  animeList.forEach((anime) => {
    // eslint-disable-next-line no-param-reassign
    anime.moreClickEvent = handleClickMore;
  });
};

export default home;
