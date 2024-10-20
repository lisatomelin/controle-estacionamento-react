import React from 'react';

function CustomInput(props) {
  return (
    <div>
      <label className="margens">{props.label}</label>
      <input className="margens"
              type={props.tipo}
              placeholder={props.hint}
              value={props.valor}
              onChange={props.handleInput}
              name={props.nome}/>

    </div>
  )
}

export default CustomInput