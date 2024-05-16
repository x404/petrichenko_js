'use strict';

const btnPhone = document.querySelector('#iphone'),
      btnMacbook = document.querySelector('#macbook'),
      images = document.querySelectorAll('img');



let phoneAnimation;
btnPhone.addEventListener('click', () => {
   
    if (!phoneAnimation){
         phoneAnimation = images[0].animate(
            [
                { transform: "translateY(0)" , filter: "grayscale(0)"},
                { transform: "translateY(-100px)" , filter: "grayscale(1)" },
                { transform: "translateY(100px)"  , filter: "grayscale(1)"},
                { transform: "translateY(0)" , filter: "grayscale(0)" },
            ], {
                duration: 3000,
                iterations: 1,
            }
        )   
    } else if (phoneAnimation.playState == 'paused') {
        phoneAnimation.play()
    } else {
        phoneAnimation.pause()
    }
    console.log(phoneAnimation.playState)
})


let macBookAnimation;
btnMacbook.addEventListener( 'mouseover', () => {
    if (!macBookAnimation){
        macBookAnimation = images[1].animate(
            [
                { transform: "translateY(0)" , filter: "grayscale(0)"},
                { transform: "translateY(-100px)" , filter: "grayscale(1)" },
                { transform: "translateY(100px)"  , filter: "grayscale(1)"},
                { transform: "translateY(0)" , filter: "grayscale(0)" },
            ], {
                duration: 3000,
                iterations: 1,
            }
        )
    } else {
        macBookAnimation.play()
    }
})

btnMacbook.addEventListener( 'mouseout', () => {
    if (macBookAnimation) {
        macBookAnimation.pause()
    }
})