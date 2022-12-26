function f() {
    alert( this ); // [object Window]
}

let user = {
    g: f.bind(null)
};

user.g();