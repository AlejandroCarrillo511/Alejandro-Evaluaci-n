import React, {useState, useEffect} from 'react'
import Fade from '../assets/images/Personaje1_Fade.jpeg'
import Chamber from '../assets/images/Personaje2_Chamber.jpg'
import KAYO from '../assets/images/Personaje3_KAYO.jpg'
import ValorantFragment from './Fragments/ValorantFragment'
import "../Components/Fragments/Fragments.css"

const Pokemon = () => {

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h1>Personajes!</h1>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-4'>
                        <ValorantFragment 
                            textoDescripcion="Fade, la cazarrecompensas turca, controla el poder de las pesadillas para poner al descubierto los secretos de los enemigos. Armada con el terror mismo, da caza a sus objetivos y revela sus miedos más profundos, para después acabar con ellos en la oscuridad."
                            imagen={Fade}
                            titulo="Fade"
                            tipo="Tipo: Iniciador"
                            tipoDescripcion="Fade, ocupa habilidades ya que es tipo radiante que da entender que ocupa habilidades sobrenaturales"
                            />
                    </div>


                    <div className='col-4'>
                        <ValorantFragment 
                            textoDescripcion="Chamber, el diseñador de armas francés, siempre bien vestido y bien pertrechado y expulsa a los agresores con precisión letal. Aprovecha su arsenal personalizado para repeler, eliminar enemigos a distancia y crear la contingencia perfecta para cada plan."
                            imagen={Chamber}
                            titulo="Chamber"
                            tipo="Tipo: Sentinela"
                            tipoDescripcion="Chamber, ocupa armamento diseñado por la radianita que son 2 armas letales para eliminar a los enemigos a pesar de la distancia, tiene una precisión unica."
                            />
                    </div>

                    <div className='col-4'>
                        <ValorantFragment 
                            textoDescripcion="KAY/O es una máquina de guerra creada con un solo propósito: neutralizar radiantes. Su poder para suprimir las habilidades enemigas neutraliza la capacidad de sus rivales para contraatacar, un aspecto que le da a él y a sus aliados la ventaja definitiva en la batalla."
                            imagen={KAYO}
                            titulo="KAY/O"
                            tipo="Tipo: Iniciador"
                            tipoDescripcion="KAY/O, al ser un robot creado con un solo proposito, con sus armamento es capaz de neutrilizar al enemigo sin dejar ocupar las demas habilidades de los personajes."
                            />
                    </div>

                </div>
            </div>
        </>
    )

}

export default Pokemon