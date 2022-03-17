
//Задание 1.4:
/*
function f1(number){
    let count = number;
    return function f(){
        return ++count;
    }
}

let f = f1(10);

console.log(f());
console.log(f());
console.log(f());
*/


//Задание 1.5:*
/*
function returnArgumentsArray(){
    let array = [];
    for (let i = 0; i < arguments.length; i++){
        array[i] = arguments[i];
    }
    return array;
}

console.log(returnArgumentsArray(10,20,30,40));
 */

//Задание 1.6:*
/*
function sum(a,b){
    return a + b;
}

function bindFunction(sum, a, b){

    return function (){
        return sum(a,b);
    };
}

let newSum = bindFunction(sum,2,4);
console.log(newSum());
 */

//Задание 2.1: Напишите аналог встроенного метода forEach для работы с массивами
/*
let arr = [2, 3, 4];
function foo(value) {
    let sum = value * this;
    console.log(sum);
}
function square(value) {
    let result = value * value;
    console.log('Квадрат:',result);
}
//arr.forEach(foo, 5);

function analogForEach(array,func,thisArg){
    func = func.bind(thisArg);
    for (let i = 0; i < array.length; i++){
        func(array[i]);
    }
}
analogForEach(arr,foo,5);
analogForEach(arr,square);
*/

//Задание 2.2: Напишите аналог встроенного метода map для работы с массивами
/*
let array = [5,6,7];

function square(value) {
    return value * value;
}

function analogMap(func, arr){
    let newArray = [];
    for (let i = 0; i < arr.length; i++){
        newArray[i] = func(arr[i]);
    }
    return newArray;
}

let b = analogMap(square,array);
console.log('My map:',b);

console.log('Map:',array.map(square));
*/

//Задание 2.2: Напишите аналог встроенного метода reduce для работы с массивами
/*
let a = [1, 2, 3, 4, 5],
    result;
function foo(prevSum, curNum) {
    return prevSum + curNum;
}
function analogReduce(func,array,initialValue){
    let prevValue;
    let i = 0;
    if (initialValue == undefined)
    {
        prevValue = array[0];
        i = 1;
    }
    else{
        prevValue = initialValue;
    }
    for (i; i < array.length; i++){
        prevValue = func(prevValue,array[i]);
    }
    return prevValue;
}
result = analogReduce(foo,a,0);
console.log(result);

console.log(analogReduce(foo,a));

console.log(a.reduce(foo,0));
console.log(a.reduce(foo));
 */

//Задание 2.4:
//Функция должна перебрать все свойства объекта, преобразовать их имена в верхний
//регистр и вернуть в виде массива
/*
let human = {
    name: 'viktor',
    lastName: 'kosenkov'
}
function upperProps(object){
    let arr = [];
    for (let prop in object) {
        arr.push(prop);
    }
    console.log('Массив свойств:',arr);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].toUpperCase();
    }
    return arr;
}
console.log(upperProps(human));
 */

//Задание 2.5:*
//Напишите аналог встроенного метода slice для работы с массивами
/*
let arr = [1,2,3,4,5];
function analogSlice(array, begin, end){
    let newArray = [];
    if (end == undefined){
        end = array.length;
    }
    for (begin; begin < end; begin++) {
        newArray.push(array[begin]);
    }
    return newArray;
}
console.log(arr.slice(0,3)); //возвращает [1,2,3]
//arr.slice(3); //возвращает [4,5]
//arr.slice(1,-1); //возвращает [2,3,4]

console.log('Аналог Slice:',analogSlice(arr,0,3));
console.log('Аналог Slice:',analogSlice(arr,3));
 */

//3.1.1:
//Функция принимает массив и фильтрующую функцию и должна вернуть true или false
//Функция должна вернуть true только если fn вернула true для всех элементов массива
/*
function isBig(element) {
    return element < 10;
}

let array = [1,2,43,4,5];
function isAllTrue(array,fn){
    try {
        if (array.length == 0 || !Array.isArray(array)){
            throw new Error('empty array');
        }
        if (!fn instanceof Function){
            throw new Error('fn is not a function');
        }
        let res = true;
        for (let arrayElement of array) {
            if (res) {
                res = fn(arrayElement);
            }
        }
        return res;
    }
    catch (e) {
        console.log(e.message);
    }
}
console.log(isAllTrue(array,isBig));
console.log(isAllTrue([1,4], n => n > 10));
 */

//3.2.1:
// Функция принимает массив и фильтрующую функцию и должна вернуть true или false
// Функция должна вернуть true если fn вернула true хотя бы для одного из элементов
// массива
//isSomeTrue([1, 2, 30, 4, 5], n => n > 20) // вернет true
// isSomeTrue([1, 2, 3, 4, 5], n => n > 20) // вернет false
/*
function isBig(element) {
    return element > 20;
}

let array = [1,2,26,4,5];

function isSomeTrue(array,fn){
    try {
        if (array.length == 0 || !Array.isArray(array)){
            throw new Error('empty array');
        }
        if (!fn instanceof Function){
            throw new Error('fn is not a function');
        }
        let res = false;
        for (let arrayElement of array) {
            if(fn(arrayElement)){
                res = true;
            }
        }
        return res;
    }
    catch (e) {
        console.log(e.message);
    }
}

console.log(isSomeTrue(array,isBig));
console.log(isSomeTrue(array,n => n > 20));
console.log(isSomeTrue(array,n => n > 20));
 */

