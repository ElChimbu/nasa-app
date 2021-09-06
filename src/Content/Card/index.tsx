import classNames from 'classnames'
import React from 'react'
import Dates from './Dates'

type CardProps = {
  id: string
  img: string
  roverName: string
  earthDate: string
  landingDate: string
  launchDate: string
  camera: string
}

export default function Card({
  id,
  img,
  roverName,
  earthDate,
  landingDate,
  launchDate,
  camera,
}: CardProps) {
  const [added, setAdded] = React.useState(false)

  return (
    <div className="m-4 w-64 shadow-lg h-full rounded-sm">
      <div className="cursor-pointerh-64 w-64">
        <img className=" w-64 h-64" src={img} alt={roverName} />
      </div>
      <div className="text-center flex flex-col items-center">
        <h1 className="text-xl font-bold">{roverName}</h1>
        <p>{camera}</p>
      </div>
      <div className="flex flex-col text-center pb-3">
        <Dates
          earthDate={earthDate}
          landingDate={landingDate}
          launchDate={launchDate}
        />
      </div>
    </div>
  )
}
