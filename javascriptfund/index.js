let count = 0;
let incrementBtn = document.getElementById('increment');
let countEl = document.getElementById('count-el')
let saveEl = document.getElementById('save')
let previews = document.getElementById('preview')
let decrementBtn = document.getElementById('decrement')
console.log(previews)


function increment() {
    count += 1
    countEl.textContent=count
  console.log(incrementBtn);
}
function decrement() {
    count -= 1
    countEl.textContent=count
  console.log(decrementBtn);
}


function save(){
    console.log(count)
    let countstr = count + "-"
    saveEl.textContent = countstr
}

save()


const text = "hello"

function isVal(x){
    if(x == "hello"){
        console.log('valid')
    }
else{
    console.log('invalid')
}
}
isVal(text)









// let age = 25


// if(age < 25){
//     console.log(" hello this is valid")
// }
// else{
//     console.log(" hello this is invalid")
// }





















// function power(x,y){
//    console.log( x ** y)
// }

// power(4,4)





























// const obj = {
//     parent:"grandda",
//     value:{
//         parent:"dad",
//         value:{
//             parent:"child"
//         }
//     }
// }
// console.log(obj.value.value.parent)






// let profile ={
//     title: "Mr",
//     firstName: "Godwin",
//     lastName: "Izekor"
// }
// let sentence = profile.title +" " + profile.firstName + " " +  profile.lastName 
// console.log(sentence);




// let name = 'godwin '
// let school = 'maryjane '
// reason = 'i am here to learn '

// // let sentence =  name + '' +'attended ' +'' + school + 'because ' + reason
//  let sentence =  `${name } attended  ${school}  because ${reason}`
// console.log(sentence)