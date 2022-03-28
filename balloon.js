const head_address = document.querySelector('.head-address');
const reviews_output = document.querySelector('#reviews-output');
const name = document.querySelector('#name');
const reviews = document.querySelector('#reviews');
const input_impression = document.querySelector('#input-impression');
const button_add = document.querySelector('#button-add');

button_add.addEventListener('click', function () {
    console.log(name.value);
    console.log(reviews.value);
    console.log(input_impression.value);
});