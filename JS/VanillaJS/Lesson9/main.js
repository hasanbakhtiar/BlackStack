document.getElementsByTagName('h1')[0].innerHTML = "JavaScript";
document.getElementById('test').innerHTML = "Js";
document.getElementsByClassName('beta')[0].innerHTML = "Front";

document.querySelector('p').innerHTML = "Hello1";
document.querySelector('.box').innerHTML = "Hello2";
document.querySelector('#qutu').innerHTML = "Hello3";

// document.querySelector('h4').innerHTML = "hello4";
var x = document.querySelectorAll("h4");
for (var i = 0; i < x.length; i++) {
  x[i].innerHTML = "hello4";
}

const newImg = ()=>{
    document.querySelector('img').src = "bg-1.png";
}
const oldImg = ()=>{
    document.querySelector('img').src = "antaresRocet.jpg";
}


document.querySelector('h5').innerHTML = Date();
document.querySelector('h2').style.color = "red";
document.querySelector('h2').style.background = "green";
// document.querySelectorAll('p#qutu')[0].innerHTML = "hskfhsdf";
