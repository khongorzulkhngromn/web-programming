window.onload = function () {
    let req = new XMLHttpRequest();

    req.onreadystatechange = () => {
        if (req.readyState == XMLHttpRequest.DONE) {
            let news = JSON.parse(req.responseText).news;
            let articles = document.getElementById("main");
            for (const iterator of news) {
                let articleElement = this.document.createElement("div");
                articleElement.innerHTML = `<p>${iterator.title}</p>`;
                console.log(iterator.title);
                articles.appendChild(articleElement);
            }
            let subnews = this.JSON.parse(req.responseText).subnews;
            let contents = this.document.getElementById("content");
            for(const iterator of subnews) {
                let articleElement = this.document.createElement("div");
                articleElement.classList.add("main-news");
                articleElement.innerHTML = `<div class="news1">
                <img
                  class="image-news"
                  width="230"
                  height="300"
                  src="${iterator.img1}"
                  alt=""
                />
                <div>
                  <h3>
                    <a href="">${iterator.title1}</a>
                  </h3>
                </div>
                <span
                  ><p class="text">
                   ${iterator.content1}
                  </p></span
                >
              </div>
              <div class="new2">
                <div class="title">
                  <h3>
                    <a href="">${iterator.title2}</a>
                  </h3>
                </div>
                <div class="news2-col">
                  <div>
                    <p class="text">
                      ${iterator.content2}
                    </p>
                  </div>
                  <div>
                    <img
                      src="${iterator.img2}"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div class="new3">
                <img
                  class="image-news"
                  width="230"
                  height="300"
                  src="${iterator.img3}"
                  alt=""
                />
                <div>
                  <h3>
                    <a href="">${iterator.title3}</a>
                  </h3>
                </div>
                <span
                  ><p class="text">
                    ${iterator.content3}
                  </p></span
                >
              </div>`;
                articles.appendChild(articleElement);
            }
        }
    }
    req.open("GET", "https://api.jsonbin.io/b/5ddbdf333da40e6f298f895f/2", true);
    req.setRequestHeader("secret-key", "$2b$10$uG2/fgXGyp4IXbRZYP2v.echcUXakwgy9pm4k/simA1hfDniSr1.a");
    req.send();
};