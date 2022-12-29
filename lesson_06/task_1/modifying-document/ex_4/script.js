let list = document.getElementsByTagName('li');

for (let li of list) {
    let count = li.getElementsByTagName('li').length;
    if (!count) continue;

    li.firstChild.data += ' [' + count + ']';
}