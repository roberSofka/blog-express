const articulosController = {
  listaArticulos: (req, res) => {
    const datos = {
      titulo: "Articulos",
      mensaje: "lista de Articulos",
    };
    res.status(200).render("articulos", datos);
  },
  detalleArticulo: (req, res) => {
    const articuloId = req.params.id;

    if (articuloId === "123") {
      const datos = {
        titulo: "Articulo",
        mensaje: `detalle del Articulo ${articuloId}`,
      };
      res.status(200).render("articulo", datos);
    } else {
      const datos = {
        titulo: "Error",
        mensaje: "Articulo no encontrado",
      };
      res.status(404).render("error", datos);
    }
  },
};

module.exports = articulosController;
