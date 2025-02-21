document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector(".header2");
    const headerHeight = document.querySelector(".header").offsetHeight; // Высота шапки

    function fixMenu() {
        if (window.scrollY > headerHeight) {
            menu.style.position = "fixed";
            menu.style.top = "0";
            menu.style.height = "100vh"; // Делаем меню во всю высоту экрана
        } else {
            menu.style.position = "absolute";
            menu.style.top = headerHeight + "px"; // Оставляем под шапкой
            menu.style.height = `calc(100vh - ${headerHeight}px)`; // Высота экрана - высота шапки
        }
    }

    window.addEventListener("scroll", fixMenu);
    fixMenu(); // Запускаем при загрузке страницы
});
