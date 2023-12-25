export function debounce(callback, delay){
    let timer = null;
    return (...args)=>{
        clearTimeout(timer);
        timer = setTimeout(()=>{
            callback.apply(this,[...args]);
        },delay)
    }
}