window.onscroll = () => {
  if (window.scrollY >= 100)
    document.querySelector(".navbar").style.background = "rgba(0, 0, 0, 1)";
  else document.querySelector(".navbar").style.background = "transparent";
};

const topFunction = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

var t1 = gsap.timeline({
  defaults: { duration: 0.7, ease: Back.easeOut.config(2), opacity: 0 },
});

t1.from(
  ".header-img",
  { delay: 0.5, transformOrigin: "center", rotate: -360 },
  ""
);

// var t2 = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".jumbotron",
//     start: "center",
//   },
// });
// t2.from(
//   ".how-img-wrapper",
//   { scale: 0, transformOrigin: "center", opacity: 0, x: 200 },
//   "-=0.7"
// );
// t2.from(
//   ".how-img-wrapper-mobile",
//   { scale: 0, transformOrigin: "center", opacity: 0, y: 200 },
//   "-=0.5"
// );

var t3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".how",
    start: "center",
  },
});

t3.from(".startup-img", { transformOrigin: "center", opacity: 0, y: 300 });
t3.from(
  ".startup_content",
  {
    transformOrigin: "center",
    opacity: 0,
    scale: 0,
  },
  "-=0.5"
);

var t4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".startup",
    start: "center",
    ease: Back.easeOut.config(2),
  },
});

t4.from(".our-work-img", {
  transformOrigin: "center",
  opacity: 0,
  scale: 0,
  y: -150,
});

var t5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".our_work",
    start: "center",
    ease: Back.easeOut.config(2),
    delay: 1,
  },
});

t5.from(".our_methods-img", {
  transformOrigin: "center",
  opacity: 0,
  rotate: 90,
});