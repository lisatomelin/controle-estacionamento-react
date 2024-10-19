import React, { useState } from "react";
import CustomInput from "./CustomInput.js";
import "./Cadastro.css";

function Cadastro() {
  const [dados, setDados] = useState({
    nomeProprietario: "",
    placaVeiculo: "",
    numeroApartamento: "",
    blocoApartamento: "",
    modeloVeiculo: "",
    corVeiculo: "",
    numeroVaga: "",
  });

  const handleInput = (event) => {
    const { name, value } = event.target;
    setDados({ ...dados, [name]: value });
  };

  const salvar = () => {
    console.log(dados);
    const pessoas = JSON.parse(localStorage.getItem("pessoas")) || []
    pessoas.push(dados);
    localStorage.setItem("pessoas", JSON.stringify(pessoas));
    alert("Cadastro realizado com sucesso");
    limpar();
  };

  const limpar = () => {
    setDados({
      nomeProprietario: "",
      placaVeiculo: "",
      numeroApartamento: "",
      blocoApartamento: "",
      modeloVeiculo: "",
      corVeiculo: "",
      numeroVaga: "",
    });
  };

  return (
    <div className="formulario">
      <CustomInput
        label="Nome Completo:"
        tipo="text"
        hint="Digite o seu nome completo."
        valor={dados.nomeProprietario}
        handleInput={handleInput}
        nome="nomeProprietario"
      />

      <CustomInput
        label="Placa do Veículo:"
        tipo="text"
        hint="Digite a placa."
        valor={dados.placaVeiculo}
        handleInput={handleInput}
        nome="placaVeiculo"
      />
      <CustomInput
        label="Número do Apartamento:"
        tipo="text"
        hint="Digite o número do apartamento."
        valor={dados.numeroApartamento}
        handleInput={handleInput}
        nome="numeroApartamento"
      />
      <CustomInput
        label="Bloco do Apartamento:"
        tipo="text"
        hint="Digite o bloco do apartamento."
        valor={dados.blocoApartamento}
        handleInput={handleInput}
        nome="blocoApartamento"
      />
      <CustomInput
        label="Modelo do Veículo:"
        tipo="text"
        hint="Digite o modelo do veículo."
        valor={dados.modeloVeiculo}
        handleInput={handleInput}
        nome="modeloVeiculo"
      />
      <CustomInput
        label="Cor do Veículo:"
        tipo="text"
        hint="Digite a cor do veículo."
        valor={dados.corVeiculo}
        handleInput={handleInput}
        nome="corVeiculo"
      />
      <CustomInput
        label="Número da Vaga:"
        tipo="text"
        hint="Digite o número da vaga."
        valor={dados.numeroVaga}
        handleInput={handleInput}
        nome="numeroVaga"
      />
      <div className="button-container">
        <button onClick={salvar}>Salvar</button>
        <button onClick={limpar}>Limpar</button>
      </div>
    </div>
  );
}

export default Cadastro;
