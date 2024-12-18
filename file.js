const flashcards = [
    { question: "What is a closure?", answer: "A closure is a function with access to its outer function's scope, even after the outer function has finished." },
    { question: "What is the purpose of the 'this' keyword?", answer: "'this' refers to the object it belongs to, depending on where it is used." },
    { question: "Explain 'let' vs 'var'", answer: "'let' is block-scoped and 'var' is function-scoped." },
    { question: "What is an arrow function?", answer: "An arrow function is a shorter syntax for function expressions, and it doesn't have its own 'this' context." }
];

let index = 0;
let showanswer = false;

let cardcontent = document.getElementById("card-content");
let progress = document.getElementById("progress");


function cardcontenttext() {
const currenflashcard = flashcards[index];
cardcontent.innerText = showanswer ? currenflashcard.question : currenflashcard.answer;    

const progresspercent = ((index + 1) / flashcards.length) * 100;
progress.style.width = `${progresspercent}%`; 
}

function nextcontent() {
if(index < flashcards.length - 1)
{
index ++;
showanswer = false;
cardcontenttext();    
}    
}

function prevcontent() {
if(index > 0)
{
index --;
showanswer = false;
cardcontenttext();    
}    
}

function flipcontent() {
showanswer =!showanswer
cardcontenttext();    
}    


document.getElementById("next").addEventListener("click", nextcontent);
document.getElementById("prev").addEventListener("click", prevcontent);
document.getElementById("flip").addEventListener("click", flipcontent);


cardcontenttext();
