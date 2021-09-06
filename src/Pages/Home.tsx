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
  const [items, setItems] = React.useState<any>([])
  const { name = 'curiosity', pag } = useParams<IParams>()
  const actualPag = pag ? parseInt(pag) : 1
  const disabled = items?.data?.photos?.length

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
      <Content items={items} pag={actualPag} />
      <Pagination name={name} pag={actualPag} disabled={disabled} />
    </>
  )
}
