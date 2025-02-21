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
            menu.style.position = "fixed";
            menu.style.top = "0";
            menu.style.height = "100vh";
        } else {
            menu.style.position = "absolute";
            menu.style.top = headerHeight + "px";
            menu.style.height = `calc(100vh - ${headerHeight}px)`;
        }
    }

    window.addEventListener("scroll", () => {

        setTimeout(fixMenu, 0);
    });

    fixMenu(); 
});
