// alert(screen.availWidth);
// alert(screen.availHeight);
let isAndroid = /Android/i.test(navigator.userAgent);

// get links
let facebookLink = document.querySelector("#facebook-link");
let instgramLink = document.querySelector("#instgram-link");
let twitterLink = document.querySelector("#twitter-link");

// set links to work with content if android device

if (isAndroid) {
  facebookLink.setAttribute("href", "fb://profile?id=100000006964660");
  twitterLink.setAttribute(
    "href",
    "https://twitter.com/intent/user?screen_name=abdrabo60"
  );
  instgramLink.setAttribute("href", "http://instagram.com/_u/abdrabo60");
}

let logoBtn = document.querySelector("svg");
let headerMenu = document.querySelector("header ul");
let imageContainer = document.querySelector(".img-container");

logoBtn.onclick = () => {
  headerMenu.classList.toggle("hidden");
};

changeImageSize();

window.onresize = () => {
  changeImageSize();
};

function changeImageSize() {
  let value = document.getElementById("image-size").value;
  let factor = imageContainer.offsetHeight / 3;
  if (value * factor > imageContainer.offsetHeight) {
    document.getElementsByClassName("img-container")[0].style.backgroundSize =
      imageContainer.offsetHeight + "px";
  } else {
    document.getElementsByClassName("img-container")[0].style.backgroundSize =
      value * factor + "px";
  }
}