//Задание 3.3:
// 3.3.1:
// Функция принимает заранее неизвестное количество аргументов, первым из которых
// является функция fn
// Функция должна поочередно запустить fn для каждого переданного аргумента (кроме
// самой fn)

/*
function returnBadArguments(fn, ...arg) {
    let array = [];
    if (typeof fn !== 'function') {
        throw new Error('fn is not a function');
    }
    for (let i = 0; i < arg.length; i++) {
        try {
            if (fn(arg[i])){
                throw new Error();
            }
        }
        catch (e) {
            array.push(arg[i]);
        }
    }
    return array;
}

function sum(value){
    console.log(`item ${value}`);
}


console.log(returnBadArguments(sum,1,2,3,4));
 */

//Задание 3.4:
// 3.4.1: Функция имеет параметр number (по умолчанию - 0)
// 3.4.2: Функция должна вернуть объект, у которого должно быть несколько методов:
/*
function calculate(number = 0){
    if (!isFinite(number)){
        throw new Error('number is not a number');
    }
    return {
        sum: function(){
            for (let i = 0; i < arguments.length; i++) {
                number += arguments[i];
            }
            return number;
        },
        dif: function (){
            for (let i = 0; i < arguments.length; i++) {
                number -= arguments[i];
            }
            return number;
        },
        div: function (){
            for (let i = 0; i < arguments.length; i++) {
                if (arguments[i] == 0){
                    throw new Error('division by 0');
                }
                number /= arguments[i];
            }
            return number;
        },
        mul: function (){
            for (let i = 0; i < arguments.length; i++) {
                number *= arguments[i];
            }
            return number;
        }
    }
}

let calc = {};
calc = calculate(1);
console.log('Sum: ',calc.sum(1,2,3,4));
console.log('Dif: ',calc.dif(1,2,3,4));
console.log('Div: ',calc.div(1,2,3,4));
console.log('Mul: ',calc.mul(1,2,3,4));
*/


//4.1.1: Функция должна создать элемент с тегом <div>
// 4.1.2: В созданный элемент необходимо поместить текст, переданный в параметр text
// Пример: createDivWithText('loftschool') // создаст элемент div, поместит в него 'loftschool'
/*
function createDivWithText(name){
    let div = document.createElement('div');
    div.textContent = name;
    return div;
}
 */

//Задание 4.2: Функция должна вставлять элемент, переданный в параметре what в начало
// элемента, переданного в параметре where

/*
function prepend(what,where) {
          let firstChild = where.firstElementChild;
          firstChild.prepend(what);
      }
      prepend(document.querySelector('.newElement'), document.querySelector('.container'));
      prepend(document.querySelector('.second'),document.querySelector('.inner'));
 */

//4.3.1: Функция должна перебрать все дочерние элементы узла, переданного в параметре
// where

/*
function findAllPSiblings(where) {
          return where.children;
      }
      console.log(findAllPSiblings(document.querySelector('.container')));
 */

//4.3.1
//4.3.2: Функция должна вернуть массив, состоящий из тех дочерних элементов, следующим
// соседом которых является элемент с тегом <p>

/*
 function findAllPSiblings(where) {
          let array = [];
          let children = where.children;
          for (let i = 0; i < children.length - 1; i++) {
              if (children[i].nextElementSibling.nodeName === 'P'){
                  array.push(children[i]);
              }
          }
          return array;
      }
      console.log(findAllPSiblings(document.querySelector('.container')));
 */

//Задание 4.4:
// Функция представленная ниже, перебирает все дочерние узлы типа "элемент" внутри узла
// переданного в параметре where и возвращает массив из текстового содержимого найденных
// элементов.
/*
function findAllPSiblings(where) {
          let contentText = [];
          let childNodes = where.childNodes;
          for (let child of childNodes) {
              if (child.nodeType === 1){
                  contentText.push(child.innerText);
              }
          }
          return contentText;
      }
      console.log(findAllPSiblings(document.querySelector('.container')));
 */

//Задание 4.5:
// Функция должна перебрать все дочерние узлы элемента переданного в параметре where и
// удалить из него все текстовые узлы.
// Задачу необходимо решить без использования рекурсии, то есть можно не уходить вглубь
// дерева. Так же будьте внимательны при удалении узлов, т.к. можно получить неожиданное
// поведение при переборе узлов

