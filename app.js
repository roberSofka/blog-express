const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const rutas = require("./routes/index");

// Configurar el motor de plantillas EJS
app.set("view engine", "ejs");

app.use(rutas);

app.use((req, res) => {
  const datos = {
    titulo: "Error",
    mensaje: "Pagina no encontrada",
  };
  res.status(404).render("error", datos);
});

app.listen(port, () => {
  console.log(`Servidor Express en funcionamiento en el puerto ${port}`);
});
