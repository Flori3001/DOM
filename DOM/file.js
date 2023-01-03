// document.body.children[1].children[0].href = "https://google.com";

// // console.log(window.document);
// console.dir(document);

let anchorElement = document.getElementById("external-link");
anchorElement.href = "http://google.com";

anchorElement = document.querySelector("a");
anchorElement.href = "http://academind.com";

//Create an element:
let newAnchorElement = document.createElement("a");
newAnchorElement.href = "http://google.com";
newAnchorElement.textContent = "This leeds to Google!";

let firstParagraph = document.querySelector("p");
firstParagraph.append(newAnchorElement);

//Remove elements
let firstH1Element = document.querySelector("h1");
firstH1Element.remove();

//Move elements
firstParagraph.parentElement.append(firstParagraph);

//Inner HTML (text and others elements)
console.log (firstParagraph.innerHTML);

firstParagraph.innerHTML = "Hi!This is <strong>important!</strong>";
