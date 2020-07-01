console.log(window.location.href);
/*
localStorage.setItem('monChat', 'Tom');*/

/*console.log(localStorage.getItem('monChat'));*/

let cats = [{'name': 'Tom', 'age': 5}, {'name':'Fred', 'age':7}];

localStorage.setItem('Chats', JSON.stringify(cats));

console.log(JSON.parse(localStorage.getItem('Chats')));



