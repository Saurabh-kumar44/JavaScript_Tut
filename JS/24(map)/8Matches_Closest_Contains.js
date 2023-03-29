// console.log(id1);//this can also give the id
let id1 = document.getElementById("id1");
console.log(id1);
// console.log(id1.matches(".class"));//it return false because id1 does not contain any class name 'class'
// console.log(id1.matches(".box"));//it return true
console.log(sp1.closest(".box"));//this closest will start checking from the sp1 (CSS selector and if not not match then it goes to the its parent and after thats parent and so on until it finds the .box (class) 
// console.log(sp1.closest("#sp1"));
console.log(id1.contains(sp1));
console.log(sp1.contains(sp1));
console.log(sp1.contains(id1));


//1 - elem.matches = to check if element matches the given CSS selector
//2 - elem.closest = To look for the nearest ancestor that matches the given CSS-selector the elem is also checked
//3 - elem.contains = return true if elemB si inside elemA(a descendant of elem) or when elemA = elemB
