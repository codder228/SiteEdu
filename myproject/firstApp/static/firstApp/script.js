// static/script.js
function displayMessage() {
    // Создаем новый элемент заголовка
    const message = document.createElement('h2');
    message.textContent = "Привет, мир! Это сообщение из JavaScript.";

    // Добавляем элемент заголовка в тело документа
    document.body.appendChild(message);
}

// Вызов функции при загрузке страницы
window.onload = displayMessage;