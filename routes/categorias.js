const express = require("express");
const router = express.Router();
const categoriasController = require("../controllers/categoriasController");

router.get("/", categoriasController.listaCategorias);
router.get("/:id", categoriasController.detalleCategoria);

module.exports = router;
