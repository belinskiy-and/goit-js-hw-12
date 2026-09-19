import axios from 'axios';

const API_KEY = '30502065-ccf9dfd8afed44df162e05d97';
const BASE_URL = 'https://pixabay.com/api/';

export default async function getImagesByQuery(query, page = 1, per_page) {
  const { data } = await axios(`${BASE_URL}`, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page,
      per_page,
    },
  });

  return data;
}
