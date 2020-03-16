import React from 'react'

export default props =>
    <div>
        <h1>Família</h1>
        {/*cria um clone do objeto e passa as referencias recebidas, funciona apenas com um elemento*/}
        {React.cloneElement(props.children,{ ...props})}
        {/*outra forma */}
        {/* {React.cloneElement(props.children,
            {sobrenome: props.sobrenome} )}    */}
        {/* {props.children} */}
    </div>