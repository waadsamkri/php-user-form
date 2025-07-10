document.getElementById("userForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(this);

    fetch("insert.php", {
        method: "POST",
        body: formData
    })
    .then(() => {
        this.reset();
        loadTable();
    });
});

function toggleStatus(id) {
    fetch("toggle.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: "id=" + id
    })
    .then(() => loadTable());
}

function loadTable() {
    fetch("fetch.php")
    .then(response => response.text())
    .then(data => {
        document.getElementById("tableContainer").innerHTML = data;
    });
}

// تحميل البيانات عند بداية الصفحة
loadTable();
