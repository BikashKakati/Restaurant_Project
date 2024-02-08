export function Loader({initial=false}) {
    return (
        <div className={`${initial ? "h-dvh":"min-h-32"} w-full flex items-center justify-center`}>
            <div className="w-16 h-16 border-8 border-t-zinc-600 animate-spin rounded-full"></div>
        </div>
    )
}
