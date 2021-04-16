window.onload = function()
{
    var data: any = [];
    var cost:number = 0;
    var table:any = document.getElementById("list");

    Object.keys(sessionStorage).forEach( (key) => {
        //console.log(sessionStorage.getItem(key));
        let d1 = sessionStorage.getItem(key);
        data = d1.split('+');
        cost += parseInt(data[1]);

        for(let i:number =0;i<1;i++)
        {
            var row = table.insertRow(i);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            cell1.innerHTML = data[0];
            cell2.innerHTML = data[1];
        }

    });


    var l:number = table.rows.length;
    var row = table.insertRow(l);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "Total Cart Price";
    cell2.innerHTML = data[1];
    
}