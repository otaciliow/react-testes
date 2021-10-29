import React from 'react'
import './card.css'

function Card(props) {
    // no react, declaramos classes usando o atributo "className" (com camel case mesmo!)
    return (
        <div className="Card">
            <div className="Conteudo">
                {/* .children seleciona o conteúdo "filho" da div principal declarada no arquivo index */}
                {props.children} 
            </div>
            <div className="Footer">
                {props.titulo}
            </div>
        </div>
    )
}

export default Card