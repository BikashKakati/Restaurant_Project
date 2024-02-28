import React from 'react'
import LoadingSkeleton from '../Ui/LoadingSkeleton'

function CardSkeleton() {
  return (
    <div className="h-96 w-80 p-4">
        <div className='h-72 overflow-hidden'>
            <LoadingSkeleton className="h-full w-full rounded-2xl"/>
        </div>
        <div className="flex gap-2 mt-3 flex-wrap">
            <LoadingSkeleton className="h-4 w-40 rounded-lg"/>
            <LoadingSkeleton className="h-4 w-28 rounded-lg"/>
            <LoadingSkeleton className="h-4 w-28 rounded-lg"/>
        </div>
    </div>
  )
}

export default CardSkeleton