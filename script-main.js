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

        if (window.scrollY > headerHeight) {
            menu.style.position = "fixed"; // Меню фиксируется в верхней части
            menu.style.top = "0"; // Устанавливаем на верх
            menu.style.height = "100vh"; // Высота меню
        } else {
            menu.style.position = "absolute"; // Возвращаемся к абсолютному позиционированию
            menu.style.top = headerHeight + "px"; // Ставим под шапкой
            menu.style.height = `calc(100vh - ${headerHeight}px)`; // Высота за вычетом шапки
        }
    }

    window.addEventListener("scroll", fixMenu);
    fixMenu(); // Начальная установка
});
