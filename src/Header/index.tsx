import React, { ReactElement } from 'react'
import classNames from 'classnames'
import NasaIcon from './NasaIcon'
import { Link, useParams } from 'react-router-dom'

interface IParams {
  name: string
}

function Header(): ReactElement {
  const { name = 'curiosity' } = useParams<IParams>()

  return (
    <header className="sticky flex-shrink-0 top-0 shadow-sm flex flex-row justify-between items-center bg-white px-10">
      <Link to="/">
        <div className="w-20 h-20">
          <NasaIcon />
        </div>
      </Link>
      <nav className="flex flex-row list-none select-none">
        <Link to={'/rovers/curiosity/0'}>
          <li
            className={classNames(
              'border-0 border-b-4 mr-3 hover:bg-gray-200 cursor-pointer p-2',
              name === 'curiosity' && 'border-purple-400'
            )}
          >
            Curiosity
          </li>
        </Link>

        <Link to={`/rovers/opportunity/0`}>
          <li
            className={classNames(
              'border-0 border-b-4 mr-3 hover:bg-gray-200 cursor-pointer p-2',
              name === 'opportunity' && 'border-purple-400'
            )}
          >
            Opportunitty
          </li>
        </Link>

        <Link to={`/rovers/spirit/0`}>
          <li
            className={classNames(
              'border-0 border-b-4 mr-3 hover:bg-gray-200 cursor-pointer p-2',
              name === 'spirit' && 'border-purple-400'
            )}
          >
            Spirit
          </li>
        </Link>
      </nav>
    </header>
  )
}

export default Header
