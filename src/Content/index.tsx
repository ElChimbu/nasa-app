/* eslint-disable react/jsx-boolean-value */
import React, { ReactElement } from 'react'
import Error from '../Pages/Error'
import Card from './Card/index'
import LoadingView from './LoadingView'

type ContentProps = {
  items: any
  pag: number
}

export default function Content({ items, pag }: ContentProps): ReactElement {
  const Items =
    items?.data?.photos?.length === undefined ||
    items?.data?.photos?.length === 0
  if (Items && pag > 0) return <Error />
  return (
    <main className="p-10 flex flex-row flex-wrap justify-center">
      {Items ? (
        <>
          <LoadingView />
        </>
      ) : (
        items.data.photos?.map((_: any) => (
          <Card
            id={_.id}
            img={_.img_src}
            key={_.id}
            roverName={_.rover.name}
            camera={_.camera.full_name}
            earthDate={_.earth_date}
            landingDate={_.rover.landing_date}
            launchDate={_.rover.launch_date}
          />
        ))
      )}
    </main>
  )
}
