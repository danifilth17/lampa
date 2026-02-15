/* Основной контейнер */
.full-start-new__details {
    display: flex;
    flex-wrap: wrap; /* Чтобы плашки переносились на новую строку, если их много */
    gap: 10px;       /* Расстояние между плашками */
    padding: 10px 0;
    font-family: sans-serif;
}

/* Стили для каждой плашки (предполагаем, что это span или a) */
.full-start-new__details span, 
.full-start-new__details a {
    display: inline-flex;
    align-items: center;
    padding: 6px 15px;
    border-radius: 8px; /* Скругление углов */
    color: #ffffff;      /* Цвет текста */
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
}

/* Цвет для "Длительность фильма" (синий) */
.full-start-new__details span:first-child {
    background-color: #2b78b5;
}

/* Цвета для жанров (если они идут следом) */
/* Зеленый (Приключения) */
.full-start-new__details a:nth-child(2),
.full-start-new__details span:nth-child(2) {
    background-color: #1e7d43;
}

/* Красный (Триллер) */
.full-start-new__details a:nth-child(3),
.full-start-new__details span:nth-child(3) {
    background-color: #a0352a;
}

/* Голубой (Фантастика) */
.full-start-new__details a:nth-child(4),
.full-start-new__details span:nth-child(4) {
    background-color: #2b618f;
}
