import "bootstrap";
import "./style.css";

let pronoun = ["the", "our", "my", "your"];
let adj = ["great", "big", "happy", "gorgeous"];
let noun = ["jogger", "racoon", "ornotorrinco", "cat"];
let extension = [".com", ".net", ".com.ve"];

function generadorDeDominios() {
  let pronounLoop = Math.floor(Math.random() * pronoun.length);
  {
    let adjLoop = Math.floor(Math.random() * adj.length);
    {
      let nounLoop = Math.floor(Math.random() * noun.length);
      {
        let extensionLoop = Math.floor(Math.random() * extension.length);
        {
          return (
            pronoun[pronounLoop] +
            adj[adjLoop] +
            noun[nounLoop] +
            extension[extensionLoop]
          );
        }
      }
    }
  }
}

window.onload = function() {
  //write your code here
  let domainGen = document.getElementById("domainGenerator");
  domainGen.innerHTML = generadorDeDominios(pronoun, adj, noun);
};
