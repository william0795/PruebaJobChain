import React from 'react'
import stylePrueba from "../styles/Prueba.module.scss"
const Cards = ({name, nemon}) => {
  return (
    <div className={stylePrueba.cards}>
                <div className={stylePrueba.imgDetail}>
                  <span>img</span>
                </div>
                <div className={stylePrueba.details}>
                  <div className={stylePrueba.info}>
                      <div>
                        <strong><span>{name}</span></strong>
                        <span className={stylePrueba.gris}> {nemon}</span>
                      </div>
                      <div>
                        <span>200000 E</span>
                      </div>
                  </div>
                  <div className={stylePrueba.costo}>
                      <div>
                        <span>0,9 B</span>
                      </div>
                      <div>
                        <span className={stylePrueba.gris}>-10900</span>
                      </div>
                  </div>
                </div>
              </div>
  )
}

export default Cards
