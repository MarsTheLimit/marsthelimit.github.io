/*!
* Start Bootstrap - Blog Post v5.0.9 (https://startbootstrap.com/template/blog-post)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-blog-post/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

current = document.getElementById("to-hide").innerHTML;
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
    document.getElementById("to-hide").innerHTML = "<div class='card mb-4'>"+searchs+"</div><div class='card mb-4'>"+tc+"</div>"
    document.getElementById("to-hide").innerHTML += current;
    document.querySelectorAll(".side-card-mobile").forEach(element => {
      element.style.display = "block";
    });
}

function setSocialsDis(cont) {
  if (window.innerWidth <= 991) {
    socialsDis = 100;
    console.log(socialsDis)
  } 
  else if (991 < window.innerWidth && window.innerWidth <= 1199) {
    socialsDis = 30;
    console.log(socialsDis)
  } 
  else if (1199 < window.innerWidth) {
    socialsDis = 25;
    console.log(socialsDis)
  }
  cont.style.width= socialsDis + "%";
}

const cont = document.createElement("div");

function addShares() {
  cont.className = "social-row";
  cont.style.margin = '1px';
  cont.style.marginTop = '5px';
  setSocialsDis(cont);
  const row1 = document.createElement("div");
  row1.className = "col-lg-3";
  const row2 = document.createElement("div");
  row2.className = "col-lg-3";
  const row3 = document.createElement("div");
  row3.className = "col-lg-3";
  const row4 = document.createElement("div");
  row4.className = "col-lg-3";
  cont.appendChild(row1);
  cont.appendChild(row2);
  cont.appendChild(row3);
  cont.appendChild(row4);

  const fb = document.createElement("div");
  fb.innerHTML = '<div class="fb-share-button" data-href="' + window.location.href + '" data-layout="" data-size="small"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u='+ window.location.href +'&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore"><img style="margin: 0; height: 35px;" src="src/facebook-icon.png" ></a></div>';

  const x = document.createElement("div");
  x.innerHTML = '<a href="https://twitter.com/intent/tweet?url=' + window.location.href + '" target="_blank" rel="noopener noreferrer"><img style="height: 35px;" src="src/x-icon.png" ></a>'

  const li = document.createElement("div");
  li.innerHTML = '<a href="https://www.linkedin.com/shareArticle?mini=true&url=' + window.location.href + '&source=MarstheLimit" target="_blank" rel="noopener noreferrer"><img style="height: 35px;" src="src/linkedin-icon.png" ></a>'

  const r = document.createElement("div");
  r.innerHTML = '<a href="https://www.reddit.com/submit?url=' + window.location.href + '" target="_blank" rel="noopener noreferrer"><img style="height: 35px;" src="src/reddit-icon.png" ></a>'

  row1.appendChild(fb);
  row2.appendChild(x);
  row3.appendChild(li);
  row4.appendChild(r);

  headingThing = document.getElementsByTagName("header")[0];
  document.getElementsByTagName("header")[0].insertBefore(cont, headingThing.children[-1]);
  const bodyCotent = document.createElement("div");
  bodyCotent.innerHTML = '<div id="fb-root"></div><script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v23.0"></script>';
  document.body.prepend(bodyCotent);
}

addShares();

if (window.innerWidth <= 991) {
    toc();
} else {
  revert();
}

window.addEventListener("resize", () => {
  setSocialsDis(cont);
  if (window.innerWidth <= 991) {
    toc();
  } else {
    revert();
  }
});

try {
  document.getElementById("close-btn").addEventListener("click", function() {
    document.getElementById("bottom-container").style.display = "none";
  });
} catch (TypeError) {

}

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