/*
function deleteTextNodes(where) {
          let childNodes = where.childNodes;
          for (let i = 0; i < childNodes.length; i++) {
              if (childNodes[i].nodeType === 3) {
                  childNodes[i].parentNode.removeChild(childNodes[i]);
              }
          }
      }
      deleteTextNodes(document.querySelector('.container'));
 */

//Задание 4.6:
// Выполнить предудыщее задание с использование рекурсии - то есть необходимо заходить
// внутрь каждого дочернего элемента (углубляться в дерево)
// Так же будьте внимательны при удалении узлов, т.к. можно получить неожиданное поведение
// при переборе узлов

/*
 function deleteTextNodesRec(where){
          for (let i = 0; i < where.childNodes.length; i++) {
              let child = where.childNodes[i];
              console.log('Потомок '+ i + ' ',child);
              if (child.nodeType === 3){
                  child.parentNode.removeChild(child);
                  i--;
                  console.log('Удаляем текстовый узел ',child);
              }else if (child.nodeType === 1){
                  console.log('Вызываем функцию заново и пердаем ей ',child);
                  deleteTextNodesRec(child);
              }
          }
      }

      deleteTextNodesRec(document.querySelector('.container'));
 */

//Задание 4.7:*
//
// Необходимо собрать статистику по всем узлам внутри элемента переданного в параметре root и вернуть ее в виде объекта.
//
// Статистика должна содержать:
//
// количество текстовых узлов
// количество элементов каждого класса
// количество элементов каждого тега
/*
 function statistic(root){
          const stat = {
              tags: {},
              classes: {},
              text: 0
          }

          function scan(root) {
              for (let child of root.childNodes) {
                  if (child.nodeType == 3){
                      stat.text++;
                  }else if (child.nodeType == 1){
                      if (child.tagName in stat.tags){
                          stat.tags[child.tagName]++;
                      }else {
                          stat.tags[child.tagName] = 1;
                      }
                      for (let className of child.classList) {
                          if (className in stat.classes){
                              stat.classes[className]++;
                          }else {
                              stat.classes[className]= 1;
                          }
                      }
                      scan(child);
                  }
              }
          }
          scan(root);
          return stat;
      }
 */
/*
function towFind(array, k) {
    for (let i = 0; i < array.length; i++) {
        let current = array[i];
        let findNum = k - current;
        for (let j = 0; j < array.length; j++) {
            if (findNum === array[j] && i != j){
                return [current,findNum];
            }
        }
    }
    return [];
}
console.time('q');
console.log(towFind([1,2,-3,4,5],1));
console.timeEnd('q');
 */

/*
Promise
let url1 = 'https://images.pexels.com/photos/9365604/pexels-photo-9365604.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
      let url2 = 'https://images.pexels.com/photos/5044497/pexels-photo-5044497.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';

      function loadImage(url) {
          return new Promise((resolve,reject)=>{
              const image = new Image();
              image.height = 200;
              image.src = url;
              document.body.append(image);
              image.addEventListener('load',()=>{
                 return resolve();
              });
              image.addEventListener('error',()=>{
                 return reject();
              });
          });
      }

      loadImage(url1)
        .then(() => console.log('картинка 1 загружена'))
        .then(() => loadImage(url2))
        .then(() => console.log('картинка 2 загружена'))
        .catch(()=> console.log('Error'));
 */

/*
Fetch
let myButton = document.querySelector('#myButton');
      let list = document.querySelector('#list');
      let url = 'https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json';

      list.addEventListener('click', evt => {
         if (evt.target.tagName === 'LI'){
             console.log(evt.target.textContent);
         }
      });

      myButton.addEventListener('click', async event => {
          let response = await fetch(url);
          let cities = await response.json();
          let fragment = document.createDocumentFragment();

          for (let city of cities) {
              let li = document.createElement('li');
              li.textContent = city.name;
              fragment.appendChild(li);
          }
          list.appendChild(fragment);
      });
 */

//Задание 5.1:
//
// Функция должна возвращать Promise, который должен быть разрешен через указанное количество секунд

/*
function delayPromis(time) {
    let promis = new Promise((resolve, reject) => {
        setTimeout(function (){
            resolve();
        },time);
    });
    return promis;
}

let promis = delayPromis(5000);
promis.then(()=>{
    console.log('promis complete');
})
 */

//Задание 5.2:
//
// 5.2.1: Функция должна вернуть Promise, который должен быть разрешен с массивом городов в качестве значения
//
// Массив городов можно получить отправив асинхронный запрос по адресу
//
// 5.2.2: Элементы полученного массива должны быть отсортированы по имени города
//import fetch from 'cross-fetch';
/*
function loadAndSortTowns(url) {
    return fetch(url)
        .then(response => {
            return response.json();
        })
        .then(towns => {
            return towns.sort((a,b) => {
                if (a.name > b.name){
                    return 1;
                }
                if (a.name < b.name){
                    return -1;
                }
                return 0;
            });
        })
        .catch(() => console.log('Что-то пошло не так'));
}
let url = 'https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json';
loadAndSortTowns(url).then(towns => console.log(towns));
 */
