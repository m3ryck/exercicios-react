import ReactDOM from 'react-dom'
import React from 'react'
// import PrimeiroComponente from './componentes/PrimeiroComponente'
import {CompA,CompB as B} from './componentes/DoisComponentes'
// import MultiElementos from './componentes/MultiElementos'


const elemento = document.getElementById('root')
// ReactDOM.render(<h1>ola react</h1>,elemento)

ReactDOM.render(
    <div>
        {/* <MultiElementos/> */}
        <CompA valor = "olá eu sou A!!" />
        <B valor = "olá eu sou B!!" /> 
        {/* <PrimeiroComponente valor="bom dia!" bcd="nlt"/>  */}
    </div>
    
    ,elemento)