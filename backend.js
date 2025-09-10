import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const API_TOKEN = 'b81410e5-6152-40a1-8ecc-bdac961dc599';

app.use(cors());
app.use(express.json());

// Endpoint para buscar todos os corpos 
app.get("/api/bodies", async (req, res) => {
  try {
    const response = await axios.get("https://api.le-systeme-solaire.net/rest/bodies/", {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Erro ao buscar dados do Sistema Solar" });
  }
});

// Endpoint para buscar um corpo específico
app.get("/api/bodies/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.get(`https://api.le-systeme-solaire.net/rest/bodies/${id}`, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: `Erro ao buscar o corpo ${id}` });
  }
});

app.listen(PORT, () => {
  console.log(`Backend rodando na porta ${PORT}`);
});
