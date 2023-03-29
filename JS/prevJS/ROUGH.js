console.log('sohdf');
// function vowelsAndConsonants(s) {
//     // var A = ['a','e','i','o','u'];
//     for(var i=0; i<s.length; i++)
//     {
//         if(s[i]=='a'||'e'||'i'||'o'||'u')
//         {
//             console.log(s[i]);
//         }
//         else{
//             console.log(s[i]);
//         }
//     }
// }


// function main() {
//     console.log('Write here');
    
//     const s = readLine();
    
//     vowelsAndConsonants(s);
// }

// const s = readLine();
// console.log(s);
// let v = [3,4,5];
// // console.log(letisArray('hfd'));

// let a =0;
// if(a==0)
// {
//     throw new Error("This is error");
// }



console.log('Hii');
/*you have to create a div and inject it into the page which contains a heading .whenever someone clicks on the div, it should be converted onto editable item.Whenever user clicks away(blur). save the into the local storage.*/
let divElem = document.createElement('div');

//Adding text to that created element
let val = localStorage.getItem('text');
let text;
if(val==null){
    text = document.createTextNode('This is my element. click to edit it');
}
else{
    text = document.createTextNode(val);
}
divElem.appendChild(text);

//Giving element id , style and class
divElem.setAttribute('id','elem');
divElem.setAttribute('style','border:2px solid green; width: 160px; height: 40px; margin" 34px; padding:24px;');
// grab the main container
let container = document.querySelector('.container');
let first = document.getElementById('myfirst');



//Inserting the element before element with id first
container.insertBefore(divElem , first);

console.log(divElem,container,first);

//Adding eventlistner to divElem
divElem.addEventListener('click',function(){
    let noTextAreas = document.getElementsByClassName('textarea').length;//so to prevent on first click textarea length is 0 on other click length 1
    if(noTextAreas==0){
        let html = elem.innerHTML;
        divElem.innerHTML = `<textarea class="textarea form-control" id="textarea" rows="3">${html}</textarea>`;//so on clicking it get showed but if click again now this time innerhtml cotains this whole textarea line and also can't be edit so to prevent this
    }

    //listen for the blur event on textarea
    let textarea = document.getElementById('textarea');
    textarea.addEventListener('blur',function(){
        elem.innerHTML = textarea.Value;
    });
});

