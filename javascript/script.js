function tambah() {
    let totalRupiah = document.getElementById('rupiah').value;
    if (totalRupiah) {
        document.getElementById('rupiah').value = eval(totalRupiah);
    }
}

function tambahXp() {
    let totalexp = document.getElementById('exp').value;
    if (totalexp) {
        document.getElementById('exp').value = eval(totalexp);
    }
}

function rupiah(rp) {
    document.getElementById('rupiah').value += "+" + rp;
    tambah();
}

function exp(xp) {
    document.getElementById('exp').value += "+" + xp;
    tambahXp();
}