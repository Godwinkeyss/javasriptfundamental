 let h1 = document.getElementsByTagName('h1')[0];



// h1.style.backgroundColor = "red";

const btn1 = document.querySelector('#light')
const btn2 = document.querySelector('.dark')
const body = document.querySelector('body')
const para = document.querySelector('#param')

console.log(btn1);
console.log(btn2);
console.log(body);

btn1.addEventListener("click" ,() =>{
    body.style.backgroundColor = "";
    body.style.color = "black";         // const images = ./image.png
    para.textContent="Light theme"     // <img src=`${image}`
});


btn2.addEventListener("click", () =>{
    body.style.backgroundColor = "black";
    body.style.color = "white";
    para.textContent="dark theme"
});