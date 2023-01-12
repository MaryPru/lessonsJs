let table = document.querySelector('#grid')

table.onclick = function (e) {
    if (e.target.tagName !== 'TH') return;
    let tbody = table.querySelector('tbody');
    let rows = tbody.querySelectorAll('tr');
    let arrayRows = Array.from(rows);
    let col = e.target.cellIndex;
    let type = e.target.dataset.type;
    console.log(col)
    arrayRows.sort((rowA, rowB) => {
        let cellA = rowA.cells[col].textContent;
        let cellB = rowB.cells[col].textContent;
        if(type==='string'){
            if(cellA > cellB) return 1
            else return -1
        } else {
            return cellA - cellB
        }


    });

    tbody.append(...arrayRows);

}
