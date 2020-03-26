let color1 = document.querySelector("#color1");
let color2 = document.querySelector("#color2");
let body = document.querySelector("body");
let h3 = document.querySelector("h3");


const style = ()=>{ // function to change the backgrnd color and the textcontent of h3 element
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    h3.textContent = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
}

color1.addEventListener("input",style);

color2.addEventListener("input",style);


