/*
 ДЗ 7 - Создать редактор cookie с возможностью фильтрации

 7.1: На странице должна быть таблица со списком имеющихся cookie. Таблица должна иметь следующие столбцы:
   - имя
   - значение
   - удалить (при нажатии на кнопку, выбранная cookie удаляется из браузера и таблицы)

 7.2: На странице должна быть форма для добавления новой cookie. Форма должна содержать следующие поля:
   - имя
   - значение
   - добавить (при нажатии на кнопку, в браузер и таблицу добавляется новая cookie с указанным именем и значением)

 Если добавляется cookie с именем уже существующей cookie, то ее значение в браузере и таблице должно быть обновлено

 7.3: На странице должно быть текстовое поле для фильтрации cookie
 В таблице должны быть только те cookie, в имени или значении которых, хотя бы частично, есть введенное значение
 Если в поле фильтра пусто, то должны выводиться все доступные cookie
 Если добавляемая cookie не соответсвует фильтру, то она должна быть добавлена только в браузер, но не в таблицу
 Если добавляется cookie, с именем уже существующей cookie и ее новое значение не соответствует фильтру,
 то ее значение должно быть обновлено в браузере, а из таблицы cookie должна быть удалена

 Запрещено использовать сторонние библиотеки. Разрешено пользоваться только тем, что встроено в браузер
 */

/*
 homeworkContainer - это контейнер для всех ваших домашних заданий
 Если вы создаете новые html-элементы и добавляете их на страницу, то добавляйте их только в этот контейнер

 Пример:
   const newDiv = document.createElement('div');
   homeworkContainer.appendChild(newDiv);
 */
const homeworkContainer = document.querySelector('#homework-container');
// текстовое поле для фильтрации cookie
const filterNameInput = document.querySelector('#filter-name-input');
// текстовое поле с именем cookie
const addNameInput = document.querySelector('#add-name-input');
// текстовое поле со значением cookie
const addValueInput = document.querySelector('#add-value-input');
// кнопка "добавить cookie"
const addButton = document.querySelector('#add-button');
// таблица со списком cookie
const listTable = document.querySelector('#list-table tbody');

renderCookie();

listTable.addEventListener('click', function (event) {
   let target = event.target.closest('th');


   // if (target.tagName = 'BUTTON'){
   //     target.style.backgroundColor = 'red';
   //     console.log(target);
   // }
   //взять значение куки и передать ее в функцию удаления
    //вызвать функцию рендера
});

function parseCookie() {
     return document.cookie.split('; ').reduce((prev,current) => {
        let [name,value] = current.split('=');
        prev[name] = value;
        return prev;
    },{});
}

function renderCookie(){
    let cookies = parseCookie();
    console.log('Cookie',cookies);

    for (let key in cookies) {
        console.log(`${key} ${cookies[key]}`);
        listTable.innerHTML += `<tr><th>${key}</th><th>${cookies[key]}</th><th><button id="delete">Удалить</button></th></tr>`;
    }
    // кнопка "удалить cookie"
    const deleteButton = document.querySelector('#delete');
}

filterNameInput.addEventListener('keyup', function() {
    // здесь можно обработать нажатия на клавиши внутри текстового поля для фильтрации cookie
});

addButton.addEventListener('click', () => {
    // здесь можно обработать нажатие на кнопку "добавить cookie"
});

addButton.addEventListener('click', function (){
   let nameCookie = addNameInput.value;
   let valueCookie = addValueInput.value;
   document.cookie = `${nameCookie}=${valueCookie}`;
   addNameInput.value = '';
   addValueInput.value = '';
   listTable.innerHTML = '';
   renderCookie();
});
