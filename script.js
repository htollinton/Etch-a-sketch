//creating 16 rows

let container = document.getElementById("container");
function createRows(numRow, numCol) {
    for (i = 1; i <= numRow; i++) {
        for (j = 1; j <= numCol; j++) {
            const div = document.createElement("div");
            container.appendChild(div);
            div.style.gridRow = `${i}`;
            div.style.gridColumn = `${j}`;
            div.setAttribute("id", `mouse${i}${j}`)
            div.setAttribute("onmouseover",`myFunction(${i},${j})`);
        };
    };
};
function myFunction(a,b){
    let click =document.getElementById(`mouse${a}${b}`).style
    click.backgroundColor= "black";
    click.transform= "scale(2)";
    click.borderRadius= "10%";

};
createRows(10, 10);






