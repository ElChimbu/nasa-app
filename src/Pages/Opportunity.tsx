import React from 'react'
import Content from '../Content'
import { useParams } from 'react-router-dom'
import Header from '../Header'
interface IParams {
  name: string
}
export default function Opportunitty() {
  const { name } = useParams<IParams>()

  return (
    <>
      <Header />
      <Content name={name} />
    </>
  )
}
