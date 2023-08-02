import { caesarCipher13 } from "../../utils/cipher.js";

export default function Card(author) {
  // start of Card function body
  const card = document.createElement("article");

  card.classList.add("card");

  const title = document.createElement("h2");
  // sets this as the class
  title.className = "card__title";
  title.textContent = author.name;

  const text = document.createElement("p");
  text.className = "card__text";
  text.textContent = caesarCipher13(author.text);

  const button = document.createElement("button");
  button.className = "card__button";
  button.textContent = "Decipher";
  button.addEventListener("click", handleDecipherButtonClick);

  card.append(title, text, button);

  function handleDecipherButtonClick() {
    text.textContent = author.text;
    button.setAttribute("disabled", "");
    // adds another class
    card.classList.add("card--deciphered");
  }

  return card;
}
// end of Card function body
