/*!
* Start Bootstrap - Blog Post v5.0.9 (https://startbootstrap.com/template/blog-post)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-blog-post/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

collapsed = true;

function revert() {
    document.getElementById("mobile-top").style.display = "none";
    document.getElementsByClassName("col-lg-4")[1].style.display = "block";
    document.querySelectorAll(".side-card-mobile").forEach(element => {
      element.style.display = "none";
    });
}

function search() {
    query = document.getElementById("search-text").value;
    window.location = "articles.html?q=" + query;
}

function toc() {
    cards = document.getElementsByClassName("col-lg-4")[1].getElementsByClassName("card");
    tc = cards[1].innerHTML;
    searchs = cards[0].innerHTML;
    document.getElementsByClassName("col-lg-4")[0].style.display = "none";
    document.getElementById("mobile-top").style.display = "block";
    document.getElementById("to-hide").innerHTML += "<div style='margin-top:10px;' class='card mb-4'>"+searchs+"</div><div class='card mb-4'>"+tc+"</div>"; //+document.getElementsByClassName("row")[0].innerHTML;
    document.querySelectorAll(".side-card-mobile").forEach(element => {
      element.style.display = "block";
    });
}

if (window.innerWidth <= 991) {
    toc();
} else {
  revert();
}

window.addEventListener("resize", () => {
  if (window.innerWidth <= 991) {
    toc();
  } else {
    revert();
  }
});

document.getElementById("close-btn").addEventListener("click", function() {
  document.getElementById("bottom-container").style.display = "none";
});

document.getElementById("collapse-btn").addEventListener("click", function() {
  if (collapsed) {
    document.getElementById("to-hide").style.display = "block";
    document.getElementById("collapse-btn").innerHTML = "<span id='collapse-btn'>Collapse</span>";
  } else {
    document.getElementById("to-hide").style.display = "none";
    document.getElementById("collapse-btn").innerHTML = "<span id='collapse-btn'>Show</span>";
  }
  collapsed = !collapsed;
});