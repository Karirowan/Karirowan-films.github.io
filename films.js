document.addEventListener("DOMContentLoaded", () => {
    // Список идентификаторов секций
    const sections = ["#yes-section", "#maybe-section", "#no-section"];

    // Обработаем каждую секцию отдельно
    sections.forEach((sectionId) => {
        const section = document.querySelector(`${sectionId} .film-list`);
        if (!section) return; // пропускаем пустые или отсутствующие секции

        // Извлекаем карточки фильмов
        const cards = Array.from(section.children);

        // Перемешиваем карточки
        shuffleArray(cards);

        // Очищаем старую структуру
        while (section.firstChild) {
            section.removeChild(section.firstChild);
        }

        // Возвращаем перемешанные карточки
        cards.forEach((card) => section.appendChild(card));
    });
});

// Классический алгоритм перемешивания (Фишера–Йейтса)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}