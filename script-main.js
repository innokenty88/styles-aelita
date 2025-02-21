document.addEventListener("DOMContentLoaded", function () {
    console.log("Скрипт загружен!");

    const menu = document.querySelector(".header2");
    const header = document.querySelector(".top.clear");

    if (!menu || !header) {
        console.error("Меню или шапка не найдены!");
        return;
    }

    function fixMenu() {
        const headerHeight = header.offsetHeight; // Получаем высоту шапки
        const windowHeight = window.innerHeight; // Высота окна

        if (window.scrollY > headerHeight) {
            menu.style.position = "fixed"; // Фиксируем меню
            menu.style.top = "0"; // Устанавливаем меню на верх
            menu.style.height = `${windowHeight - headerHeight}px`; // Высота меню с учетом шапки
        } else {
            menu.style.position = "absolute"; // Возвращаемся к абсолютному позиционированию
            menu.style.top = `${headerHeight}px`; // Устанавливаем под шапкой
            menu.style.height = `calc(100vh - ${headerHeight}px)`; // Высота меню с учетом шапки
        }
    }

    window.addEventListener("scroll", fixMenu); // Устанавливаем обработчик события прокрутки
    fixMenu(); // Начальная установка
});
