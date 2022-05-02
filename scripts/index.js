// Ude Import export (MANDATORY)
import { navbar } from "../components/navbar.js";
let navbar1 = document.getElementById("navbar");
navbar1.innerHTML = navbar();

import { countryNews, append } from "./sidebar.js";

let search = (cc) => {
  countryNews(cc).then((data) => {
    let news = document.getElementById("results");
    news.innerHTML = null;
    append(data.articles, news);
  });
};

let country = document.getElementById("countries").children;
function cSearch() {
  let cc = this.id;
  search(cc);
}

for (let el of country) {
  el.addEventListener("click", cSearch);
}

let aSearch = (e) => {
  if (e.key === "Enter") {
    console.log(querySearch.value);
    localStorage.setItem("news", querySearch.value);
    window.location.href = "../search.html"
  }
};

const querySearch = document.getElementById("search_input");
querySearch.addEventListener("keydown", aSearch);