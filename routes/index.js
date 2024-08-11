const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const datos = {
    titulo: "Home",
    mensaje: "¡Bienvenido al home!",
  };
  res.status(200).render("home", datos);
});

router.use("/articulos", require("./articulos"));
router.use("/categorias", require("./categorias"));

module.exports = router;
