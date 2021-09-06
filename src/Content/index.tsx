/* eslint-disable react/jsx-boolean-value */
import React, { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import Error from '../Pages/Error'
import getRover from '../Services/nasa-service'
import Card from './Card/index'
import LoadingView from './LoadingView'
import UniqBy from 'lodash'

type ContentProps = {
  name: string
}

export default function Content({ name }: ContentProps) {
  const [items, setItems] = useState<any>([])
  const [currentPage, setPage] = useState(1)
  const [finished, setFinished] = useState(false)

  const fetch = async () => {
    const res = await getRover({
      name,
      page: currentPage > 1 ? currentPage : 1,
    })
    res && setItems([...res, ...items])
    res.length === 0 && setFinished(true)
  }
  React.useEffect(() => {
    fetch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name])

  return (
    <main className="relative">
      <div className="absolute w-full">
        <InfiniteScroll
          dataLength={items?.length || 0}
          next={() => {
            setPage(currentPage + 1)
            fetch()
          }}
          hasMore={!finished}
          loader={<LoadingView />}
          className="p-10 flex flex-row flex-wrap justify-center"
        >
          {items?.map((_: any) => (
            <Card
              id={_.id}
              img={_.img_src}
              key={_.id}
              roverName={_.rover?.name}
              camera={_.camera?.full_name}
              earthDate={_.earth_date}
              landingDate={_.rover?.landing_date}
              launchDate={_.rover?.launch_date}
            />
          ))}
        </InfiniteScroll>
      </div>
    </main>
  )
}
