// backend/server.js
const express = require('express');
const axios = require('axios');
const { JSDOM } = require('jsdom');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Configuração básica do CORS
app.use(cors());

// Rota principal
app.get('/api/scrape', async (req, res) => {
  try {
    const { keyword } = req.query;

    if (!keyword) {
      return res.status(400).json({ error: 'Digite um termo de busca' });
    }

    // Simula um navegador real
    const headers = {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    };

    // Faz a requisição para a Amazon
    const response = await axios.get(`https://www.amazon.com/s?k=${encodeURIComponent(keyword)}`, { headers });
    const dom = new JSDOM(response.data);
    const products = [];

    // Extrai os dados dos produtos
    dom.window.document.querySelectorAll('.s-result-item').forEach(item => {
      const title = item.querySelector('h2 a span')?.textContent?.trim();
      const rating = item.querySelector('.a-icon-star-small .a-icon-alt')?.textContent?.trim() || '0';
      const reviews = item.querySelector('.a-size-small .a-link-normal .a-size-base')?.textContent?.trim() || '0';
      const imageUrl = item.querySelector('.s-image')?.getAttribute('src');

      if (title && imageUrl) {
        products.push({
          title,
          rating: parseFloat(rating.split(' ')[0]) || 0,
          reviews: parseInt(reviews.replace(/,/g, '')) || 0,
          imageUrl
        });
      }
    });

    res.json(products);
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    res.status(500).json({ error: 'Erro no servidor' });
  }
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});