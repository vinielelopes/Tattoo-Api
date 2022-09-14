import express from "express";
import router  from "./src/routes/cliente.js";
import { agendamentoRouter } from "./src/routes/agendamento.js";
import cors from "cors";
import materiaisRouter from "./src/routes/materiais.js";

const corsConfig = {
  origin: "*",
  methods: "GET,PUT,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

const app = express();
app.use(express.json(), cors(corsConfig));

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send({ titulo: "Tattoo API" });
  });
  app.use(materiaisRouter);
  app.use(router);
  app.use(agendamentoRouter);
};

routes(app);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Running in http://localhost:${port}`));
