export const myDebounce=(fn,time)=>{
    let timer
    const debounce=(...args)=>{
        if(timer) clearInterval(timer);
        timer=setTimeout(() => fn(...args), time);
    }
    return debounce
}