import React from 'react'

function CadeiraCard(props){
    return (
        <div className="cadeiras-card" onClick={() => {window.location='/cadeira_info'}}>
            <h3>{props.cadeira.nome}</h3>
            <label>{props.cadeira.prof}</label>
        </div>
    )
}

export default CadeiraCard