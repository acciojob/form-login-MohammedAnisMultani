
       let inp = document.querySelectorAll("input")
    let btn = document.querySelector("button")

    btn.addEventListener("click", form)

    function form(eventDetails)
    {
        let firstInp = inp[0].value;
        let lastInp = inp[1].value;

        alert(firstInp +" "+ lastInp)
    }



