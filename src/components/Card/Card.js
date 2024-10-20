import React from 'react'
import './Card.css'

function Card(props) {

  const excluir = () => {
    const pessoas = JSON.parse(localStorage.getItem("pessoas"))
    const pessoasComExclusao = pessoas.filter((p) => p.placaVeiculo !== props.pessoa.placaVeiculo)
    localStorage.setItem("pessoas", JSON.stringify(pessoasComExclusao))
    window.dispatchEvent(new Event("alteracaopessoas"))
    
  }
  return (
    <div className="background">
      <h3 className="nome">{props.pessoa.nomeProprietario}</h3>
      <p className="content">{props.pessoa.placaVeiculo}</p>
      <p className="content">{props.pessoa.numeroApartamento}</p>
      <p className="content">{props.pessoa.blocoApartamento}</p>
      <p className="content">{props.pessoa.modeloVeiculo}</p>
      <p className="content">{props.pessoa.corVeiculo}</p>
      <p className="content">{props.pessoa.numeroVaga}</p>
      <div class="botton-container">
        <button>Editar</button>
        <button onClick={excluir}>Excluir</button>
      </div>
    </div>
    );
  
}

export default Card