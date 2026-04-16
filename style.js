 function toggleMenu() {
      document.getElementById("navLinks").classList.toggle("nav-active");
    }
    
  window.addEventListener("scroll", () => {
    document.querySelectorAll(".skill-bar span").forEach(bar => {
      bar.style.width = bar.style.width;
    });
  });
  
const skillSection = document.getElementById("skills");
const bars = document.querySelectorAll(".skill-bar span");
const percents = document.querySelectorAll(".percent");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {

      bars.forEach((bar, index) => {
        const value = bar.getAttribute("data-width");
        bar.style.width = value;

        // Animate percentage number
        let start = 0;
        let end = parseInt(value);

        let counter = setInterval(() => {
          if (start >= end) {
            clearInterval(counter);
          } else {
            start++;
            percents[index].textContent = start + "%";
          }
        }, 15);
      });

      observer.unobserve(skillSection);
    }
  });
}, { threshold: 0.5 });



