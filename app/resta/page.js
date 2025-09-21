"use client";
import { useState } from "react";

export default function Resta() {
  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);
  const [resultado, setResultado] = useState(null);

  const calcularResta = () => {
    if (num1 !== null && num2 !== null) {
      setResultado(Number(num1) - Number(num2));
    }
  };

  return (
    <div style={{
      backgroundColor: "#000000",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Arial, sans-serif"
    }}>
      <div style={{
        backgroundColor: "#1a1a1a",
        padding: "30px",
        borderRadius: "12px",
        boxShadow: "0 4px 8px rgba(255,255,255,0.2)",
        textAlign: "center",
        width: "300px"
      }}>
        <h1 style={{ color: "#ffffff" }}>Página de RESTA</h1>

        <div style={{ marginTop: "20px", textAlign: "left" }}>
          <label style={{ display: "block", marginBottom: "5px", color: "#ffffff" }}>Número 1:</label>
          <input
            type="number"
            onChange={(e) => setNum1(e.target.value)}
            style={{
              width: "100%",
              marginBottom: "15px",
              padding: "8px",
              borderRadius: "6px",
              border: "1px solid #ffffff",
              backgroundColor: "#000000",
              color: "#ffffff"
            }}
          />

          <label style={{ display: "block", marginBottom: "5px", color: "#ffffff" }}>Número 2:</label>
          <input
            type="number"
            onChange={(e) => setNum2(e.target.value)}
            style={{
              width: "100%",
              marginBottom: "20px",
              padding: "8px",
              borderRadius: "6px",
              border: "1px solid #ffffff",
              backgroundColor: "#000000",
              color: "#ffffff"
            }}
          />

          <button
            onClick={calcularResta}
            style={{
              width: "100%",
              backgroundColor: "#ffffff",
              color: "#000000",
              padding: "10px",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "bold"
            }}
          >
            Calcular
          </button>
        </div>

        {resultado !== null && (
          <h3 style={{ marginTop: "20px", color: "#ffffff" }}>Resultado: {resultado}</h3>
        )}
      </div>
    </div>
  );
}
