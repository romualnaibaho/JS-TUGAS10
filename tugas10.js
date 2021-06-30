function deretAngka(){
    var value = 1;
    var start = 1;
    var end = 10;
    var hasil = [];

    for(var i = start; i <= end; i++){
        hasil.push(value);
        value += i+1;
    }

    for(let x of hasil){
        console.log(x);
    }
}

deretAngka();