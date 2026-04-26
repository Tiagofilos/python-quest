import { useState } from "react";

export default function App() {
  const [pagina, setPagina] = useState(0);

  const paginas = [
    { titulo: "Python Quest: Conde Dross", imagem: "/capa_pa_00.png" },
    { titulo: "Página 1", imagem: "/quadrinho_pa01.png" },
    { titulo: "Página 2", imagem: "/quadrinho_pa02.png" },
    { titulo: "Desafio 1", imagem: "/desafio_01.png" },
    { titulo: "Desafio 2", imagem: "/desafio_02.png" },
    { titulo: "Desafio 3", imagem: "/desafio_03.png" }
  ];

  const atual = paginas[pagina];

  return (
    <div style={{
      minHeight: "100vh",
      background: "#050816",
      color: "white",
      textAlign: "center",
      padding: "20px"
    }}>
      <h1>{atual.titulo}</h1>

      <img
        src={atual.imagem}
        alt={atual.titulo}
        style={{
          width: "100%",
          maxWidth: "950px",
          borderRadius: "12px"
        }}
      />

      <div style={{ marginTop: "20px" }}>
        <button onClick={() => setPagina(Math.max(0, pagina - 1))}>
          Anterior
        </button>

        <button
          onClick={() => setPagina(Math.min(paginas.length - 1, pagina + 1))}
          style={{ marginLeft: "10px" }}
        >
          Próxima
        </button>
      </div>
    </div>
  );
}
