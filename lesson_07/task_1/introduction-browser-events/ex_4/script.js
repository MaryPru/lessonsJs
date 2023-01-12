let btn = document.querySelector('.btn');
let body = document.querySelector('body');

const toggleList = () => {
    body.classList.toggle('close')
}

btn.addEventListener('click', toggleList)


