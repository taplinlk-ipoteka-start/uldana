
function toggleContent(element) {
    const content = element.nextElementSibling.nextElementSibling;
    const arrow = element.querySelector(".arrow");

    if (content.style.maxHeight) {
        content.style.maxHeight = null; // Закрыть
        content.style.padding = "0 20px";
        arrow.classList.remove("open");
    } else {
        // Закрываем все остальные "шторки"
        document.querySelectorAll(".module .content").forEach((el) => {
            el.style.maxHeight = null;
            el.style.padding = "0 20px";
        });
        document.querySelectorAll(".module .arrow").forEach((el) => el.classList.remove("open"));

        // Открываем текущую
        content.style.maxHeight = content.scrollHeight + "px";
        content.style.padding = "15px 20px";
        arrow.classList.add("open");
    }

}

function buyCourse() { 
    // Перенаправление на страницу оплаты
    window.location.href = "https://wa.me/77072660095?text=%D0%A1%D3%99%D0%BB%D0%B5%D0%BC%D0%B5%D1%82%D1%81%D1%96%D0%B7%D0%B1%D0%B5!%20%D0%98%D0%BF%D0%BE%D1%82%D0%B5%D0%BA%D0%B0%20%D0%A1%D1%82%D0%B0%D1%80%D1%82%20%D0%BA%D1%83%D1%80%D1%81%D1%8B%20%D0%B6%D0%B0%D0%B9%D0%BB%D1%8B%20%D1%81%D2%B1%D1%80%D0%B0%D0%B9%D1%8B%D0%BD%20%D0%B4%D0%B5%D0%B3%D0%B5%D0%BD%20%D0%B5%D0%B4%D1%96%D0%BC...";
}


function scrollToContent() {
    // Находим элемент по ID
    const element = document.getElementById("content");
    
    // Прокручиваем страницу к этому элементу
    element.scrollIntoView({ behavior: 'smooth' });
}
