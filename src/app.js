/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector("#dominios").innerHTML = generarDominio();
};

let generarDominio = () => {
  let pronoun = ["the", "your", "our", "my"];
  let adj = ["great", "big", "gorgeous", "exquisite"];
  let noun = ["jogger", "racoon", "ornitorrinco", "dog", "cat"];
  let ext = [".com.ve"];

  let listaHTML = "<ul>";

  for (let p = 0; p < pronoun.length; p++) {
    for (let a = 0; a < adj.length; a++) {
      for (let n = 0; n < noun.length; n++) {
        let elem1 = pronoun[p];
        let elem2 = adj[a];
        let elem3 = noun[n];
        let elem4 = ext;
        let genNom = elem1 + elem2 + elem3 + elem4;
        listaHTML += "<li>" + genNom + "</li>";
      }
    }
  }
  return listaHTML;
};
