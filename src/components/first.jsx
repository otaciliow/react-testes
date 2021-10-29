import React from 'react'
// para utilziar a estrutura .jsx é necessário importar o React
// no react, componentes com estruturas html são declarados dentro de funções (como se fosse uma função javascript)
// os elementos que serão exibidos devem ser declarados junto ao return da função
function First() {
    return (
        // Os elementos declarados com o return devem estar dentro de parênteses e englobados em pelo menos uma tag
    <div>
        <h1>Primeiro componente</h1>
        <h2>Exemplo de um componente React</h2>
    </div>
    )
}
// após definir o conteúdo da função, é necessário exportá-la para que outras partes do documento possam utilizá-la
export default First

// export default () =>
//     <>
//         <h1>Primeiro componente (Arrow)</h1>
//         <h2>Exemplo de um componente React usando arrow function</h2>
//     </>