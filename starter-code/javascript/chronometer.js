let clock;
class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick() {
   clock = setInterval(()=>{
     
      this.currentTime++;
      printSeconds();
      printMinutes();
    }, 1000);

    // DOES NOT WORK :(
    // setInterval(function(){this.currentTime++; console.log(this.currentTime)}, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  twoDigitsNumber(time) {
    if(time< 10){
      return "0" + time;
    }
    else {
      return "" + time;
    }
  }

  stopClick() {
    clearInterval(clock);
    this.currentTime = 0;
    printTime();
  }

  resetClick() {
    this.currentTime = 0;
  }
  
  splitClick() {

  }
}