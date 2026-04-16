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

observer.observe(skillSection);
(function(){
  emailjs.init("YOUR_PUBLIC_KEY"); // replace
})();

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
    .then(function() {
      alert("Message sent successfully!");
    }, function(error) {
      alert("Failed to send message");
    });

  this.reset();
});

  document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.sendForm(
      "service_lp4q50g",     // Service ID
      "template_4hlg8ai",    // Template ID
      this
    )
    .then(function() {
      alert("Message sent successfully!");
    }, function(error) {
      alert("Failed to send message. Error: " + JSON.stringify(error));
    });
  });


