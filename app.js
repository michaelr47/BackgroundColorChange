let body = document.querySelector('body');
let btn = document.querySelector('button');
let colors = ['red', 'orange', 'yellow', 'blue', 'indigo', 'violet', 'green', 'purple', 'lightgray'];

body.style.backgroundColor = 'tan';


const changeColor = () => {
        let randColor = Math.floor(Math.random() * colors.length);
        body.style.backgroundColor = colors[randColor];

        // let div = document.createElement('div');

        // if (body.style.backgroundColor === 'red') {
        //     div.textContent = 'its red!';
        //     body.appendChild(div);
        // }
}
btn.addEventListener('click', changeColor);


