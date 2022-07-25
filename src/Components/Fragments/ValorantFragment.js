import React, {useState, useEffect} from "react";

const ValorantFragment = ({imagen, titulo,textoDescripcion,tipo,tipoDescripcion}) => {

    return (
        <>
        
                <div class="card" style={{width: "18rem"}}>
                    <img src={imagen} class="card-img-top" alt="..." />
                        <div class="card-body">
                             <h5 class="card-title">{titulo}</h5>
                             <p class="card-text">{textoDescripcion}</p>
                             <h5 class="card-title">{tipo}</h5>
                             <p class="card-text">{tipoDescripcion}</p>
                        </div>
                </div>
        </>
    )

}

export default ValorantFragment