const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('AI Voicebot admin surface - scaffold');
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
