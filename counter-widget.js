document.addEventListener('DOMContentLoaded', function () {
    let numberCounterElem = document.querySelector(".numberCounter");
    let incrementBtnElem = document.querySelector('.incrementBtn');
    let decrementBtnElem = document.querySelector('.decrementBtn');
    let resetBtnElem = document.querySelector('.resetBtn');
    let textAreaElem = document.querySelector('.textArea');
    let multipleBtnElem = document.querySelector('.multipleBtn');


    var increment = 0;



    incrementBtnElem.addEventListener('click', function () {
        ++increment
    numberCounterElem.innerHTML = increment
        
    });

    decrementBtnElem.addEventListener('click', function () {
        if (increment > 0) {
            var minus = --increment
            numberCounterElem.innerHTML = minus
        }
    });
    resetBtnElem.addEventListener('click', function () {
      
            // window.open("")
         
        numberCounterElem.innerHTML = 0;
        location.reload()

    });


    multipleBtnElem.addEventListener('click', function () {
      
        
            increment = parseInt(textAreaElem.value) * increment;
            numberCounterElem.innerHTML = increment;
        
            
      
})
})