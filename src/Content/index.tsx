/* eslint-disable react/jsx-boolean-value */
import React, { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import getRover from '../Services/nasa-service'
import Card from './Card/index'
import LoadingView from './LoadingView'
import uniqBy from 'lodash/uniqBy'
import ErrorPlaceholder from '../Pages/Error/ErrorPlaceholder'
import classNames from 'classnames'
import common from '../Wordings/common.json'

type ContentProps = {
  name: string
}

export default function Content({ name }: ContentProps) {
  const [items, setItems] = useState<any>([])
  const [currentPage, setPage] = useState(1)
  const [finished, setFinished] = useState(false)
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('')

  const fetch = async () => {
    const res = await getRover({
      name,
      page: currentPage > 1 ? currentPage : 1,
      filter: filter,
    })
    const arr = [...res, ...items]
    res && setItems(arr)
    res.length === 0 && setFinished(true)
  }

  const filteredArr = uniqBy(items, 'id')
  function handleOnChange(e: any) {
    const value = e.target.value
    setSearch(value)
  }

  const cameras = filteredArr.filter(
    (_: any) =>
      _.camera?.full_name
        .toLocaleLowerCase()
        .includes(search.toLocaleLowerCase()) ||
      _.camera?.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  )
  const content = search ? cameras : filteredArr
  const noCameras = search !== '' && cameras.length === 0
  const noContent = search === '' && items.length === 0

  React.useEffect(() => {
    fetch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, filter])

  return (
    <main className="relative">
      <div className="absolute w-full p-5">
        <div className="flex justify-center flex-wrap sm:justify-end sm:pr-12">
          <div
            onClick={() => setFilter('sol')}
            className={classNames(
              'mr-3 p-3  cursor-pointer rounded-sm',
              filter === 'sol' ? 'bg-gray-500' : 'hover:bg-gray-300'
            )}
          >
            {common.filter_tabs.sol}
          </div>
          <div
            onClick={() => setFilter('earth_date')}
            className={classNames(
              'mr-3 p-3  cursor-pointer rounded-sm',
              filter === 'earth_date' ? 'bg-gray-500' : 'hover:bg-gray-300'
            )}
          >
            {common.filter_tabs.earth_date}
          </div>
          <input
            onChange={handleOnChange}
            className={classNames(
              'rounded-sm p-3 w-60',
              noContent ? ' bg-gray-300 pointer-events-none' : 'ring-1'
            )}
            disabled={noContent}
            placeholder={common.input.search_placeholder}
          />
        </div>
        {!noCameras && noContent && finished ? (
          <ErrorPlaceholder />
        ) : (
          <InfiniteScroll
            dataLength={items?.length || 0}
            next={() => {
              setPage(currentPage + 1)
              fetch()
            }}
            hasMore={!finished}
            loader={noCameras ? <ErrorPlaceholder /> : <LoadingView />}
            className="flex flex-row flex-wrap justify-center"
          >
            {content?.map((_: any) => (
              <Card
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
        )}
      </div>
    </main>
  )
}
