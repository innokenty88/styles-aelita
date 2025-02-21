document.addEventListener("DOMContentLoaded", function () {
    console.log("Скрипт загружен!");

    const menu = document.querySelector(".header2");
    const header = document.querySelector(".top.clear");
    const menuItems = document.querySelectorAll("#navmenu-h li a");

    if (!menu || !header) {
        console.error("Меню или шапка не найдены!");
        return;
    }

    function fixMenu() {
        const headerHeight = header.offsetHeight; // Высота шапки
        const isScrolled = window.scrollY > headerHeight; // Флаг, прокручен ли экран

        if (isScrolled) {
            menu.style.position = "fixed"; // Фиксируем меню
            menu.style.top = "0"; // Прижимаем к верху
            menu.style.height = "auto"; // Позволяем меню растягиваться на всю доступную высоту
            menuItems.forEach(item => {
                item.style.padding = "4vh"; // Меняем padding для элементов меню
            });
        } else {
            menu.style.position = "absolute"; // Возвращаемся к абсолютному позиционированию
            menu.style.top = `${headerHeight}px`; // Устанавливаем под шапкой
            menu.style.height = `calc(100vh - ${headerHeight}px)`; // Высота меню с учётом шапки
            menuItems.forEach(item => {
                item.style.padding = "3.5vh"; // Меняем padding для элементов меню
            });
        }
    }

    let ticking = false; // Флаг для предотвращения лишних вызовов

    window.addEventListener("scroll", () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                fixMenu();
                ticking = false; // Сброс флага
            });
            ticking = true; // Устанавливаем флаг, чтобы предотвратить лишние вызовы
        }
    });

    fixMenu(); // Начальная установка
});
