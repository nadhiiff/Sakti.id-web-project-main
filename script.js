const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});

menu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.add('hidden');
    });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-fadeUp");
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll("section, .service-card, .superiority-item").forEach(el => {
  el.classList.add("opacity-0");
  observer.observe(el);
});

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slideshow");
  let index = 0;

  setInterval(() => {
    slides[index].style.opacity = 0;

    index = (index + 1) % slides.length;
    slides[index].style.opacity = 1;
  }, 5000);
});

function validateForm(event) {
    event.preventDefault(); // ⬅ stop the form from reloading

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (name === "" || email === "" || message === "") {
        alert("All fields must be filled out");
        return false;
    } else {
        alert("Thank you for your message, " + name + "!");
        document.getElementById('name').value = "";
        document.getElementById('email').value = "";
        document.getElementById('message').value = "";
    }
}

