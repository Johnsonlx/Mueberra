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

// Burger MENU

document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.querySelector(".burger-menu"); 
    const navLinks = document.querySelector(".nav-list");

    burgerMenu.addEventListener("click", function (event) {
        event.stopPropagation(); // Verhindert das Schließen beim Klick auf das Burger-Icon
        navLinks.classList.toggle("active");
    });

    document.addEventListener("click", function (event) {
        // Prüfen, ob der Klick NICHT innerhalb des Menüs oder des Icons war
        if (!navLinks.contains(event.target) && !burgerMenu.contains(event.target)) {
            navLinks.classList.remove("active");
        }
    });

    // Falls das Menü Links enthält, die geklickt werden, soll es sich auch schließen
    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function () {
            navLinks.classList.remove("active");
        });
    });
});
