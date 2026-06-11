import "./styles.css";
import sample from "./sample.jpg";

const testImage = document.createElement("img");
testImage.src = sample;
document.body.appendChild(testImage);

console.log("Hello from template project!");
