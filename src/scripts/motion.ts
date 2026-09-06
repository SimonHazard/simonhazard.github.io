const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
const toggle = document.querySelector<HTMLButtonElement>("[data-motion-toggle]");
let paused = false;
try {
  paused = sessionStorage.getItem("motion-paused") === "true";
} catch {
  /* Motion controls still work without storage. */
}

function syncMotion() {
  document.documentElement.classList.toggle("motion-paused", paused || preference.matches);
  if (paused || preference.matches) {
    for (const element of document.querySelectorAll("[data-reveal]")) {
      for (const animation of element.getAnimations()) animation.cancel();
    }
  }
  if (!toggle) return;
  toggle.hidden = preference.matches;
  toggle.setAttribute("aria-pressed", String(paused));
  const label = toggle.querySelector("[data-motion-label]");
  if (label) label.textContent = paused ? "Resume motion" : "Pause motion";
}
syncMotion();
document.documentElement.classList.add("motion-ready");
preference.addEventListener("change", syncMotion);
toggle?.addEventListener("click", () => {
  paused = !paused;
  try {
    sessionStorage.setItem("motion-paused", String(paused));
  } catch {
    /* Optional persistence. */
  }
  syncMotion();
});

// Content stays visible without JavaScript. Animate once when it enters view.
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const element = entry.target as HTMLElement;
        if (!preference.matches && !paused && !element.contains(document.activeElement)) {
          element.animate(
            [
              { opacity: 0, transform: "translateY(16px)" },
              { opacity: 1, transform: "translateY(0)" },
            ],
            { duration: 480, easing: "cubic-bezier(0.19, 1, 0.22, 1)" },
          );
        }
        observer.unobserve(element);
      }
    },
    { threshold: 0.08 },
  );
  for (const element of document.querySelectorAll("[data-reveal]")) observer.observe(element);
}
// Keyboard focus must never wait for a reveal to finish.
document.addEventListener("focusin", (event) => {
  const element = (event.target as Element).closest("[data-reveal]");
  for (const animation of element?.getAnimations() ?? []) animation.cancel();
});
document.addEventListener("visibilitychange", () => {
  document.documentElement.classList.toggle("page-hidden", document.hidden);
});
