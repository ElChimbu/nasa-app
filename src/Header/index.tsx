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
    <header className="sticky w-full top-0 shadow-md flex flex-col sm:flex-row justify-between items-center bg-white p-3 sm:px-10">
      <Link to="/">
        <div className="w-20 h-18">
          <NasaIcon />
        </div>
      </Link>
      <nav className="flex flex-row list-none select-none">
        <Link to={'/rovers/1/curiosity'}>
          <li
            className={classNames(
              'border-0 border-b-4 mr-3 hover:bg-gray-200 cursor-pointer p-2',
              name === 'curiosity' && 'border-purple-400'
            )}
          >
            Curiosity
          </li>
        </Link>

        <Link to={`/rovers/2/opportunity`}>
          <li
            className={classNames(
              'border-0 border-b-4 mr-3 hover:bg-gray-200 cursor-pointer p-2',
              name === 'opportunity' && 'border-purple-400'
            )}
          >
            Opportunity
          </li>
        </Link>

        <Link to={`/rovers/3/spirit`}>
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
