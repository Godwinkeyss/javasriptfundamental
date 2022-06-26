const btn = document.querySelector('#btn1')
const body = document.querySelector('body')
const params = document.querySelector('#name')
const fun = document.querySelector('#fun')
const school = document.querySelector('#school')
const img = document.querySelector('#image')

console.log(btn)


btn.addEventListener('click',() =>{
  
    params.textContent=`my name is:godwin `
    fun.textContent=`i love coding `
    school.textContent=`i attended mary jane `
    img.textContent=`<img src=""`
   
   
})