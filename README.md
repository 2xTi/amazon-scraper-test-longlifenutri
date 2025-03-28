📌 Visão Geral do Projeto
Este projeto é um web scraper que coleta informações de produtos da Amazon (títulos, avaliações, imagens) a partir de uma palavra-chave de busca. Consiste em:

Backend: Servidor Node.js/Bun com endpoint de scraping

Frontend: Interface simples com Vite para consultas

⚠️ Atenção: A Amazon bloqueia requisições automatizadas. Este projeto é apenas para fins educacionais.

🛠️ Tecnologias Utilizadas
Backend:
  - Bun
  - Express
  - Axios
  - JSDOM
Frontend:
  - HTML5
  - CSS3
  - JavaScript (Vanilla)
  - Vite
Ferramentas:
	- Git
  - GitHub

🚀 Como Executar
- Pré-requisitos
- Bun (ou Node.js 18+)

Passo a Passo

1. Clone o repositório:
  git clone https://github.com/2xTi/amazon-scraper-test-longlifenutri.git
  cd amazon-scraper-test-longlifenutri

2. Backend:
  cd backend
  bun install
  bun run server.ts

3. Frontend (em outro terminal):
  cd frontend
  npm install
  npm run dev

4. Acesse:
  Frontend: http://localhost:5173
  API: http://localhost:3000/api/scrape?keyword=produto

🔍 Como Usar
  - Digite um termo de busca (ex: "fone bluetooth")
  - Clique em "Buscar"
  - Veja os resultados formatados

⚠️ Limitações Conhecidas
  - Bloqueio frequente pela Amazon
  - Seletores CSS podem quebrar com atualizações do site
  - Requisições limitadas sem proxies

📄 Licença
Este projeto é para fins educacionais. Não utilize para scraping em produção sem verificar os Termos de Serviço da Amazon.
