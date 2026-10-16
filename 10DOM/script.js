// DOM - document object model

// 4 piilars of dom
// - Selection of an Element
// -chaanging html
// -changing css
// -event listenerer

// - Selection of an Element
// var a = document.querySelector("h1");
// console.log(a);
// // -chaanging html
// a.innerHTML = "changed";
// // -changing css
// h1.style.color = "blue";
// h1.style.backgroundColor = "royelblue";

//  -event listenerer
// var h1 = document.querySelector("h1");
// h1.addEventListerner("click", function () {
//   console.log("hello");
// });

var h1 = document.querySelector("h1");

h1.addEventListerner("dbclick", function () {
  ((h1.innerHTML = "changed"), (h1.style.color = "black"));
});

var h1 = document.querySelector("h1");
h1.addEventListerner("mauseender", function () {
  ((h1.innerHTML = "changed"), (h1.style.color = "black"));
});
