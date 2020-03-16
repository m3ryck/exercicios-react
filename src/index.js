import ReactDOM from 'react-dom'
import React from 'react'
// import PrimeiroComponente from './componentes/PrimeiroComponente'
// import {CompA,CompB as B} from './componentes/DoisComponentes'
// import MultiElementos from './componentes/MultiElementos'
// import FamiliaSilva from './componentes/FamiliaSilva'
// import Familia from './componentes/Familia'
// import Membro from './componentes/Membro'
// import ComponenteComFuncao from './componentes/ComponenteComFuncao'
// import Pai from './componentes/Pai'
import ComponenteClasse from './componentes/ComponenteClasse'


const elemento = document.getElementById('root')
// ReactDOM.render(<h1>ola react</h1>,elemento)

ReactDOM.render(
    <div>
        {<ComponenteClasse valor = ""/>}
        {/* {<Pai/>} */}
        {/* <ComponenteComFuncao/> */}
        {/* <Familia  sobrenome ='silva' numero ={123}>
            <Membro nome = 'Andre'/>
            <Membro nome = 'Mariana'/>
        </Familia> */}
        {/* <FamiliaSilva/> */}
        {/* <Familia>
            <Membro nome = 'Adriano' sobrenome ='brito'/>
            <Membro nome = 'Mari' sobrenome = 'brito'/>
        </Familia> */}
        {/* <MultiElementos/> */}
        {/* <CompA valor = "olá eu sou A!!" /> }
        /* <B valor = "olá eu sou B!!" />  */}
        {/* <PrimeiroComponente valor="bom dia!" bcd="nlt"/>  */}        
    </div>    
    ,elemento)