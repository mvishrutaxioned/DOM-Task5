$(document).ready(function() {
    // declare variables
    var n = 6;
    var content = '';

    // calling fetch six data
    fetchSixData(n)

    // asynchronous fetch six data function
    async function fetchSixData(n) {
        for(i=n-5; i<=n; i++) {
            if(i < 101) {
                var url = `https://jsonplaceholder.typicode.com/posts/${i}`;
                var data = await fetch(url).then(res => res.json())
                displayList(data)
            } else {
                $('.load').hide();
            }
        }

        $('html, body').animate({
            scrollTop: $(document).height()
        }, 'slow');
    }


    // load more data functionality
    $('.load').click((e) => {
        e.preventDefault();

        n+=6;
        fetchSixData(n);
    })
})