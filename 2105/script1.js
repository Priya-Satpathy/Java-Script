function  numberAddition(){
    let n1 = parseInt(document.getElementById('first').value);
    let n2 = parseInt(document.getElementById('second').value);

    let s = n1+n2;

    document.getElementById('result').innerHTML = s;
}