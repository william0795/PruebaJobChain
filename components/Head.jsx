import React from 'react'
import stylePrueba from "../styles/Prueba.module.scss"

const HeadCard = () => {
  return (
    <div className={stylePrueba.head}>
            <div className={stylePrueba.contentL}>
              <div>
                <h1>Mi Billetera</h1>
              </div>
              <div className={stylePrueba.detailS}>
                <span>Criptomonedas</span>
                <span>NTFS</span>
                <span>Bienes Inmobiliarios</span>
              </div>
            </div>
            <div className={stylePrueba.contentR}>
              <div className={stylePrueba.contentRI}>
                <span>icono 1</span>
                <span>icono 2</span>
                <span>icono 3</span>
                <span>icono 4</span>
              </div>
              <div>
               <strong><span className={stylePrueba.clB}>Valor Total: </span></strong> 
               <strong><span>1500 E</span></strong> 
              </div>
            </div>
              
          </div>
  )
}

export default HeadCard
