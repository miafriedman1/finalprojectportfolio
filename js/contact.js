
    document
    .getElementById("main")
    .addEventListener("click", function( e ){ //e => event
        if( ! confirm("Are you sure you're ready to submit?") ){
            e.preventDefault(); // ! => don't want to do this
        } else {
            //want to do this! => maybe do something about it?
            alert('Ok, lets do this!');
        }
    });