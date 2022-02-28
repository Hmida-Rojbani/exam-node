console.log('A');
call1().then(function () {
    console.log('B');
    call2()
    console.log('F');
}).then(function () {
    console.log('C');
    call3()
    console.log('E');
}).then(function () {
    console.log('D');
})
console.log('G');

function call1() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve();
    }, 1000);
    })
}

function call2() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve();
    }, 1000);
    })
}

function call3() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve();
    }, 1000);
    })
}
