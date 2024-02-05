/* Declare variables below to save the different sections (divs) of your story*/
let opening = document.querySelector(".story-opening");
let b1 = document.querySelector(".option-one");
let b2 = document.querySelector(".option-two");
let op1 = document.querySelector(".option-one-screen"); 
let op2 = document.querySelector(".option-two-screen");

b1.onclick = function() {
    op1.style.display = "block";
    opening.style.display = "none";
};

b2.onclick=function(){
op2.style.display = "block";
    opening.style.display = "none";
};

/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!



INSERT_VARIABLE.onclick=function(){

};

*/