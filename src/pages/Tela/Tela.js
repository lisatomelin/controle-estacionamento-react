import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Listagem from '../Listagem/Listagem'
import Cadastro from '../Cadastro/Cadastro'
import './Tela.css'


function Tela() {
    return (
        <div>
            <h1>Controle de Estacionamento</h1>
            <Routes>
                <Route path='/cadastro' element={<Cadastro/>}/>
                <Route path="/listagem" element={<Listagem/>}/>
            </Routes>
            
        </div>
    )
}

export default Tela