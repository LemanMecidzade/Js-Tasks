"use strict"

let result = document.querySelector('.result-box');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (btn) => {
        console.log("clicked");
        switch(btn.target.innerText){
            case 'C':
                result.innerText = '';
                break;
            case '←':
                result.innerText = result.innerText.slice(0,-1);
                break;
            case '=':
                try{
                    result.innerText = eval(result.innerText);
                }catch{
                    result.innerText = "Invalid Expression!"
                }
                break;
            default:
                result.innerText += btn.target.innerText;
        }
    });
});