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




// START Burger MENU

document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.querySelector(".burger-menu"); 
    const navLinks = document.querySelector(".nav-list");

    burgerMenu.addEventListener("click", function (event) {
        event.stopPropagation(); // Verhindert sofortiges Schließen
        navLinks.classList.toggle("active");
    });

    // Klick außerhalb des Menüs schließt es
    document.addEventListener("click", function (event) {
        if (!navLinks.contains(event.target) && !burgerMenu.contains(event.target)) {
            navLinks.classList.remove("active");
        }
    });

    // Menü schließt sich auch bei Klick auf einen Link innerhalb des Menüs
    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function () {
            navLinks.classList.remove("active");
        });
    });
});

// END Burger MENU



// START FAQ


// FAQ Dropdown-Funktionalität

document.addEventListener("DOMContentLoaded", function () {
  const toggleBlocks = document.querySelectorAll(".toggle-block");

  toggleBlocks.forEach(block => {
    const title = block.querySelector(".toggle-title");
    const box = block.querySelector(".toggle-box");
    const arrow = block.querySelector(".arrow i");

    title.addEventListener("click", () => {
      const isOpen = box.style.display === "block";


      // Aktuelles öffnen/schließen
      if (!isOpen) {
        box.style.display = "block";
        arrow.classList.remove("fa-angle-down");
        arrow.classList.add("fa-angle-up");
      } else {
        box.style.display = "none";
        arrow.classList.remove("fa-angle-up");
        arrow.classList.add("fa-angle-down");
      }
    });
  });
});


// END FAQ

