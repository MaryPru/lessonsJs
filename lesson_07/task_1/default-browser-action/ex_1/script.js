let contents = document.querySelector('#contents')

function handleLink(href) {
    let isLeaving = confirm(`Leave for ${href}?`);
    if (!isLeaving) return false;
}

const getUrl = (e) => {
    let target = e.target.closest('a');
    return handleLink(target.getAttribute('href'));

}

contents.onclick = getUrl