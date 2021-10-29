import React from 'react'

// para passar parâmetros para o componente, podemos utilizar a mesma lógica do js:
function Parametros(props) {
    return (
        <div>
            {/* depois, só precisamos passar entre chaves {} os valores que desejamos. podem ser variáveis ou estruturas mais complexas (assim como no js) */}
            <h1>{props.titulo}</h1>
            <p>{ props.subtitulo }</p>
        </div>
    )
}

export default Parametros