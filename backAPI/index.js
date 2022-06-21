const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
  host: "localhost",
  port: "3307",
  user: "USUARIO1",
  password: "",
  database: "zona_cn",
});

connection.connect((err) => {
  if (err) console.log("error en conexion");
  else console.log("Se ha conectado");
});

app.post("/gerentes", (req, res) => {
  const data = req.body;
  connection.query(
    `INSERT INTO gerentes VALUES('${data.id}','${data.name}','${data.email}');`,
    (err) => {
      if (err) {
        console.log("Error en insercion: ", err);
      } else {
        console.log("Se ha insertado gerente: ", data);
        res.send({ text: "inserto un gerente" });
      }
    }
  );
});

app.get("/gerentes", (req, res) => {
  connection.query(
    `SELECT * FROM gerentes;`,
    (err, results) => {
      if (err) {
        console.log("Error en insercion: ", err);
      } else {
        console.log("Consulta de gerentes: ", results);
        res.send({ data: results });
      }
    }
  );
});

app.listen(3000);
