import React from "react";
import "./Card.css";

function Card(props) {
  const excluir = () => {
    const pessoas = JSON.parse(localStorage.getItem("pessoas"));
    const pessoasComExclusao = pessoas.filter(
      (p) => p.placaVeiculo !== props.pessoa.placaVeiculo
    );
    localStorage.setItem("pessoas", JSON.stringify(pessoasComExclusao));
    window.dispatchEvent(new Event("alteracaopessoas"));
  };
  return (
    <div className="background">
      <h3 className="content">
        Nome Proprietário: {props.pessoa.nomeProprietario}
      </h3>
      <p className="content">Placa do Veículo: {props.pessoa.placaVeiculo}</p>
      <p className="content">
        Número Apartamento: {props.pessoa.numeroApartamento}
      </p>
      <p className="content">
        Bloco do Apartamento: {props.pessoa.blocoApartamento}
      </p>
      <p className="content">Modelo do Veículo: {props.pessoa.modeloVeiculo}</p>
      <p className="content">Cor do Veículo: {props.pessoa.corVeiculo}</p>
      <p className="content">Número da Vaga: {props.pessoa.numeroVaga}</p>

     
      <div class="botton-container">
        <button>Editar</button>
        <button onClick={excluir}>Excluir</button>
      </div>
    </div>
    
  );
}

export default Card;
