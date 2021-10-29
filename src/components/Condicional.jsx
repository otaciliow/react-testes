import React from 'react'
import If from './If'

export default props => {
    return (
        <div>
            <h2>O número é {props.numero} </h2>
            {/* {props.numero % 2 == 0 ?
            <span>Par</span>
            : <span>Impar</span>  
            } */}

            <If test={props.numero % 2 == 0}>
                <span>Par</span>
            </If>
            <If test={props.numero % 2 == 1}>
                <span>Impar</span>
            </If>
        </div>
    )
}

{/* ? é o sinal de "true", e : é o de "false". dessa forma, não precisamos usar if's na estrutura*/}
