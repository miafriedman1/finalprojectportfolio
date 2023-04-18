
    document
    .getElementById("main")
    .addEventListener("click", function( e ){ 
        if( ! confirm("Are you sure you're ready to submit?") ){
            e.preventDefault();
        } else {
            alert('Ok, lets do this!');
        }
    });