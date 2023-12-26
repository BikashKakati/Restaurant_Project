import LoadingSkeleton from "../../../Ui/LoadingSkeleton";

function SearchResultSkeleton() {
    return (
        <div className="h-16 w-36 flex items-center bg-zinc-400 rounded-2xl">
            <LoadingSkeleton className="h-16 w-16 mr-2 rounded-2xl" />
            <LoadingSkeleton className="h-4 w-16" />
        </div>
    )
}

export default SearchResultSkeleton