import React, { useEffect, useState } from "react";
import "./Listagem.css";
import Card from "../../components/Card/Card";

function Listagem() {

  const [pessoas, setPessoas] = useState([]);
  
  const carregarPessoas = () => {
    const pessoasCarregadas = JSON.parse(localStorage.getItem("pessoas"));
    setPessoas(pessoasCarregadas);
  };

  useEffect(() => {
    carregarPessoas();
    window.addEventListener("alteracaopessoas", carregarPessoas);
    return () => {
      window.removeEventListener("alteracaopessoas", carregarPessoas);
    };
  }, []);

  return (
    <div>
      <h1>Listagem Estacionamento</h1>
      {pessoas.map((p) => (
        <Card pessoa={p} />
      ))}
    </div>
  );
}

export default Listagem;
