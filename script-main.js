document.addEventListener("DOMContentLoaded", function () {
    console.log("Скрипт загружен!");

    const menu = document.querySelector(".header2");
    const header = document.querySelector(".top.clear");

    if (!menu || !header) {
        console.error("Меню или шапка не найдены!");
        return;
    }

    function fixMenu() {
        const headerHeight = header.offsetHeight; // Высота шапки

        if (window.scrollY > headerHeight) {
            menu.style.position = "fixed"; // Фиксируем меню
            menu.style.top = "0"; // Прижимаем к верху
            menu.style.bottom = "0"; // Прижимаем к низу (займёт всю высоту)
            menu.style.height = "auto"; // Позволяем меню растягиваться на всю доступную высоту
        } else {
            menu.style.position = "absolute"; // Возвращаемся к абсолютному позиционированию
            menu.style.top = `${headerHeight}px`; // Устанавливаем под шапкой
            menu.style.bottom = "auto"; // Отменяем прижатие к низу
            menu.style.height = `calc(100vh - ${headerHeight}px)`; // Высота меню с учётом шапки
        }
    }

    window.addEventListener("scroll", fixMenu); // Обработчик скролла
    fixMenu(); // Начальная установка
});
