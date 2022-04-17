let but = document.querySelector(".btnAM button");
let cont = 0;
let numb = document.querySelectorAll(".box h1");
console.log(numb);
but.addEventListener("click",padd);
but.addEventListener("click",changnumb);
function padd () {
    if(cont == 0){
        but.style.justifyContent = "flex-end";
        cont++;
    }
    else{
        but.style.justifyContent = "flex-start";
        cont--;
    }
};
function changnumb() {
    if(cont == 0){
        numb[0].innerText = "$199.99";
        numb[1].innerText = "$249.99";
        numb[2].innerText = "$399.99";
    }
    else{
        numb[0].innerText = "$19.99";
        numb[1].innerText = "$24.99";
        numb[2].innerText = "$39.99";
    }
}