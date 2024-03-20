import React from "react";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#333",
        color: "#fff",
        padding: "20px 0",
        textAlign: "center",
        position: "fixed", // Cambiado a 'fixed' para asegurarse de que siempre esté visible
        width: "100%",
        height: "7%",
        bottom: 0,
        left: 0, // Alineado a la izquierda
        zIndex: 999, // Asegura que esté sobre otros elementos
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto", // Centra el contenido horizontalmente
        }}
      >
        <p style={{ margin: "5px 0", fontStyle: "italic" }}>
          Desarrollado por Danny
        </p>
      </div>
    </footer>
  );
}

export default Footer;
