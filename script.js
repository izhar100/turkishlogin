const button=document.getElementById("button")
const emoji=document.getElementById("emoji")
const image=document.getElementById("image")

let count=0;
const margins=["0px","130px","0px","260px","130px","195px","380px"]

button.addEventListener("mouseover",()=>{
    if(count==7){
        count=0;
    }
    button.style.marginLeft=margins[count]
    count++;
    
    emoji.style.display="inline"
    image.style.display="block"
})
