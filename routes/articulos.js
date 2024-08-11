const express = require("express");
const router = express.Router();
const articulosController = require("../controllers/articulosController");

router.get("/", articulosController.listaArticulos);
router.get("/:id", articulosController.detalleArticulo);

module.exports = router;
