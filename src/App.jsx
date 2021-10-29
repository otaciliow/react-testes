import './App.css'

import React from 'react'
import First from './components/first'
import Parametro from './components/comParam'
import CompComFilhos from './components/comFilhos'
import Card from './components/layout/card'
import Repeticao from './components/Repeticao'
import Condicional from './components/Condicional'

export default (props) => 
    // todos os elementos devem estar dentro de uma tag, já que elementos adjacentes causarão um erro
    <div className="container-main">

        {/* é possível passar parametros para os componentes da seguinte forma: (aliás, é assim que se faz comentários em react)*/}
        <First/>
        <Parametro titulo="Esse é o título" subtitulo="Esse é o sub-título"/>
        <Parametro titulo="Opa" subtitulo="Epa"/>
        {/* e é possível usar o mesmo componente mais de uma vez com parâmetros diferentes: */}

        <Card titulo="Componente com filhos">
            <CompComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Bia</li>
                    <li>Carlos</li>
                    <li>Daniel</li>
                </ul>
            </CompComFilhos>
        </Card>

        <div>
            <Card titulo="Primeiro componente">
                Conteudo
            </Card>
            <Card titulo="Segundo componente">
                Conteudo
            </Card>
        </div>

        <Card titulo="Componente com repeticao">
            <Repeticao/>
        </Card>

        <Card titulo="Componente com condicional">
            <Condicional numero={10}/>
        </Card>
    </div>