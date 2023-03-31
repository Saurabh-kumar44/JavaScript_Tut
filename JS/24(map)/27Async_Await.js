async function kisna(){
    return 5;
}
kisna().then((x)=>{//here .then() function working it means the async function return the promise(if async remove then error occured(.then() is not a function) which confirm that it return promise)
    // alert(x);
})