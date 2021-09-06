import classNames from 'classnames'
import React from 'react'
import { useParams, Link } from 'react-router-dom'

interface IParams {
  name: string
  pag: string
}

type PaginationProps = {
  name: string
  pag: number
  disabled: boolean
}

export default function Pagination({ name, pag, disabled }: PaginationProps) {
  if (!disabled) {
    return null
  }
  return (
    <div className="sticky bottom-0 w-full flex flex-shrink-0 select-none bg-gray-400 flex-row w-ful justify-center items-center text-lg h-10 font-bold">
      {pag !== 1 && (
        <Link to={`/rovers/${name}/${pag - 1}`}>
          <div
            className={classNames('mr-3 hover:text-blue-500 cursor-pointer')}
          >
            PREV
          </div>
        </Link>
      )}
      <div>
        <p>{pag}</p>
      </div>
      <Link to={`/rovers/${name}/${pag + 1}`}>
        <div className="ml-3 hover:text-blue-500 cursor-pointer">NEXT</div>
      </Link>
    </div>
  )
}
