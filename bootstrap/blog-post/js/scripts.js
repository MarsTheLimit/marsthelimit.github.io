/*!
* Start Bootstrap - Blog Post v5.0.9 (https://startbootstrap.com/template/blog-post)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-blog-post/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

originalRow = document.getElementsByClassName("row")[0].innerHTML;
origcards = document.getElementsByClassName("col-lg-4")[0].getElementsByClassName("card");

function revert() {
    document.getElementsByClassName("row")[0].innerHTML = originalRow;
    document.getElementsByClassName("col-lg-4")[0].getElementsByClassName("card").innerHTML = origcards;
}

function search() {
    query = document.getElementById("search-text").value;
    window.location = "articles.html?q=" + query;
}

function toc() {
    cards = document.getElementsByClassName("col-lg-4")[0].getElementsByClassName("card");
    tc = cards[1].innerHTML
    searchs = cards[0].innerHTML;
    const elementsArray = Array.from(cards);
    elementsArray.forEach(el => el.remove());
    document.getElementsByClassName("row")[0].innerHTML = "<div class='col-lg-4'><div class='card mb-4'>"+searchs+"</div><div class='card mb-4'>"+tc+"</div></div>"+document.getElementsByClassName("row")[0].innerHTML;
}
if (window.innerWidth <= 600) {
    toc();
}

window.addEventListener("resize", () => {
  // Your code here
  if (window.innerWidth <= 991) {
    toc();
  } else {
    revert();
  }
});