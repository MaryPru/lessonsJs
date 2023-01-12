let list =document.querySelector('.list')

list.onclick = function(e) {
    const btn = e.target.closest('.remove-button');
    btn.parentElement.remove();
}





