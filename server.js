import express from "express";
import dotenv from "dotenv";

const app = express();

app.use(express.json());

dotenv.config();
const serverPort = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("Bruuuuuuuxosss");
});

app.listen(serverPort, () => {
  console.log(
    ` Servidor Barbie foi iniciado em: http://localhost:${serverPort}`
  );
});
