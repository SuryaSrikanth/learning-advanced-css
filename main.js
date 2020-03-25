const blueEyes = ()=>{
        document.getElementsByClassName("eye-color")[0].setAttribute("style","fill:#0047b3");
        document.getElementsByClassName("eye-color")[1].setAttribute("style","fill:#0047b3");
}
const greenEyes = ()=>{
    document.getElementsByClassName("eye-color")[0].setAttribute("style","fill:green");
    document.getElementsByClassName("eye-color")[1].setAttribute("style","fill:green");
}
const sad = ()=>{
    let mouth = document.getElementsByClassName("mouth")[0];
    mouth.setAttribute("style","transform-origin:340px 390px;transform:scale(0.5) rotate(180deg);");
}

const happy = ()=>{
    let mouth = document.getElementsByClassName("mouth")[0];
    mouth.removeAttribute("style","transform-origin:340px 390px;transform:scale(0.5) rotate(180deg);")
}
    
const data = (e)=>{
    let cat= document.getElementsByClassName("cat")[0];

    if(e.getAttribute("data-add")){
    cat.classList.add(e.getAttribute("data-add"));}
if(e.getAttribute("data-remove")){
cat.classList.remove(e.getAttribute("data-remove"));}
}