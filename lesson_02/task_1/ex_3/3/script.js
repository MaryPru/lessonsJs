function truncate(str, maxlength) {
    return (str.length > maxlength) ?
        str.slice(0, maxlength - 1) + '…' : str;
}

console.log(truncate("Всем приветВсем привет Всем привет!", 20));