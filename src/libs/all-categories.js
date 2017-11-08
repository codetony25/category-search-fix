const axios = require('axios');

const ROOT_URL = 'http://en.wikipedia.org/w/api.php';

const searchAllCategories = ({ term }, callback) => {
  const params = {
    action: 'query',
    generator: 'allcategories',
    gacprefix: term,
    origin: '*',
    format: 'json',
  };

  axios
    .get(ROOT_URL, { params })
    .then(response => {
      if (callback) {
        callback(Object.values(response.data.query.pages));
      }
    })
    .catch(error => {
      console.error(error);
    });
};

export default searchAllCategories;
