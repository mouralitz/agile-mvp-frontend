import express from 'express';
import cors from 'cors';
import products from './mock/products.js';
import about from './mock/about.js';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Rota para submissão de contato
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
  }
  // Simula o recebimento do contato
  return res.status(200).json({ success: true, message: 'Contato recebido com sucesso!' });
});

// Rota para listar produtos
app.get('/products', (req, res) => {
  res.json(products);
});

// Rota para informações institucionais
app.get('/about', (req, res) => {
  res.json(about);
});

// Rota raiz para status
app.get('/', (req, res) => {
  res.send('<h1>Backend rodando! Rotas disponíveis: /products, /about, /contact</h1>');
});

app.listen(PORT, () => {
  console.log(`Backend rodando em http://localhost:${PORT}`);
});
