
const axios = require('axios');

async function fetchPosts() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const posts = response.data;

    posts.forEach((post, index) => {
      console.log(`${index + 1}. ${post.title}`);
    });
  } catch (error) {
    console.error('Erreur lors de la récupération des posts :', error.message);
  }
}

// Exporter la fonction
module.exports = fetchPosts;
