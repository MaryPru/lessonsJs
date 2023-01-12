

document.onmouseover = function(event){
    let tooltip = event.target.closest("[data-tooltip]");

    if(!tooltip) return;

    let coords = tooltip.getBoundingClientRect();

    let div = document.createElement("div");
    div.className = "tooltip";
    div.innerHTML = tooltip.dataset.tooltip;
    document.body.append(div);

    let top = coords.top - div.offsetHeight + 5 < 0 ?
        coords.bottom + 5 : coords.top - div.offsetHeight - 5;

    let left = coords.left + (coords.width - div.offsetWidth) / 2;

    left = left > coords.left ? left : 0;

    div.style.top = top + "px";
    div.style.left = left + "px";
}
document.onmouseout = function(event){

    if(!event.target.closest("[data-tooltip]")) return;

    document.querySelector(".tooltip").remove();
}