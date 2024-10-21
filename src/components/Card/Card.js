import React from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";

function Card(props) {
  const navigate = useNavigate()


  const excluir = () => {
    const pessoas = JSON.parse(localStorage.getItem("pessoas"));
    const pessoasComExclusao = pessoas.filter(
      (p) => p.placaVeiculo !== props.pessoa.placaVeiculo
    );
    localStorage.setItem("pessoas", JSON.stringify(pessoasComExclusao));
    window.dispatchEvent(new Event("alteracaopessoas"));
  }

  const alterar = () => {
    navigate(`/cadastro/${props.pessoa.placaVeiculo}`)

  }

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

     
      <div className="botton-container">
        <button onClick={alterar}>Editar</button>
        <button onClick={excluir}>Excluir</button>
      </div>
    </div>
    
  );
}

export default Card;
