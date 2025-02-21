window.addEventListener("scroll", () => {
    const topClear = document.querySelector(".top_clear"); // Шапка
    const menu = document.querySelector(".header2");

    if (window.scrollY > topClear.offsetHeight) {
        menu.classList.add("fixed-menu");
    } else {
        menu.classList.remove("fixed-menu");
    }
});
