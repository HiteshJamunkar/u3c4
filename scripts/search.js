// Ude Import export (MANDATORY)
import { navbar } from "../components/navbar.js";
let navbar1 = document.getElementById("navbar");
navbar1.innerHTML = navbar();

// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import { topNews } from "./searchnews.js";
import { append } from "./country.js";

let query = localStorage.getItem("news");
topNews(query).then((data) => {
  let news = document.getElementById("results");
  news.innerHTML = null;
  append(data.articles, news);
});

let aSearch = (e) => {
  if (e.key === "Enter") {
    let search = document.getElementById("search_input").value;
    localStorage.setItem("news", search);
    let query = localStorage.getItem("news");
    topNews(query).then((data) => {
      let news = document.getElementById("results");
      news.innerHTML = null;
      append(data.articles, news);
    });
  }
};

const querySearch = document.getElementById("search_input");
querySearch.addEventListener("keydown", aSearch);