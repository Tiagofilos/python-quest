import { useState } from "react";

export default function App() {
  const [pagina, setPagina] = useState(0);

  const paginas = [
    {
      tipo: "capa",
      imagem: "/capa_pa_00.png",
      titulo: "Python Quest: Conde Dross"
    },
    {
      tipo: "hq",
      imagem: "/quadrinho_pa01.png",
      titulo: "Página 1"
    },
    {
      tipo: "hq",
      imagem: "/quadrinho_pa02.png",
      titulo: "Página 2"
    },
    {
      tipo: "desafio",
      imagem: "/image(27).png",
      titulo: "Desafio 1"
    },
    {
      tipo: "desafio",
      imagem: "/image(28).png",
      titulo: "Desafio 2"
    },
    {
      tipo: "desafio",
      imagem: "/image(29).png",
      titulo: "Desafio 3"
    }
  ];

  const atual = paginas[pagina];

  function proxima() {
    if (pagina < paginas.length - 1) setPagina(pagina + 1);
  }

  function voltar() {
    if (pagina > 0) setPagina(pagina - 1);
  }

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1 style={{ marginBottom: "20px" }}>{atual.titulo}</h1>

      <img
        src={atual.imagem}
        alt={atual.titulo}
        style={{
          width: "100%",
          maxWidth: "900px",
          borderRadius: "12px",
          boxShadow: "0 0 20px rgba(0,0,0,0.5)"
        }}
      />

      <div style={{ marginTop: "20px" }}>
        <button
          onClick={voltar}
          style={{
            padding: "10px 20px",
            marginRight: "10px",
            borderRadius: "8px",
            border: "none",
            background: "#333",
            color: "white"
          }}
        >
          Anterior
        </button>

        <button
          onClick={proxima}
          style={{
            padding: "10px 20px",
            borderRadius: "8px",
            border: "none",
            background: "#2563eb",
            color: "white"
          }}
        >
          Próxima
        </button>
      </div>
    </div>
  );
}
