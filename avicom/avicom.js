second = document.getElementById("secondbutton");
second.addEventListener("click", function(){ alert("coming soon!"); });
//theme implementation dark / light
var moon = document.getElementById("dropdown");
moon.onclick = function() {
    if (demo.style.backgroundColor === "white") {
        demo.style.backgroundColor = "black";
        first.style.backgroundColor = "black";
        firstdiv1.style.backgroundColor = "black";
        firstdiv1.style.color = "white";
        firstdiv2ul.style.color = "white";
        second1.style.backgroundColor = "black";
        dropdown.style.display = "none";
        drop.style.display = "block";

    }
    else {
        demo.style.backgroundColor = "white";
        firstdiv2ul.style.color = "black";
        first.style.backgroundColor = "rgb(236, 238, 248)";
        firstdiv1.style.backgroundColor = "rgb(236, 238, 248)";
        firstdiv1.style.color = "black";
        second1.style.backgroundColor = "white";
        dropdown.style.display = "block";
        drop.style.display = "none";
    }
};

var sun = document.getElementById("drop");
sun.onclick = function() {
    if (demo.style.backgroundColor === "black") {
        demo.style.backgroundColor = "white";
        firstdiv2ul.style.color = "black";
        first.style.backgroundColor = "rgb(236, 238, 248)";
        firstdiv1.style.backgroundColor = "rgb(236, 238, 248)";
        firstdiv1.style.color = "black";
        second1.style.backgroundColor = "white";
        dropdown.style.display = "block";
        drop.style.display = "none";

    }
    else {
        demo.style.backgroundColor = "black";
        first.style.backgroundColor = "black";
        firstdiv1.style.backgroundColor = "black";
        firstdiv1.style.color = "white";
        firstdiv2ul.style.color = "white";
        second1.style.backgroundColor = "black";
        dropdown.style.display = "none";
        drop.style.display = "block";
    }
}

var earth = document.getElementById("firstchild1");
earth.onclick = 
function() {
    if(firstchild.style.top === "-500px"){
        firstchild.style.top ="150px";
    }
    else {
        firstchild.style.top = "-500px";
    }
}