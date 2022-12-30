import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Layout.module.css'
import Link from 'next/link'
import utilStyles from '../styles/Utils.module.css'
import stylePrueba from "../styles/Prueba.module.scss"
import Cards from './Cards'
import HeadCard from './Head'
import MenuLateral from './MenuLateral'
const name = 'Ferruzola'
export default function Layout({ children, title, description, home }) {
  const data = [
    {nombre:'Bitcoin', nemonico:'BTC'},
    {nombre:'Etereun', nemonico:'ETH'},
    {nombre:'JobChain', nemonico:'JOB'},
    {nombre:'Tether', nemonico:'USDT'},
  ]
  return (
    <div className={stylePrueba.container}>
         <Head>
            <link rel="icon" href="/favicon.ico" />
            <title>{title}</title>
            <meta name="descripcion" content={description}></meta>
        </Head>
        <MenuLateral></MenuLateral>
        <div className={stylePrueba.content}>
          <HeadCard></HeadCard>
          <div className={stylePrueba.contenData}>
            {data.map(({nombre, nemonico})=> (
                <Cards name={nombre} nemon={nemonico}></Cards>
            ))}
              {/* <div className={stylePrueba.cards}>
                <div>
                  <span>img</span>
                </div>
                <div className={stylePrueba.details}>
                  <div className={stylePrueba.info}>
                      <div>
                        <strong><span>Bitcoin</span></strong>
                        <span className={stylePrueba.gris}>BTC</span>
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
              </div> */}
          </div>

        </div>

    </div>
  )
}
Layout.defaultProps = {
    title:"Next.js | mi sitio web",
    description:"Description de mi sitio web"
}