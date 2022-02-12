window.onload = () => {
    const inputEl = document.getElementsByTagName("input");
    const rocket = document.getElementById("rocket");
    // console.log(inputEl["c01"]);

    for(let i = 2; i < inputEl.length; i++) {
        inputEl[i].disabled = true;
    }

    inputEl[1].addEventListener("click", ()=>{
        if (inputEl[0].value === "TrustNo1") {
            inputEl[0].disabled = true;
            inputEl[1].disabled = true;
            for(let i = 2; i < inputEl.length - 1; i++) {
                inputEl[i].disabled = false;
            }
        }
    })
    const checked = () => {
        let done = true;
        for(let i=0; i<6; i++) {
            if(!inputEl[`c0${i+1}`].checked) {
                done=false;
            }
        }
        for(let i=0; i<5; i++) {
            if(inputEl[`lever0${i+1}`].value !== '100') {
                done=false;
            }
        }
        return done;
    }
    for (let i=2; i<inputEl.length-1;i++) {
        inputEl[i].onchange = ()=>{
            let check = checked();
            if(check) {
                inputEl[inputEl.length-1].disabled = false;
            }
        };
    }
    inputEl[inputEl.length-1].addEventListener("click", ()=>{
        rocket.classList.add("launch");
    })
};
