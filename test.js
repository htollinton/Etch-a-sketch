//creating 16 rows

let container = document.getElementById("container");
function createRows(numRow, numCol) {

    for (i = 1; i <= numRow; i++) {
        for (j = 1; j <= numCol; j++) {
            const div = document.createElement("div");
            container.appendChild(div);
            div.style.gridRow = `${i}`;
            div.style.gridColumn = `${j}`;
            div.addEventListener("mouseover",function(){
            div.classList.add("draw")});
        };
    };
};
createRows(50, 50);

function restart(){
    document.querySelectorAll('.draw').forEach(function(a){
        a.remove()
        });
};



function howManySquares(){
    restart();
    container.innerHTML = "";

    let cells =document.getElementById("how-many-squares").value;
    if(cells>5000){
        alert("too big")
    }else{
    createRows(Math.round(Math.sqrt(cells)),Math.round(Math.sqrt(cells)));
    }
};












