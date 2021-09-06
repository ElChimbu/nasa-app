import React from 'react'
import Header from '../../Header'
import ErrorIcon from './ErrorIcon'

export default function Error() {
  return (
    <>
      <Header />
      <div className="flex justify-center items-center h-96 flex-col sm:flex-row text-center">
        <ErrorIcon />
        <p>
          <span className="font-bold">Oops!, something gone wrong</span>
        </p>
        <p>Try again, maybe the page you are looking for does not exists</p>
      </div>
    </>
  )
}
