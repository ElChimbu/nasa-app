import React from 'react'

type DateProps = {
  earthDate: string
  landingDate: string
  launchDate: string
}

export default function Dates({
  earthDate,
  landingDate,
  launchDate,
}: DateProps) {
  return (
    <>
      <p className="font-bold">Earth date</p>
      <span>{earthDate}</span>
      <p className="font-bold">Landing date</p>
      <span>{landingDate}</span>
      <p className="font-bold">Launch date</p>
      <span>{launchDate}</span>
    </>
  )
}
