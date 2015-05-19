var form = document.querySelector("form");

form.addEventListener("submit", function(e) {

e.preventDefault();
var input = document.querySelector("#input1");
var list = document.querySelector("ul");

//console.log(input.value);
//console.log(list);

newli = document.createElement('li');
list.appendChild(newli);
newli.innerHTML = input.value;

form.reset();


});