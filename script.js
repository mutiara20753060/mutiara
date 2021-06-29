var data = [20753060, "Mutiara", "Lampung Utara", "Mutiara9eeee@gmail.com"];

function tampil() {
    var tabel = document.getElementById("tabel");
    tabel.innerHTML = "<tr><th>Data Blog</th><th>Action</th></tr> ";
    for (let i = 0; i < data.length; i++) {
        var btnEdit = "<button class='btn-edit' href='#' onclick='edit(" + i + ")'>Edit</button>";
        var btnHapus = "<button class='btn-hapus' href='#' onclick='hapus(" + i + ")'>Hapus</button>";
        tabel.innerHTML += "<tr><td>" + data[i] + "</td><td>" + btnEdit + " " + btnHapus + "</tr>";
    }
}

function tambah() {
    var npm       = document.querySelector("input[name=npm]");
    var nama      = document.querySelector("input[name=nama]");
    var alamat    = document.querySelector("input[name=alamat]");
    var email     = document.querySelector("input[name=email]");
    data.push(npm.value);
    data.push(nama.value);
    data.push(alamat.value);
    data.push(email.value);
    tampil();
    npm.value       = "";
    nama.value      = "";
    alamat.value    = "";
    email.value     = "";
}

function edit(id) {
    var baru = prompt("Edit", data[id]);
    data[id] = baru;
    tampil();
}

function hapus(id) {
    data.pop(id);
    tampil();
}

tampil();
