// Fader Text

const faders = document.querySelectorAll
('.fade-in');

const appearoptions = { 
    threshold: 1,
    rootMargin: "0px 0px -50px 0px"
};


const appearOnScoll = new IntersectionObserver
(function(
    entries,
    appearOnScoll
) {
    entries.forEach(entry => {
      if (!entry.isIntersecting)  {
        return;
      } else {
        entry.target.classList.add('appear');
        appearOnScoll.unobserve(entry.target);
      }
    })
},
appearoptions);

faders.forEach(fader => {
    appearOnScoll.observe(fader);
})

// Scroll Fade in

const test = document.querySelectorAll
('.test');

const appearoptions2 = { 
  threshold: 1,
  rootMargin: "0px 0px 180px 0px"
};


const appearOnScoll2 = new IntersectionObserver
(function(
    entries,
    appearOnScoll
) {
    entries.forEach(entry => {
      if (!entry.isIntersecting)  {
        return;
      } else {
        entry.target.classList.add('appear');
        appearOnScoll.unobserve(entry.target);
      }
    })
},
appearoptions2);


test.forEach(fader => {
  appearOnScoll2.observe(fader);
})




// Fade in while Scolling for Pics

// const observer = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if(entry.isIntersecting){
//       document.querySelectorAll(".project project-tile")[0].classList.add("appear")
//     }
//   })
// })


// observer.observe(document.querySelector(".projects-grid"));
