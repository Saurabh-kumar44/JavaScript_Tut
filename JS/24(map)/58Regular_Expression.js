// const text = "Kisna is very very nice awesome nice very boy"
// console.log(text.replace("very", "VERY")); //we see here only one occurence of very is changed to VERY
//so if want to change all the very to VERY we use regular expression

const regex = /very/g   //regular expression (g = global)
const text = "Kisna is very very nice awesome nice very boy"
console.log(text.replace(regex, "VERY"));

