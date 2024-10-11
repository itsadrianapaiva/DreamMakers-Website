

// console.clear();

// gsap.registerPlugin(ScrollTrigger);

// window.addEventListener("load", () => {
//   gsap
//     .timeline({
//       scrollTrigger: {
//         trigger: ".hero-content",
//         start: "top top",
//         end: "+=150%",
//         pin: true,
//         scrub: 1,
//         markers: false
//       }
//     })
//     .to("img", {
//       scale: 2,
//       z: 350,
//       transformOrigin: "center center",
//       ease: "power1.inOut"
//     })
//     .to(
//       ".section-hero",
//       {
//         scale: 1.1,
//         transformOrigin: "center center",
//         ease: "power1.inOut"
//       },
//       "<"
//     );
// });


const navToggle = document.getElementById('navToggle');


navToggle.addEventListener('click', () => {
  const navMenu = document.getElementById('navMenu');
  navMenu.classList.toggle('active');
});
