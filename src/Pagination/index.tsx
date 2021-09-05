import classNames from 'classnames'
import React from 'react'
import { useParams } from 'react-router-dom'

interface IParams {
  name: string
  pag: string
}

export default function Pagination() {
  const { name, pag } = useParams<IParams>()
  const optionalName = name ? name : 'curiosity'
  const actualPag = pag ? parseInt(pag) : 0
  return (
    <div className="flex flex-shrink-0 select-none bg-gray-400 flex-row w-ful justify-center items-center text-lg h-10 font-bold">
      {actualPag !== 0 ||
        (isNaN(actualPag) && (
          <div
            className={classNames('mr-3 hover:text-blue-500 cursor-pointer')}
          >
            <a href={`/rovers/${optionalName}/${actualPag - 1}`}> PREV </a>
          </div>
        ))}
      <div>
        <p>{isNaN(actualPag) ? 0 : actualPag}</p>
      </div>
      <div className="ml-3 hover:text-blue-500 cursor-pointer">
        <a href={`/rovers/${optionalName}/${actualPag + 1}`}> NEXT </a>
      </div>
    </div>
  )
}
