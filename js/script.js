//Button 1
const h1 = document.querySelectorAll("h1")
const button1 = document.getElementById("ex1");


button1.addEventListener("click", customText);

function customText() {

    h1[0].textContent = "Min egen tekst"

}



//Button 2
const button2 = document.getElementById("ex2")
const paragraphList = document.querySelectorAll("p")

button2.addEventListener("click", redParagraphs)

function redParagraphs() {
    for (let i = 0; i < paragraphList.length; i++) {
        
        paragraphList[i].style = "color: red"
        
    }
}

//button 3
const button3 = document.getElementById("ex3")
const liList = document.querySelectorAll("li")

button3.addEventListener("click", () => {

    for (let i = 0; i < liList.length; i++) {
   
        liList[i].style = "transition: 1s; transform: rotate(180deg)"
    }

})

//button 4
const button4 = document.getElementById("ex4")
const headerList = document.querySelectorAll("h1, h2, h3, h4, h5, h6")

button4.addEventListener("click", ()=> {

    for (let i = 0; i < headerList.length; i++) {
        
        headerList[i].style.display = "none"
        
    }

})

//button 5
const button5 = document.getElementById("ex5")
const linkList = document.querySelectorAll("a")

button5.addEventListener("click", function() {
    
    for (let i = 0; i < linkList.length; i++) {
        
        linkList[i].style = "font-size: x-large; font-weight: 900;"

    }

})


//button6
const button6 = document.getElementById("ex6")
const orderedList = document.querySelectorAll("ol")

button6.addEventListener("click", ()=>{

    if (orderedList[0].children.length < 6) {
        const listItem = document.createElement("li");
        listItem.textContent = "This is a new item"
        orderedList[0].appendChild(listItem)  
    }
})  

//button7

const button7 = document.getElementById("ex7");
const listList = document.querySelectorAll("li");

button7.addEventListener("click", ()=>{
    console.log("It works!");
    for (let i = 0; i < listList.length; i++) {

        if (i % 2 == 0) {
            listList[i].style = "color: blue"
        }
    }

})


// //button8

// const button8 = document.getElementById("ex8")
// const unorderedList = document.querySelectorAll("ul")

// button8.addEventListener("click", ()=>{

// })

//button 9
const button9 = document.getElementById("ex9")

button9.addEventListener("click", () => {

    for (let i = 0; i < listList.length; i++) {
        listList[i].classList.add("testAnimation")
        
    }

})




//button 11
const button11 = document.getElementById("ex11")
const docBody = document.getElementsByTagName("body")

button11.addEventListener("click", () =>{
    docBody[0].style = "transition: 1s; transform: rotate(15deg);"
})

//button 12
const button12 = document.getElementById("ex12")
const content = document.getElementById("contentarea")
button12.addEventListener("click", () =>{

    content.classList.add("bigText")

})


//Button 13
const button13 = document.getElementById("ex13")

button13.addEventListener("click", () =>{

    content.classList.toggle("bigText")

})