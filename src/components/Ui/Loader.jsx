export function Loader({initial=false}) {
    return (
        <div className={`${initial ? "h-dvh":"min-h-32"} w-full flex items-center justify-center`}>
            <div className="animate-spin inline-block size-12 border-[5px] border-current border-t-transparent text-zinc-600 rounded-full" role="status" aria-label="loading"></div>
        </div>
    )
}
