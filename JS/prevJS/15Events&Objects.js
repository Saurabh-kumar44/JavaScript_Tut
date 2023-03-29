console.log('aur bhai');

//Events used to makes your pages more interattractive like when u press the on the heading in which we attached an event of click whenever we click on the heading my message got printed like you press on heading

console.log('Ha jiiii');

document.getElementById('heading').addEventListener('click', function(e){//here we make a event whenever we click on the heading we get printed that you've click on heeading
    console.log('You have click on the heading');
    console.log(e);//e = Event object(it tells all about the events the events that you made)
    location.href = '//facebook.com';//on clicking in the heading it will take you to the website
});
//EVENTS USED = 'click',-by this run clicking
// //              'mouseover' - run on just taking the cursor on the heading
document.getElementById('heading').addEventListener('mouseover', function(e){//here we make a event whenever we click on the heading we get printed that you've click on heeading
    console.log('You have click on the heading');
    let variable;
    // console.log(e);//e = Event object(it tells all about the events the events that you made)
    variable = e.target;//by this we can see in which target we clicked
    variable = e.target.className;
    variable = e.target.classList;//OR
    variable = Array.from(e.target.classList);//show in array format

//     variable = e.offsetX;//it tells the number relative to click in x axis
//     variable = e.offsety;//it tells the number relative to click in y axis
//     // variable = e.clientX;

    console.log(variable);
    
    // location.href = '//facebook.com';//on clicking in the heading it will take you to the website
});

