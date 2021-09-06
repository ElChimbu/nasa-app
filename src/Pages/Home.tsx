import React, { ReactElement } from 'react'
import Content from '../Content'
import { useParams } from 'react-router-dom'
import Header from '../Header'
interface IParams {
  name: string
  pag: string
}
export default function Home(): ReactElement {
  const { name } = useParams<IParams>()

  return (
    <>
      <Header />
      <Content name={name} />
    </>
  )
}
