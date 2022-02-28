console.log('A');
call1(function () {
    console.log('B');
    call2(function () {
        console.log('C');
        call3(function () {
            console.log('D');
        })
        console.log('E');
    })
    console.log('F');
})
console.log('G');

function call1(callback) {
    setTimeout(() => {
        callback();
    }, 1000);
}

function call2(callback) {
    setTimeout(() => {
        callback();
    }, 1000);
}

function call3(callback) {
    setTimeout(() => {
        callback();
    }, 1000);
}