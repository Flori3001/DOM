// document.body.children[0];
// console.dir(document.body);
// document.body.children[1];
// let anchorElement = document.getElementById("title");
// anchorElement.href = "http://google.com";

// anchorElement = document.querySelector(".link");
// anchorElement.href = "http://academind.com";

let h1Element = document.body.firstElementChild;
console.dir(h1Element);

console.dir(h1Element.parentElement);
console.dir(h1Element.nextElementSibling);

h1Element = document.getElementById("title");
console.dir(h1Element);

let link = document.querySelector(".link");
console.dir(link);

link.textContent = "This was changed by Flori!";