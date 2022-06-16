/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  /* console.log("Hello Rigo from the console :B!"); */

  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let primero = Math.floor(Math.random() * 4);
  let segundo = Math.floor(Math.random() * 4);
  let tercero = Math.floor(Math.random() * 3);
  let cuarto = Math.floor(Math.random() * 5);

  let a = who[primero];
  let b = action[segundo];
  let c = what[tercero];
  let d = when[cuarto];
  document.querySelector("p").innerHTML = a + " " + b + " " + c + " " + d;
};
