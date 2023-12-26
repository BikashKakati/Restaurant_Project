import LoadingSkeleton from "../Ui/LoadingSkeleton";

function CarouselSkeleton() {
    return (
        <span className="relative w-44 flex items-center justify-start flex-col">
            <LoadingSkeleton className="w-40 h-40 rounded-full m-2" />
            <LoadingSkeleton className="w-16 h-4 rounded-full" />
        </span>
    )
}
export default CarouselSkeleton