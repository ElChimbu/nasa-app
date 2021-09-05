/* eslint-disable react/jsx-boolean-value */
import React, { ReactElement } from 'react'
import Card from './Card/index'
import SkeletonLoading from './Card/SkeletonLoading'

type ContentProps = {
  items: any
}

export default function Content({ items }: ContentProps): ReactElement {
  return (
    <main className="p-10 bg-gray-100 flex flex-row flex-wrap justify-center">
      {items?.data?.photos?.length === undefined ? (
        <>
          <SkeletonLoading />
          <SkeletonLoading />
          <SkeletonLoading />
          <SkeletonLoading />
          <SkeletonLoading />
          <SkeletonLoading />
          <SkeletonLoading />
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
