"use strict";
(() => {
    let a = 10;
    console.log(a);
    const b = 20;
    console.log(b);
    if (a < b) {
        console.log('hola');
    }
    else {
        console.log('adios');
    }
    a = Number('123a');
    console.log(a);
})();
