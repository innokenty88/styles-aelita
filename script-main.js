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

        if (window.scrollY > headerHeight) {
            menu.style.position = "fixed"; // Фиксируем меню
            menu.style.top = "0"; // Прижимаем к верху
            menu.style.bottom = "0"; // Прижимаем к низу
            menu.style.height = "auto"; // Позволяем меню растягиваться на всю доступную высоту

            // Меняем padding для элементов меню
            menuItems.forEach(item => {
                item.style.padding = "4vh !important";
            });
        } else {
            menu.style.position = "absolute"; // Возвращаемся к абсолютному позиционированию
            menu.style.top = `${headerHeight}px`; // Устанавливаем под шапкой
            menu.style.bottom = "auto"; // Отменяем прижатие к низу
            menu.style.height = `calc(100vh - ${headerHeight}px)`; // Высота меню с учётом шапки

            // Меняем padding для элементов меню
            menuItems.forEach(item => {
                item.style.padding = "3.5vh !important";
            });
        }
    }

    window.addEventListener("scroll", () => {
        requestAnimationFrame(fixMenu); // Плавная анимация при скролле
    });

    fixMenu(); // Начальная установка
});
