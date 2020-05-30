import React from 'react'

function CadeiraNavbarItem(props){
    return (
        <li onClick={() => {window.location="/cadeira_info/"+props.cadeira.id}}>{props.cadeira.nome}
            <div className="navbar-underline"></div></li>
    )
}

export default CadeiraNavbarItem