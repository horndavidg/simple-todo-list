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

var ul = document.querySelector("ul");

ul.addEventListener("click", function(e) {

//console.log("you clicked the list");
//console.dir(e.srcElement);

if(e.srcElement.className) {

	e.srcElement.className = "";
}
else {

	e.srcElement.className = "completed";
}

	});