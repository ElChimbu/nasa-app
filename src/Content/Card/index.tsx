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
  function handleAdd(id: string) {
    const arr = []
    arr.push(id)
    const data = JSON.stringify(arr)
    const storage = window.localStorage
    storage.setItem('roverID', data)
  }

  return (
    <div className="m-4 w-64 shadow-lg h-full rounded-sm">
      <div className="cursor-pointerh-64 w-64">
        <img className="w-[255px] h-[255px]" src={img} alt={roverName} />
      </div>
      <div className="text-center flex flex-col items-center">
        <h1 className="text-xl font-bold">{roverName}</h1>
        <p>{camera}</p>
        <div
          onClick={() => handleAdd(id)}
          className={classNames(
            ' m-2 select-none cursor-pointer w-40 h-auto p-2 rounded-sm text-white',
            added
              ? ' bg-red-500 hover:bg-red-400'
              : 'bg-green-500 hover:bg-green-400'
          )}
        >
          {added ? 'Remove from Bookmark' : 'Add to Bookmark'}
        </div>
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
