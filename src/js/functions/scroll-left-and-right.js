let content = document.querySelector(".testimonials__listOfClients");
let content_2 = document.querySelector(".testimonials__listOfClients-wrap");
let content_3 = document.querySelector(".testimonials__section");
let content_4 = document.querySelector(".about");
let content_5 = document.querySelector(".faq");
let title = document.querySelector(".testimonials__title");
let listOfLi = document.querySelectorAll(".testimonials__client-container");
let scrolledY = "";

let scroled = content_3.style.height;

window.addEventListener("scroll", function () {
  setInterval(() => (scrolledY = window.scrollY), 500);

  console.log(scrolledY);
  if (window.innerWidth > 1400) {
    // listOfLi.forEach((item) => (item.style.transform = "scale(1.3)"));
    content.style.width = "2500px";
    content.classList.remove("_anim-items");
    content.style.opacity = "1";

    if (scrolledY > 1875 && scrolledY < 2500) {
      title.style.opacity = "0.8";
      content.style.opacity = "1";
      content.style.top = "0";
      content_3.style.position = "fixed";
      content_2.style.position = "fixed";
      content_2.style.height = "100vh";
      content.style.position = "fixed";
      content_3.style.left = "300px";

      content.style.left = -(scrolledY - 1875 - 240) * 2.55 + "px";
      content_2.style.left = -(scrolledY - 1875) * 0.55 + "px";
      listOfLi.forEach(
        (item) =>
          (item.style.left = (scrolledY - 1875 - 240) * Math.random + "px")
      );

      content_4.style.visibility = "hidden";
      content_5.style.visibility = "hidden";
    }
    if (scrolledY <= 1875) {
      content_3.style.position = "inherit";
      content_3.style.left = "0px";
      title.style.opacity = "1";
      content.style.opacity = "0";
    }
    if (scrolledY >= 2500) {
      title.style.opacity = "1";
      content_3.style.position = "inherit";
      content_3.style.left = "0px";
      content.style.opacity = "0";
      content_3.scrollIntoView({ block: "start", behavior: "smooth" });
      content_4.style.visibility = "visible";
      content_5.style.visibility = "visible";
    }
  }
});
