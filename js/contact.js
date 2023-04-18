
    document
    .getElementById("main")
    .addEventListener("click", function( e ){ 
        if( ! confirm("Are you sure you're ready to submit?") ){
            e.preventDefault();
        } else {
            alert('Ok, lets do this!');
        }
    });

let img_alt = document.querySelectorAll("img");

for (let x = 0; x < img_alt.length; x++) {
    y = img_alt[x];
    y.addEventListener("click",function(){
        console.log(this.alt)});
}