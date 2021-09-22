// localStorage.setItem("name","BMW");
// localStorage.removeItem('name');
// localStorage.setItem("id1","1");
// localStorage.setItem("id2","2");
// localStorage.setItem("id3","3");
// localStorage.setItem("id4","4");
// localStorage.setItem("id5","5");
// localStorage.setItem("id6","6");
// localStorage.setItem("id7","7");
// localStorage.setItem("id8","8");
// localStorage.setItem("id9","9");


const lightMode = document.querySelector("h1").attributes[0].value;
const darkMode = document.querySelector("h2").attributes[0].value;

if(lightMode == "1"){
    localStorage.setItem('id','1');
}else if(darkMode == "2"){
    localStorage.setItem('id','2');

}else{
    localStorage.setItem('id','1');

}