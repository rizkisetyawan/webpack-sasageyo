import DataSource from '../data/data-source';

const home = () => {
  const qwerty = async () => {
    try {
      const result = await DataSource.categoryAnime('Upcoming Anime');
      console.log('res --->', result);
    } catch (err) {
      console.log('err ----->', err.message);
    }
  };

  qwerty();
};

export default home;
