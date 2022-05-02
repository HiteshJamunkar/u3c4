let countryNews = async (query) => {
    try {
      let res = await fetch(
        `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${query}`
      );
      let data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  
  let append = (data, news) => {
    data.forEach((element) => {
      let main = document.createElement("div");
      main.setAttribute("class", "news");
      let u2i = document.createElement("img");
      u2i.src = element.urlToImage;
      let div = document.createElement("div");
      div.style.padding = "0px 20px";
      let headline = document.createElement("h3");
      headline.innerText = element.title;
      let content = document.createElement("p");
      content.innerText = element.description;
      div.append(headline, content);
      main.append(u2i, div);
      main.onclick = () => {
        let detailNews = {
          img: element.urlToImage,
          headline: element.title,
          description: element.description,
          content: element.content,
        };
        localStorage.setItem("details", JSON.stringify(detailNews));
        window.location.href = "../news.html";
      };
      news.append(main);
    });
  };
  
  export { countryNews, append };