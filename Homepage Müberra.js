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

// START FOMURLAR

document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  const successMessage = document.getElementById('successMessage');
  
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');
  
  function validateEmail(email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
  }
  
  contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Reset error messages
      nameError.textContent = '';
      emailError.textContent = '';
      messageError.textContent = '';
      
      let isValid = true;
      
      // Validate name
      if (nameInput.value.trim() === '') {
          nameError.textContent = 'Lütfen adınızı girin';
          isValid = false;
      }
      
      // Validate email
      if (emailInput.value.trim() === '') {
          emailError.textContent = 'Lütfen e-posta adresinizi giriniz';
          isValid = false;
      } else if (!validateEmail(emailInput.value.trim())) {
          emailError.textContent = 'Geçerli bir e';
          isValid = false;
      }
      
      // Validate message
      if (messageInput.value.trim() === '') {
          messageError.textContent = 'Lütfen mesajınızı girin';
          isValid = false;
      }
      
      if (isValid) {
          // In einer echten Anwendung würden Sie hier die Daten an einen Server senden
          // Hier zeigen wir nur die Erfolgsmeldung an
          contactForm.style.display = 'none';
          successMessage.style.display = 'block';
          
          // In einer realen Implementierung würden Sie hier einen AJAX-Request senden
          console.log('Form submitted with data:', {
              name: nameInput.value,
              email: emailInput.value,
              message: messageInput.value
          });
      }
  });
});

// END FOMURLAR