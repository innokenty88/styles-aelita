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
        const windowHeight = window.innerHeight; // Высота окна

        if (window.scrollY > headerHeight) {
            menu.style.position = "fixed"; // Фиксируем меню
            menu.style.top = "0"; // Прижимаем к верху
            menu.style.bottom = "0"; // Прижимаем к низу
            menu.style.height = `${windowHeight}px`; // Высота меню на всю высоту окна

        } else {
            menu.style.position = "absolute"; // Возвращаемся к абсолютному позиционированию
            menu.style.height = `100vh`; // Высота меню с учётом шапки

        }
    }

    let ticking = false; // Флаг для предотвращения лишних вызовов

    window.addEventListener("scroll", () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                fixMenu(); // Вызов функции для обновления меню
                ticking = false; // Сброс флага
            });
            ticking = true; // Устанавливаем флаг, чтобы предотвратить лишние вызовы
        }
    });

    fixMenu(); // Начальная установка
});
