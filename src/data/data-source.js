class DataSource {
//   static async animeHomePage() {
//     const listEndpoint = [
//       { title: 'Summer 2021 Anime', endpoint: 'season' },
//       { title: 'Upcoming Anime', endpoint: 'top/anime/1/upcoming' },
//       { title: 'Top Airing', endpoint: 'top/anime/1/airing' },
//       { title: 'Top Character', endpoint: 'top/characters' },
//     ];
//     const data = await Promise.all(
//       listEndpoint.map(async (row) => {
//         try {
//           const res = await fetch(`https://api.jikan.moe/v3/${row.endpoint}`);
//           const resJson = await res.json();
//           console.log(resJson);
//           if (resJson.anime) {
//             return resJson.anime;
//           }
//           return resJson.top;
//         } catch (err) {
//           return err.message;
//         }
//       }),
//     );
//     return data;
//   }
  static async categoryAnime(keywoard) {
    const listEndpoint = [
      { title: 'Summer 2021 Anime', endpoint: 'season' },
      { title: 'Upcoming Anime', endpoint: 'top/anime/1/upcoming' },
      { title: 'Top Airing', endpoint: 'top/anime/1/airing' },
      { title: 'Top Character', endpoint: 'top/characters' },
    ];
    const data = listEndpoint.find((item) => keywoard === item.title);

    const res = await fetch(`https://api.jikan.moe/v3/${data.endpoint}`);
    const resJson = res.json();
    return resJson;
  }

  static async searchAnime(keywoard) {
    const res = await fetch(`https://api.jikan.moe/v3/search/anime?q=${keywoard}&page=1`);
    const resJson = await res.json();
    return resJson;
  }
}

export default DataSource;
