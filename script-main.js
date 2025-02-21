document.addEventListener("DOMContentLoaded", function () {
    console.log("Скрипт загружен!");

    const menu = document.querySelector(".header2");
    const header = document.querySelector(".top.clear");

    if (!menu || !header) {
        console.error("Меню или шапка не найдены!");
        return;
    }

    function fixMenu() {
        const headerHeight = header.offsetHeight;
        const menuHeight = window.innerHeight - headerHeight;

        if (window.scrollY > headerHeight) {
            menu.style.height = `${menuHeight}px`; // Устанавливаем высоту меню
        } else {
            menu.style.height = `calc(100vh - ${headerHeight}px)`; // Высота за вычетом шапки
        }
    }

    window.addEventListener("scroll", fixMenu);
    fixMenu(); // Начальная установка
});
