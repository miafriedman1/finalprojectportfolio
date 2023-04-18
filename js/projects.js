let img_alt = document.querySelectorAll("img");

for (let x = 0; x < img_alt.length; x++) {
    y = img_alt[x];
    y.addEventListener("click",function(){
        console.log(this.alt)});
}