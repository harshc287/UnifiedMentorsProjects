function animateCounter(id, target, suffix = "%", duration = 2000) {
  const element = document.getElementById(id);
  if (!element) return;

  let current = 0;
  const increment = target / (duration / 16);
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    element.textContent = Math.floor(current) + suffix;
    element.classList.add("count-animation");
  }, 16);
}

window.addEventListener("load", () => {
  
  setTimeout(() => animateCounter("global-adoption", 73, "%"), 500);
  setTimeout(() => animateCounter("market-value", 184, "B"), 800);
  setTimeout(() => animateCounter("growth-rate", 37, "%"), 1100);

  setTimeout(() => animateCounter("market-size", 184, "B"), 1500);
  setTimeout(() => animateCounter("projected-growth", 826, "B"), 1800);
  setTimeout(() => animateCounter("companies-using", 87, "%"), 2100);
  setTimeout(() => animateCounter("job-creation", 97, "M"), 2400);
});

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

document.querySelectorAll(".industry-card, .trend-card").forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(30px)";
  card.style.transition = "opacity 0.8s ease, transform 0.8s ease";
  observer.observe(card);
});
