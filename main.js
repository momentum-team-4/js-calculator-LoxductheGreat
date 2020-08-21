let output = document.querySelector(".outputwindow")
// let clear = document.querySelector(".outputwindow")
// const equalbutton = document.querySelector('.clear')

let seven = document.querySelector('.seven')
seven.addEventListener("click", function(){
    output.innerText += "7"
})

let eight = document.querySelector('.eight')
eight.addEventListener("click", function(){
    output.innerText += "8"
})

let nine = document.querySelector('.nine')
nine.addEventListener("click", function(){
    output.innerText += "9"
})

let four = document.querySelector('.four')
four.addEventListener("click", function(){
    output.innerText += "4"
})

let five = document.querySelector('.five')
five.addEventListener("click", function(){
    output.innerText += "5"
})

let six = document.querySelector('.six')
six.addEventListener("click", function(){
    output.innerText += "6"
})

let one = document.querySelector('.one')
one.addEventListener("click", function(){
    output.innerText += ("1")
})

let plus = document.querySelector('.plus')
plus.addEventListener("click", function(){
    output.innerText += "+"
})
let plus = document.querySelector('.minus')
plus.addEventListener("click", function(){
    output.innerText += "-"
})

let plus = document.querySelector('.divide')
plus.addEventListener("click", function(){
    output.innerText += "/"
})

let plus = document.querySelector('.miltiply')
plus.addEventListener("click", function(){
    output.innerText += "*"
})

let plus = document.querySelector('.decimal')
plus.addEventListener("click", function(){
    output.innerText += "."
})



// let clear = document.querySelector('.clear')
// clear.addEventListener("click", function(){
//     output.innerText("")
// })

let equal = document.querySelector(".equals")
equal.addEventListener("click", function(){
   let equation = output.innerText
   console.log()
})