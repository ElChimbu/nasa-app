import React from 'react'
import ErrorIcon from './ErrorIcon'
import common from '../../Wordings/common.json'

export default function ErrorPlaceholder() {
  return (
    <div className="flex justify-center items-center h-96 flex-col sm:flex-row text-center sm:text-left">
      <ErrorIcon />
      <div className="flex flex-col">
        <p>
          <span className="font-bold">{common.error.title}</span>
        </p>
        <p>{common.error.subtitle}</p>
      </div>
    </div>
  )
}
