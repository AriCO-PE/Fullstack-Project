import { useState, useEffect } from "react";

function Catalogo() {
  const [productos, setProductos] = useState([]);
  const [filtroCategoria, setFiltroCategoria] = useState("");
  const [filtroMarca, setFiltroMarca] = useState("");
  const [filtroColor, setFiltroColor] = useState("");
  const [busqueda, setBusqueda] = useState("");
  const [ordenPrecio, setOrdenPrecio] = useState("");
  const [ordenAlfabeto, setOrdenAlfabeto] = useState("");

  const [categorias, setCategorias] = useState([]);
  const [marcas, setMarcas] = useState([]);
  const [colores, setColores] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/productos/")
      .then((res) => res.json())
      .then((data) => {
        setProductos(data);
        setCategorias([...new Set(data.map((p) => p.categoria_nombre))]);
        setMarcas([...new Set(data.map((p) => p.marca_nombre))]);
        setColores([...new Set(data.map((p) => p.color_nombre))]);
      })
      .catch((err) => console.error(err));
  }, []);

  const productosFiltrados = productos
    .filter((p) => {
      return (
        (filtroCategoria === "" || p.categoria_nombre === filtroCategoria) &&
        (filtroMarca === "" || p.marca_nombre === filtroMarca) &&
        (filtroColor === "" || p.color_nombre === filtroColor) &&
        (p.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
          p.descripcion.toLowerCase().includes(busqueda.toLowerCase()))
      );
    })
    .sort((a, b) => {
      // Orden precio
      if (ordenPrecio === "asc") return parseFloat(a.precio) - parseFloat(b.precio);
      if (ordenPrecio === "desc") return parseFloat(b.precio) - parseFloat(a.precio);

      // Orden alfabético
      if (ordenAlfabeto === "az") return a.nombre.localeCompare(b.nombre);
      if (ordenAlfabeto === "za") return b.nombre.localeCompare(a.nombre);

      return 0;
    });

  const seleccionarProducto = (producto) => {
    alert(`Seleccionaste: ${producto.nombre}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Catálogo de Productos</h1>

      {/* Filtros */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px", flexWrap: "wrap" }}>
        <input
          type="text"
          placeholder="Buscar..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />

        <select
          value={filtroCategoria}
          onChange={(e) => setFiltroCategoria(e.target.value)}
        >
          <option value="">Todas las categorías</option>
          {categorias.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>

        <select value={filtroMarca} onChange={(e) => setFiltroMarca(e.target.value)}>
          <option value="">Todas las marcas</option>
          {marcas.map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>

        <select value={filtroColor} onChange={(e) => setFiltroColor(e.target.value)}>
          <option value="">Todos los colores</option>
          {colores.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>

        <select value={ordenPrecio} onChange={(e) => setOrdenPrecio(e.target.value)}>
          <option value="">Ordenar por precio</option>
          <option value="asc">Menor a Mayor</option>
          <option value="desc">Mayor a Menor</option>
        </select>

        <select value={ordenAlfabeto} onChange={(e) => setOrdenAlfabeto(e.target.value)}>
          <option value="">Orden alfabético</option>
          <option value="az">A → Z</option>
          <option value="za">Z → A</option>
        </select>
      </div>

      {/* Lista de productos */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
        }}
      >
        {productosFiltrados.map((p) => (
          <div
            key={p.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              borderRadius: "8px",
              textAlign: "center",
            }}
          >
            <img
              src={p.imagen}
              alt={p.nombre}
              style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />
            <h3>{p.nombre}</h3>
            <p>Precio: ${p.precio}</p>
            <p>Marca: {p.marca_nombre}</p>
            <p>Categoría: {p.categoria_nombre}</p>
            <p>Color: {p.color_nombre}</p>
            <button
              style={{
                marginTop: "10px",
                padding: "8px 12px",
                backgroundColor: "#4f46e5",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={() => seleccionarProducto(p)}
            >
              Seleccionar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalogo;
