let red = document.getElementById('red');
let yellow = document.getElementById('yellow');
let blue = document.getElementById('blue');
let green = document.getElementById('green');
let nname = document.getElementsByClassName('wish');

function nameChange() {
    const user = document.getElementById('ask').value;
    document.getElementById('hi').innerHTML = "Hello!!, "+ user ;
}


function redColor()
{
    red.style.backgroundColor = "red";
    red.style.color = "white";
}

function yellowColor()
{
    yellow.style.backgroundColor = "yellow";
    yellow.style.color = "blue";
}

function blueColor()
{
    blue.style.backgroundColor = "blue";
    blue.style.color = "white";
}

function greenColor()
{
    green.style.backgroundColor = "green";
    green.style.color = "white";
}

