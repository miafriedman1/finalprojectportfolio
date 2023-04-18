let img_alt = document.querySelectorAll("img");

window.addEventListener("load", function() {
	window.alert("Welcome to my page!");
});

for (let x = 0; x < img_alt.length; x++) {
    y = img_alt[x]
    y.addEventListener("click", function() {
    console.log(y.alt);
    })};