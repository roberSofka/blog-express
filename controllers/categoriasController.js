const categoriasController = {
  listaCategorias: (req, res) => {
    const datos = {
      titulo: "Categorias",
      mensaje: "lista de Categorias",
    };
    res.status(200).render("categorias", datos);
  },
  detalleCategoria: (req, res) => {
    const categoriaId = req.params.id;

    if (categoriaId === "123") {
      const datos = {
        titulo: "Categoria",
        mensaje: `detalle de la Categoria ${categoriaId}`,
      };
      res.status(200).render("categoria", datos);
    } else {
      const datos = {
        titulo: "Error",
        mensaje: "Categoria no encontrada",
      };
      res.status(404).render("error", datos);
    }
  },
};

module.exports = categoriasController;
