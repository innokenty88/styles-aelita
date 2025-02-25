document.addEventListener("DOMContentLoaded", function () {
    console.log("Скрипт загружен!");

    const menu = document.querySelector(".header2");

    if (!menu) {
        console.error("Меню не найдено!");
        return;
    }

    // Устанавливаем фиксированное позиционирование для меню
    menu.style.position = "fixed"; // Фиксируем меню
    menu.style.top = "0"; // Прижимаем к верху
    menu.style.zIndex = "1000"; // Убедитесь, что меню выше других элементов
});
