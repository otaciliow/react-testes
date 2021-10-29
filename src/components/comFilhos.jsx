import React from 'react'

function CompComFilhos(props) {
    return (
        <div>
            <p>Os filhos:</p>
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default CompComFilhos