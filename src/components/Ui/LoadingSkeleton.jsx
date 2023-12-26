function LoadingSkeleton({className}){
    return(
        <div className={`relative bg-zinc-500 animate-pulse ${className ? className:""}`}></div>
    )
}

export default LoadingSkeleton