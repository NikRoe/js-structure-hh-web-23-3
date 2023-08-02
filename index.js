// named imports
import { authors } from "./utils/author.js";

// default imports
import Header from "./components/Header/Header.js";
import Card from "./components/Card/Card.js";

/** Get root element */

const root = document.querySelector("#root");

const header = Header();

root.append(header);

/** Main: Author Cards */

authors.forEach((author) => {
  const card = Card(author);

  root.append(card);
});
