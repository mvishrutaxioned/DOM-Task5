$(document).ready(function() {
    // declare variables
    var n = 6;
    var content = '';

    // load more data functionality
    $('.load').click((e) => {
        e.preventDefault();

        n+=6;
        fetchSixData(n);
    })
})