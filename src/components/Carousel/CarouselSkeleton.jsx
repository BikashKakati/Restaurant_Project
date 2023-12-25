import LoadingSkeletion from "../Ui/LoadingSkeleton";

function CarouselSkeleton() {
    return (
        <span className="relative w-44 flex items-center justify-start flex-col">
            <LoadingSkeletion className="w-40 h-40 rounded-full m-2" />
            <LoadingSkeletion className="w-16 h-4 rounded-full" />
        </span>
    )
}
export default CarouselSkeleton