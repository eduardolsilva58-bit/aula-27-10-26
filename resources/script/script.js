// let body  =document.querySelector("body");
// let div = document.querySelector("div"); 
// body.removeChild(div);

// let body  =document.querySelector("body");
// let h1 = document.querySelector("h1"); 
// body.removeChild(h1);

// let h1 = document.querySelector("#trocarCor");
// // esse comando serve para eu acessar a propriedade de cores da fonte html
// h1.style.color = "purple";
// h1.style.background = "blue"
// h1.style.height = "20px"
// SEMPRE QUE QUISER ALTERA OU SABER UM VALOR DO CSS DE UM ELEMENTO HTML
// nomeDaTag.style.atributo

//  let body = document.querySelector("body");
//  body.style.background = "black"

// var h1  = document.querySelector("h1");
// var paragrafo = document.querySelector("p");

// paragrafo.innerText = h1.innerText;

// let body = document.querySelector("body");

// function verificaCor(color = null) {
//     switch (color) {
//         case"red":
//         case "blue":
//         case "yellow":
//             color = "primario"
//             break;

//         case"green":
//         case "purple":
//         case "orange":
//             color = "secundario"
//             break;
//         default:
//             color ="Não e primaria nem secundaria"
//             break;
//     }
//     return color;
// }

// let bgColor = prompt("Digite uma cor")

// body.style.background = bgColor
// let corVerificada = verificaCor(bgColor);
// console.log(corVerificada);

// let button = document.querySelector("button")

// button.addEventListener("click",function(){
//     console.log("cliquei")
// });

let button = document.querySelector("button");
let body = document.querySelector("body");
let paragrafo = document.querySelector("p");





button.addEventListener("click", function(){
    body.style.backgroundColor = "black"
    paragrafo.style.color = "purple"
      
})

