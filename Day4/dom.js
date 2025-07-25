var imgContainer = document.querySelector("#img-container");

var imgNode = document.createElement("img");
var imgNode2 = document.createElement("img");

imgNode.setAttribute("src", "images/1.jpg");

imgNode2.setAttribute("src", "images/2.jpg");

imgContainer.appendChild(imgNode);
imgContainer.appendChild(imgNode2);
imgContainer.insertBefore(imgNode2, imgNode);
alert(imgContainer.childNodes.length);
imgContainer.removeChild(imgNode);
