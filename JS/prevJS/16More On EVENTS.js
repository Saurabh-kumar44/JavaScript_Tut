console.log('hello');
let btn = document.getElementById('btn');
// btn.addEventListener('click', func1);
// btn.addEventListener('dblclick', func2);//double click
// btn.addEventListener('mousedown', func3);//mouse wheel down


// function func1(e){
//     console.log('Thanks', e);
//     e.preventDefault();//if we not put this here then in that button on which we are working will take use to the page and the thanks or pointerEvent not stay on screen so to prevent this use this
// }
// function func2(e){
    // console.log('Thanks it double click', e);
    // e.preventDefault();//if we not put this here then in that button on which we are working will take use to the page and the thanks or pointerEvent not stay on screen so to prevent this use this
// }
// function func3(e){
//     console.log('Thanks it a mouse down', e);
//     e.preventDefault();//if we not put this here then in that button on which we are working will take use to the page and the thanks or pointerEvent not stay on screen so to prevent this use this
// }

// EVENT- mouseenter,mouseleave,mousemove
// document.querySelector('.no').addEventListener('mouseenter',function(){//Whenver we take the cursor on the dummy div then printed you entered no
//     console.log('You entered no');
// });
// document.querySelector('.no').addEventListener('mouseleave',function(){//Whenver we take the cursor on the dummy div then printed you entered no
//     console.log('You exit no');
// });

document.querySelector('.no').addEventListener('mousemove',function(e){//Whenver we take the cursor on the dummy div then printed you entered no
    console.log(e.offsetX, e.offsetY);
    // document.body.style.backgroundColor = 'red';//when take the cursor to the screen then colour get red
    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetX},${e.offsetX + e.offsetY})`;
    console.log('You triggered mouse event');
});