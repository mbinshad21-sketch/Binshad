document.addEventListener("DOMContentLoaded", () => {
  const skills = document.querySelectorAll(".skill");

  skills.forEach((skill) => {
    const bar = skill.querySelector(".skill-bar span");
    const percentText = skill.querySelector(".percent");

    const targetWidth = bar.getAttribute("data-width");

    let current = 0;
    const target = parseInt(targetWidth);

    const interval = setInterval(() => {
      if (current >= target) {
        clearInterval(interval);
      } else {
        current++;
        bar.style.width = current + "%";
        percentText.textContent = current + "%";
      }
    }, 20);
  });
});

