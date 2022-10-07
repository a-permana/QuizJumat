let angka = [5,4,9,10,60]

function nilai(){
    let min = Number.POSITIVE_INFINITY, max = 0;

    for(let i = 0; i < angka.length; i++){
        if(angka[i] > max) max = angka[i];
        if(angka[i] < min) min = angka[i];
    }
    console.log("Angka Terkecil adalah : " + min);
    console.log("Angka Terbesar adalah : " + max);

    return nilai;
}
nilai();