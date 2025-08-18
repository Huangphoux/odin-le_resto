import { greeting } from "./greeting.js";
import "./style.css";
import profileImage from "./profile.jpg";

const image = document.createElement("img");
image.src = profileImage;

document.body.appendChild(image);

console.log(greeting);
