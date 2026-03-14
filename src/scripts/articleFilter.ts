let activeCategory = "";
let activeTag = "";

const articleEls = Array.from(document.querySelectorAll<HTMLElement>("#articles-grid > div"));
const noResults = document.getElementById("no-results");
const catBtns = Array.from(document.querySelectorAll<HTMLElement>(".filter-cat"));
const tagBtns = Array.from(document.querySelectorAll<HTMLElement>(".filter-tag"));

function setButtonActive(btn: HTMLElement, active: boolean) {
  btn.setAttribute("aria-pressed", String(active));
  if (active) {
    btn.classList.remove("border-input", "text-muted-foreground");
    btn.classList.add("border-primary", "text-primary");
  } else {
    btn.classList.remove("border-primary", "text-primary");
    btn.classList.add("border-input", "text-muted-foreground");
  }
}

function filterArticles() {
  let visible = 0;

  for (const el of articleEls) {
    const cat = el.dataset.articleCategory || "";
    const tags = (el.dataset.articleTags || "").split(",");
    const matchCat = !activeCategory || cat === activeCategory;
    const matchTag = !activeTag || tags.includes(activeTag);

    if (matchCat && matchTag) {
      el.style.display = "";
      visible++;
    } else {
      el.style.display = "none";
    }
  }

  if (noResults) {
    noResults.classList.toggle("hidden", visible > 0);
  }
}

document.addEventListener("click", (e) => {
  const catBtn = (e.target as HTMLElement).closest<HTMLElement>(".filter-cat");
  if (catBtn) {
    activeCategory = catBtn.dataset.category || "";
    for (const b of catBtns) {
      setButtonActive(b, (b.dataset.category || "") === activeCategory);
    }
    filterArticles();
    return;
  }

  const tagBtn = (e.target as HTMLElement).closest<HTMLElement>(".filter-tag");
  if (tagBtn) {
    const tag = tagBtn.dataset.tag || "";
    activeTag = activeTag === tag ? "" : tag;
    for (const b of tagBtns) {
      setButtonActive(b, (b.dataset.tag || "") === activeTag);
    }
    filterArticles();
  }
});
