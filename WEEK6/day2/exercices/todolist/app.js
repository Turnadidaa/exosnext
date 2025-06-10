
const express = require('express');
const todosRouter = require('./routes/todos');
const app = express();
const port = process.env.PORT || 3006;

app.use(express.json());

app.use('/todos', todosRouter);
app.listen(port, () => {
  console.log(`To-Do List API server is running on http://localhost:${port}`);
});