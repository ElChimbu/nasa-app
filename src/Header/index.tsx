import React, { ReactElement } from 'react'
import classNames from 'classnames'
import NasaIcon from './NasaIcon'
import { Link, useParams } from 'react-router-dom'
import Links from './tabs.json'

interface IParams {
  name: string
}

function Header(): ReactElement {
  const { name = 'curiosity' } = useParams<IParams>()

  return (
    <header className="sticky w-full shadow-md flex flex-col sm:flex-row justify-between items-center bg-white p-3 sm:px-10">
      <Link to="/">
        <div className="w-20 h-18">
          <NasaIcon />
        </div>
      </Link>
      <nav className="flex flex-row list-none select-none">
        {Links.map((_, i) => (
          <Link key={i} to={_.link}>
            <li
              className={classNames(
                'border-0 border-b-4 mr-3 hover:bg-gray-200 cursor-pointer p-2',
                name === _.tab.toLocaleLowerCase() && 'border-purple-400'
              )}
            >
              {_.tab}
            </li>
          </Link>
        ))}
      </nav>
    </header>
  )
}

export default Header
