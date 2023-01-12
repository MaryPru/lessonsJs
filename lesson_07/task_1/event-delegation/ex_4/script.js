const btns = document.querySelectorAll('button[data-tooltip]');

btns.forEach(btn => {
    const attr = btn.dataset.tooltip;

    const span = document.createElement('span');

    span.innerHTML = attr;

    span.classList.add('tooltip');

    btn.append(span);
});

document.addEventListener('mouseover', (e) => {
    const { target } = e;

    if (!target.dataset.tooltip) return;

    target.firstElementChild.classList.add('show');
});


document.addEventListener('mouseout', (e) => {
    const { target } = e;

    if (!target.dataset.tooltip) return;

    target.firstElementChild.classList.remove('show');
});