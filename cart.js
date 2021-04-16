window.onload = function () {
    var data = [];
    var cost = 0;
    var table = document.getElementById("list");
    Object.keys(sessionStorage).forEach(function (key) {
        //console.log(sessionStorage.getItem(key));
        var d1 = sessionStorage.getItem(key);
        data = d1.split('+');
        cost += parseInt(data[1]);
        for (var i = 0; i < 1; i++) {
            var row = table.insertRow(i);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            console.log(data);
            cell1.innerHTML = data[0];
            cell2.innerHTML = data[1];
        }
    });
    var l = table.rows.length;
    var row = table.insertRow(l);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "Total Cart Price";
    cell2.innerHTML = cost;
};
