let tree=document.querySelector('#tree')



tree.onclick = function(event) {

    if (event.target.className !== 'parent') {
        return;
    }
    if (event.target.childNodes[1] !== undefined) {
        event.target.childNodes[1].classList.toggle('close')
    }

}