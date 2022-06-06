const imgbtns = document.querySelectorAll('#imgbtn')
console.log(imgbtns);

imgbtns.forEach(imgbtn => {
    let toggle = false
    imgbtn.addEventListener('click', () => {
        if (!toggle) {
            imgbtn.innerHTML = `<img class="like-icon" src="./images/heart-icon.png" alt="" id="img-btn">`
            toggle = true
        } else {
            imgbtn.innerHTML = `<img src="./images/like-icon-red.png" alt="" width="23.5px" height="23px">`
            toggle = false
        }
    })
})

const imgbtns2 = document.querySelectorAll('#imgbtn2')
console.log(imgbtns2);

imgbtns2.forEach(imgbtn2 => {
    let toggle = false
    imgbtn2.addEventListener('click', () => {
        if (!toggle) {
            imgbtn2.innerHTML = `<img class="like-icon" src="./images/heart-icon.png" alt="" id="img-btn">`
            toggle = true
        } else {
            imgbtn2.innerHTML = `<img src="./images/like-icon-red.png" alt="" width="15px" height="19.2px">`
            toggle = false
        }
    })
})