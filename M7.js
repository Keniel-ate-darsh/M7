// DOM Traversal
const main = document.getElementById("main");
console.log(main);
main.innerHTML = "new text on main";
main.style.backgroundColor ="yellow";

function changeColor(element,color){
    element.style.backgroundColor = color;
}

changeColor(main,"pink")

const parents = Array.from(document.getElementsByClassName("parent"));

console.log(parents);

parents.forEach(element => changeColor(element,"yellow"));

// query Selector and grandparent

const grandparent = document.querySelector(".grandparent");
// grab class = "grandparents"
console.log(grandparent);
changeColor(grandparent,"cornflowerblue");

const parents2 = Array.from(grandparent.children);
console.log(parents2);

parents2.forEach(element => changeColor(element,"purple"));

const parentOne = parents2[0];
console.log(parentOne)
changeColor(parentOne,"blanchedalmond");
const childrenOfParentOne = Array.from(parentOne.children);
console.log(childrenOfParentOne);

//Introduce querySelectAll() 

const grandchildren = grandparent.querySelectorAll(".child");
console.log(grandchildren);

grandchildren.forEach(element => changeColor(element, "peru"));

//Change one Child color
const childOne = childrenOfParentOne[0];
changeColor(childOne,"indianred")

const parent1 = childOne.parentElement;
changeColor(parent1,"orange");

const grandpa = parent1.parentElement;
changeColor(grandpa,"darkkhaki");

// Skip parent, go from child to grandparent

const grandma = childOne.closest(".grandparent");
changeColor(grandma, "rebeccapurple");

//Next Element sibiling
const childTwo = childOne.nextElementSibling
console.log(childTwo)
changeColor(childTwo,"seagreen")
