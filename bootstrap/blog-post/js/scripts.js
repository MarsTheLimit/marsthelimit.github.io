console.log("Script loaded.");

collapsed = true;

function createNav() {
  const navBar = document.createElement("nav");
  navBar.className = "navbar navbar-expand-lg navbar-dark bg-dark";
  navBar.innerHTML = `<div class="container">
                  <a href="/" class="navbar-brand">MarsTheLimit</a>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                          <li class="nav-item"><a href="/" class="nav-link" id="navHome">Home</a></li>
                          <li class="nav-item"><a href="/articles/" class="nav-link" id="navArticles">Articles</a></li>
                          <li class="nav-item"><a href="/about" class="nav-link" id="navAbout">About</a></li>
                          <li class="nav-item"><a href="/contact" class="nav-link" id="navContact">Contact</a></li>
                      </ul>
                  </div>
              </div>`;

  document.body.prepend(navBar);
  console.log('created navbar');

  if (window.location.pathname.includes('articles')) {
    document.getElementById("navArticles").className += " active";
    document.getElementById("navArticles").setAttribute('aria-current', 'page');
    console.log("here")
  } if (window.location.pathname.includes("contact")) {
    document.getElementById("navContact").className += " active";
    document.getElementById("navContact").setAttribute('aria-current', 'page');
  } if (window.location.pathname.includes('about')) {
    document.getElementById("navAbout").className += " active";
    document.getElementById("navAbout").setAttribute('aria-current', 'page');
  }
}

function revert() {
    document.getElementById("mobile-top").style.display = "none";
    document.getElementsByClassName("col-lg-4")[1].style.display = "block";
    document.querySelectorAll(".side-card-mobile").forEach(element => {
      element.style.display = "none";
    });
}

function search() {
    query = document.getElementById("search-text").value;
    window.location = "/articles/?q=" + query;
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

function addShares(cont) {
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
  fb.innerHTML = '<div class="fb-share-button" data-href="' + window.location.href + '" data-layout="" data-size="small"><a href="https://www.facebook.com/sharer/sharer.php?u='+ window.location.href +'&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore" target="_blank"><img src="/src/facebook-icon.png" style="margin: 0; height: 35px; width: 35px;" alt="share this article on facebook" ></a></div>';

  const x = document.createElement("div");
  x.innerHTML = '<a href="https://twitter.com/intent/tweet?url=' + window.location.href + '" target="_blank" rel="noopener noreferrer"><img src="/src/x-icon.png" style="margin: 0; height: 35px; width: 35px;" alt="share this article on x" ></a>'

  const li = document.createElement("div");
  li.innerHTML = '<a href="https://www.linkedin.com/shareArticle?mini=true&url=' + window.location.href + '&source=MarstheLimit" target="_blank" rel="noopener noreferrer"><img src="/src/linkedin-icon.png" style="margin: 0; height: 35px; width: 35px;" alt="share this article on LinkedIn" ></a>'

  const r = document.createElement("div");
  r.innerHTML = '<a href="https://www.reddit.com/submit?url=' + window.location.href + '" target="_blank" rel="noopener noreferrer"><img src="/src/reddit-icon.png" style="margin: 0; height: 35px; width: 35px;" alt="share this article on reddit" ></a>'

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

if (!window.location.pathname.includes('/articles/')) {
  createNav();
} else {
createNav();

current = document.getElementById("to-hide").innerHTML;
const cont = document.createElement("div");

addShares(cont);
createNav();

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
} catch (TypeError) {}

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
}

console.log("hello")