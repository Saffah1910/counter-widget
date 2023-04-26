document.addEventListener('DOMContentLoaded', function () {
    let numberCounterElem = document.querySelector(".numberCounter");
    let incrementBtnElem = document.querySelector('.incrementBtn');
    let decrementBtnElem = document.querySelector('.decrementBtn');
    let resetBtnElem = document.querySelector('.resetBtn');
    let textAreaElem = document.querySelector('.textArea');
    let multipleBtnElem = document.querySelector('.multipleBtn');

    

    var increment = 0;
    // var decrement = 0;
    // number = numberCounter.value
  

    incrementBtnElem.addEventListener('click', function () {
        //  alert("hi")
        var add = increment ++ 
        numberCounterElem.innerHTML = add

    });
   
    decrementBtnElem.addEventListener('click', function(){
        if(increment > 0){
            var minus = -- increment 
            numberCounterElem.innerHTML = minus
        }
     

    });
    resetBtnElem.addEventListener('click',function(){
        // alert("hi")
        numberCounterElem.innerHTML = 0;

    });


multipleBtnElem.addEventListener('click', function(){
    var text = textAreaElem.value
    textAreaElem.innerHTML = text
})





});