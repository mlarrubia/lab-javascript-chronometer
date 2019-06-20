let chronometer = new Chronometer();
let chronometerTwo = new Chronometer();
let btnLeft     = document.getElementById('btnLeft');
let btnRight    = document.getElementById('btnRight');
let minDec      = document.getElementById('minDec');
let minUni      = document.getElementById('minUni');
let secDec      = document.getElementById('secDec');
let secUni      = document.getElementById('secUni');
let milDec      = document.getElementById('milDec');
let milUni      = document.getElementById('milUni');



function printTime() {
    printMinutes();
    printSeconds();
}

function printMinutes() {
    let minutes = chronometer.getMinutes();
    let twoDigitMinute = chronometer.twoDigitsNumber(minutes);    
    $('#minDec').text(twoDigitMinute[0]);
    $('#minUni').text(twoDigitMinute[1]);
}

function printSeconds() {
    let sec = chronometer.getSeconds();
    let twoDigitSec = chronometer.twoDigitsNumber(sec); 
    $('#secDec').text(twoDigitSec[0]);
    $('#secUni').text(twoDigitSec[1]);
}

function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {

}

function setSplitBtn() {

}

function setStartBtn() {

}

function setResetBtn() {

}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    $(this).toggleClass('start stop');
    $(this).siblings().toggleClass('reset split');
    if($(this).hasClass('start')){
        $(this).text('START');
        $(this).siblings().text('SPLIT');
        chronometer.stopClick();
    }
    else{
        $(this).text('STOP');
        $(this).siblings().text('RESET');
        // $(this).siblings.text('RESET');
        chronometer.startClick();        
    }    
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    chronometer.resetClick();
    // $(this).toggleClass('split reset');
    // if($(this).hasClass('split')){
    //     $(this).text('SPLIT');
    // }
    // else{
    //     $(this).text('RESET');
    // }

    $(this).toggleClass('reset split');
    $(this).siblings().toggleClass('start stop');
    if($(this).hasClass('reset')){
        $(this).text('RESET');
        $(this).siblings().text('START');
        chronometer.stopClick();
    }
    else{
        $(this).text('SPLIT');
        $(this).siblings().text('STOP');
        // $(this).siblings.text('RESET');
        chronometer.startClick();        
    }    
});
