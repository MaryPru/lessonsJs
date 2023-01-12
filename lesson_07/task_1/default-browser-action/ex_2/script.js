let thumbs = document.querySelector('#thumbs')
let img=document.querySelector('#largeImg')

thumbs.onclick = function (event) {
    let picture = event.target.closest('a');

    if (!picture) return;
    showPicture(picture.href, picture.title);
    event.preventDefault();
}

function showPicture(href, title) {
    img.src = href;
    img.alt = title;
}