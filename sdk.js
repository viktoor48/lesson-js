VK.init({
   apiId: 8114015
});

function auth() {
    return new Promise((resolve, reject) => {
        VK.Auth.login( data => {
            if (data.session){
                resolve();
            } else {
                reject(new Error('Не удалось авторизоваться'));
            }
        }, 2);
    });
}

function callAPi(method, params) {
    params.v = '5.81';

    return new Promise((resolve, reject) => {
       VK.api(method, params, (data) => {
           if (data.error) {
               reject(data.error);
           } else {
               resolve(data.response);
           }
       });
    });
}

const headerInfo = document.querySelector('#headerInfo');

auth()
    .then(() => {
        return callAPi('users.get', {name_case: 'gen'});
    })
    .then(([me]) => {
        headerInfo.textContent = `Друзья на странице  ${me.first_name} ${me.last_name}`;

        return callAPi('friends.get', {fields: 'city, country, photo_100'});
    })
    .then((friends) => {
        console.log(friends);
        const template = document.querySelector('#user-template').textContent;
        const render = Handlebars.compile(template);
        const  html = render(friends);
        const result = document.querySelector('.result');
        result.innerHTML = html;
    });


