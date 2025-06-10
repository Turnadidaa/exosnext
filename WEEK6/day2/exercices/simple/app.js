
const express = require('express');
const indexRouter = require('./routes/index');
const app = express();
const port = process.env.PORT || 3002;
app.use('/', indexRouter);
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
