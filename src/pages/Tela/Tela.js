import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Listagem from '../Listagem/Listagem'
import Cadastro from '../Cadastro/Cadastro'
import './Tela.css'


function Tela() {
    return (
        <div>
             <nav class="navbar">
                <h1>Controle de Estacionamento</h1>
        
                <ul class="nav-links">  
                    <li><Link to="/tela" className="link">Inicio</Link></li>
                    <li><Link to="/cadastro" className="link">Cadastro</Link></li>
                    <li><Link to="/listagem" className="link">Listagem</Link></li>
                </ul>                
            </nav>
           
            <Routes>                
                <Route path='/cadastro' element={<Cadastro/>}/>
                <Route path='/cadastro/:placaVeiculo' element={<Cadastro />} />
                <Route path="/listagem" element={<Listagem/>}/>
            </Routes>
            
        </div>
    )
}

export default Tela