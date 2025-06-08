const express = require('express');
const app = express();
const port=3000;

app.use(express.json());
let posts = [
{id:1 , title: 'Premier Post', content: 'Ceci est le contenu du premier post.'},
{id:2 , title: 'Deuxième Post', content: 'Ceci est le contenu du deuxième post.'},

];

app.get('/posts', (req, res) => {
  res.json(posts);
});

app.get('/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id, 10);
  const post = posts.find(p => p.id === postId);
  
  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ message: 'Post not found' });
  }
  res.json(post)
});

app.post('/posts', (req, res) => {
    const { title, content } = req.body;
    if (!title || !content) {
      return res.status(400).json({ message: 'Title and content are required' });
    }

    const newPost = {
      id: posts.length + 1,
      title,
      content
    };

    posts.push(newPost);
    res.status(201).json(newPost);
});

app.put('/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id, 10);
  const { title, content } = req.body;
  
  const postIndex = posts.findIndex(p => p.id === postId);
  
  if (postIndex === -1) {
    return res.status(404).json({ message: 'Post not found' });
  }

  if (!title || !content) {
    return res.status(400).json({ message: 'Title and content are required' });
  }

  posts[postIndex] = { id: postId, title, content };
  res.json(posts[postIndex]);
});

app.delete('/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id) ;
    const postIndex = posts.findIndex(p => p.id === postId);
    if (postIndex === -1) {
      return res.status(404).json({ message: 'Post not found' });
    }

    posts.splice(postIndex, 1);
    res.status(204).send();
});

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal server error' });
}); 

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
