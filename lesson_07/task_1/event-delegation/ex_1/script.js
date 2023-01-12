let container=document.querySelector('#container')

const deletePane=(e)=>{
    let pane = e.target.closest('.pane');
    pane.remove();
}

container.onclick = deletePane