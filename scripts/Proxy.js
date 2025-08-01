
const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.get('/proxy', async (req, res) => {
  const url = req.query.url;
  if (!url) return res.status(400).send('Missing URL');
  
  try {
    const response = await fetch(url);
    const html = await response.text();
    res.send(html);
  } catch (err) {
    res.status(500).send('Error fetching page');
  }
});

app.listen(3000, () => console.log('Proxy running on http://localhost:3000'));
