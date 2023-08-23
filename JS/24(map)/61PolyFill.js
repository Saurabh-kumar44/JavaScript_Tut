//POLYFILL(A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it)

// const arr = [1,2,3,4]
// arr.forEach((val)=>{ //so in the Array forEach is a method and properties, functionalities provided by the Array under itself (so forEach comes under prototype of Array)
//     console.log(2*val);
// })

// Array.prototype.forEach = null; //here we are erasing the forEach from the Array prototype(Like this its not supported by some browsers)
// arr.forEach((val)=>{ 
//     console.log(2*val);
// })


const arr = [1,2,3,4]
Array.prototype.forEach = null;//Erasing the support of forEach

if(!Array.prototype.forEach){
    //Polyfill- (here creating a polyfill)
    Array.prototype.forEach = function(callBackFunction)//Here we are giving a custom defintion the Array prototype of forEach
    {
        for(let val of this){ //her 'this' refrences to the original array
            callBackFunction(val)// In that way we can loop through all the elements in the array and applied the callback function wherever it is 
        }
    }   
}
arr.forEach((val)=>{ 
    console.log(2*val);
})
