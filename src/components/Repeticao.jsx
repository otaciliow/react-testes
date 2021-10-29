import React from 'react'

import produtos from '../data/products' // aqui, importamos os dados presentes no array products e o declaramos com o nome de produtos

export default (props) => {

    function getProdutosListItem() {
        return produtos.map(prod => {
            return <li key={prod.id}> {/* é importante inserir uma chave para que o react saiba o índice do elemento (recomendável que seja o id, por nunca se repetir) */}
                {prod.id} - {prod.name} - R${prod.preco}
                </li>
        })
    }
    
    return (
        <div>
            <h2>Repetição</h2>
            <ul>
                {getProdutosListItem()}
            </ul>
        </div>
    )
}