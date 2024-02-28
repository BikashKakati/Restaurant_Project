import React from 'react'
import CardSkeleton from './CardSkeleton'

export const CardSkeletonMultiple = () => {
    return (
        <div className="flex pt-4 items-start justify-center flex-row flex-wrap gap-6">
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
        </div>
    )
}
