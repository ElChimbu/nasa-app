import React from 'react'
import Content from '../Components/Content'
import { useParams } from 'react-router-dom'
import Header from '../Components/Header'
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
