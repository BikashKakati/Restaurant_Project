export function throttle(callback, delay){
    let allowed = true;
    return (...args)=>{
        if(allowed){
            callback.apply(this,[...args]);
            allowed = false;
            setTimeout(()=>{
                allowed = true;
            },delay)
        }
    }
}