import React from 'react'
import SearchIcon from './SearchIcon'

export default function InputComponent() {
  return (
    <div className="flex flex-row items-center">
      <div>
        <div className="absolute p-2">
          <SearchIcon />
        </div>
      </div>
    </div>
  )
}
