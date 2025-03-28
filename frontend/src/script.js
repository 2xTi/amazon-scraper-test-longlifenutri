document.getElementById('searchButton').addEventListener('click', async () => {
    const input = document.getElementById('searchInput');
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '<p>Buscando produtos...</p>';
  
    try {
      const response = await fetch(`http://localhost:3000/api/scrape?keyword=${encodeURIComponent(input.value)}`);
      const products = await response.json();
  
      if (products.length === 0) {
        resultsDiv.innerHTML = '<p>Nenhum produto encontrado.</p>';
        return;
      }
  
      resultsDiv.innerHTML = '';
      products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
          <img src="${product.imageUrl}" alt="${product.title}">
          <div>
            <h3>${product.title}</h3>
            <p>⭐ ${product.rating.toFixed(1)} (${product.reviews} avaliações)</p>
          </div>
        `;
        resultsDiv.appendChild(productDiv);
      });
    } catch (error) {
      resultsDiv.innerHTML = '<p>Erro ao buscar produtos. Tente novamente.</p>';
    }
  });