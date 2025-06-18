const express = require('express');
const app = express();
const postsRouter = require('./routes/posts');

const PORT = 3000;

app.use(express.json());
app.use('/posts', postsRouter);

app.listen(PORT, () => {
  console.log(`Blog API server running at http://localhost:${PORT}`);
});
