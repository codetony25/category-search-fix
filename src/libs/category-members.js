const axios = require('axios');

const ROOT_URL = 'http://en.wikipedia.org/w/api.php';

const searchCategoryMembers = ({ categoryTitle }, callback) => {
  const params = {
    action: 'query',
    list: 'categorymembers',
    cmtitle: categoryTitle,
    origin: '*',
    format: 'json',
  };

  axios
    .get(ROOT_URL, { params })
    .then(response => Object.values(response.data.query.categorymembers))
    .then(data => callback(data))
    .catch(error => {
      console.error(error);
    });
};

export default searchCategoryMembers;
