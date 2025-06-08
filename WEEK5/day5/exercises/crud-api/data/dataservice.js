const axios = require('axios');

async function fetchPosts() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data; // Les posts récupérés
  } catch (error) {
    console.error('Erreur lors de la récupération des posts:', error.message);
    throw error; // Pour que l'appelant sache qu'il y a eu une erreur
  }
}

module.exports = { fetchPosts };
