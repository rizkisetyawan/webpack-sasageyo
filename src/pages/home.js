const home = () => {
  const contentElement = document.querySelector('#content');
  const animeListContentArr = document.querySelectorAll('anime-list-content');
  const animeListSideArr = document.querySelectorAll('anime-list-side');
  const animeList = [...animeListContentArr, ...animeListSideArr];

  const handleClickMore = async (title) => {
    contentElement.innerHTML = '<loading-data/>';
    setTimeout(() => {
      contentElement.innerHTML = `<anime-list-content category="${title}" isMore="true"></anime-list-content>`;
    }, 2000);
  };

  animeList.forEach((anime) => {
    // eslint-disable-next-line no-param-reassign
    anime.moreClickEvent = handleClickMore;
  });
};

export default home;
