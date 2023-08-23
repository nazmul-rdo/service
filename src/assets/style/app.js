// navbar handle
const navLinks = document.querySelector(".nav-links");
function onToggleMenu(e) {
  e.name = e.name === "menu" ? "close" : "menu";
  navLinks.classList.toggle("top-[8%]");
}
//accordion handle
const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item, index) => {
  const header = item.querySelector(".accordion-header");
  const icon = item.querySelector(".accordion-icon i");
  const content = item.querySelector(".accordion-content");

  if (index === 0) {
    item.classList.add("open");
    content.classList.remove("hidden");
    icon.classList.remove("fa-chevron-down");
    icon.classList.add("fa-chevron-up");
  }

  header.addEventListener("click", () => {
    if (item.classList.contains("open")) {
      item.classList.remove("open");
      content.classList.add("hidden");
      icon.classList.remove("fa-chevron-up");
      icon.classList.add("fa-chevron-down");
    } else {
      accordionItems.forEach((otherItem) => {
        otherItem.classList.remove("open");
        otherItem
          .querySelector(".accordion-content")
          .classList.add("hidden");
        otherItem
          .querySelector(".accordion-icon i")
          .classList.remove("fa-chevron-up");
        otherItem
          .querySelector(".accordion-icon i")
          .classList.add("fa-chevron-down");
      });

      item.classList.add("open");
      content.classList.remove("hidden");
      icon.classList.remove("fa-chevron-down");
      icon.classList.add("fa-chevron-up");
    }
  });
});