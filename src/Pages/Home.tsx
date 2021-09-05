import React, { ReactElement } from 'react'
import getRover from '../Services/nasa-service'
import Content from '../Content'
import { useParams } from 'react-router-dom'
import Pagination from '../Pagination'
import Header from '../Header'
interface IParams {
  name: string
  pag: string
}
export default function Home(): ReactElement {
  const [items, setItems] = React.useState([])
  const { name, pag } = useParams<IParams>()
  const fetch = async () => {
    const res = await getRover({ name, page: pag })
    setItems(res)
  }
  React.useEffect(() => {
    fetch()
  }, [name, pag])
  return (
    <>
      <Header />
      <Content items={items} />
      <Pagination />
    </>
  )
}
