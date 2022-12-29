import React, { useState } from 'react'
import Link from 'next/link'
import Layout from "../../components/Layout"
import stylePrueba from "../../styles/Prueba.module.scss"

export default function primerPpost({data}) {

  const [dataP, setDataP] = useState(1)

  const selectPrueba = () => {
    const aux = dataP
    setDataP(aux + 1)
    console.log(dataP)
  }


  return (
    <Layout 
    title='Post'>
      <h1 className={stylePrueba.prueba}>{data.id} - {data.title}</h1>
      <div className={stylePrueba.pruebaItalic}>
       <span>{data.body}</span> 
      </div>
      <span onClick={ () => selectPrueba()}>prueba {dataP}</span>
    </Layout>
  )
}

export async function getStaticPaths(){
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json();

    const paths = data.map(({id}) => (
      {
        params: {
          id: `${id}`
        }
      }))
      return {
        paths,
        fallback: false
      }
  } catch (error) {
    console.log(error)
  }
}

export async function getStaticProps ({params}) {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + params.id)
    const data = await res.json();
    return {
      props : {
        data
      }
    }
  } catch (error) {
    console.log(error)
  }
}