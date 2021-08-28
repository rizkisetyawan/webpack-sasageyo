import axios from 'axios';

class Services {
  static async listAnime(keywoard) {
    const listEndpoint = [
      { title: 'Summer 2021 Anime', endpoint: 'season' },
      { title: 'Upcoming Anime', endpoint: 'top/anime/1/upcoming' },
      { title: 'Top Airing', endpoint: 'top/anime/1/airing' },
      { title: 'Top Character', endpoint: 'top/characters' },
    ];
    const data = listEndpoint.find((item) => keywoard === item.title);
    let res;
    if (data) {
      res = await axios.get(`https://api.jikan.moe/v3/${data.endpoint}`);
    } else {
      res = await axios.get(`https://api.jikan.moe/v3/search/anime?q=${keywoard}&page=1`);
    }
    const resJson = res.data;
    return resJson;
  }
}

export default Services;
