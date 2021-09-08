import React from 'react'
import SkeletonLoading from './Card/SkeletonLoading'

export default function LoadingView() {
  return (
    <>
      <SkeletonLoading />
      <div className="hidden lg:contents">
        <SkeletonLoading />
        <SkeletonLoading />
      </div>
    </>
  )
}
