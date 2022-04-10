const books = document.querySelectorAll('.book');
const bookName = document.querySelectorAll('h2>a');
const chapters = document.querySelectorAll('.book > ul > li');
const adv = document.querySelectorAll('.adv');
const newChapter = document.createElement('li');
const cloneChapter = chapters[3].cloneNode(true);

chapters[25].after(cloneChapter); //клонирование и добавление главы в 8 книге 
cloneChapter.textContent = 'Глава 8: За пределами ES6';

newChapter.textContent = 'Глава 9: За пределеами пределов';
chapters[26].before(newChapter); //создание и добавление главы

adv[0].remove(); //удаление рекламы

books[1].after(books[0]);
books[3].before(books[4]); //восстановление порядка книг
books[5].after(books[2]);

chapters[1].after(chapters[3]);
chapters[3].after(chapters[6]); //упоряд 2 книги
chapters[6].after(chapters[8]);
chapters[9].after(chapters[2]);

chapters[47].after(chapters[55]);
chapters[55].after(chapters[49]); //упоряд 5 книги
chapters[50].after(chapters[48]);
chapters[53].after(chapters[51]);

bookName[4].textContent = 'Книга 3. this и Прототипы Объектов'; //исправление заголовка в книге 3

document.body.style.backgroundImage = 'url(/image/you-dont-know-js.jpg)'; //замена фона