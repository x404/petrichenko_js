/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

document.querySelectorAll('.promo__adv img').forEach(img => img.remove())


const poster = document.querySelector('.promo__bg');
const genre = document.querySelector('.promo__genre');
genre.textContent = 'драма';

poster.style.backgroundImage = 'url(./img/bg.jpg)';

//4
movieDB.movies.sort();
const list = document.querySelector('.promo__interactive-list');


let movieHtml = '';
movieDB.movies.forEach((movie, i) => {
    movieHtml += ` <li class="promo__interactive-item">${i + 1} ${movie}
                       <div class="delete"></div>
                  </li>`
});
list.innerHTML = movieHtml;