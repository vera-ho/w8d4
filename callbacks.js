class Clock {
    constructor() {
      // 1. Create a Date object.
      // 2. Store the hours, minutes, and seconds.
      const date = new Date();
      this.hour = date.getHours();
      this.minute = date.getMinutes();
      this.sec = date.getSeconds();

      // 3. Call printTime.
      this.printTime()

      // 4. Schedule the tick at 1 second intervals.
      window.setInterval(this._tick.bind(this), 1000);
    };
  
    printTime() {
      // Format the time in HH:MM:SS
      // Use console.log to print it.
      let hh, mm, ss;
      if(this.hour < 10){
        hh = `0${this.hour}`;
      } else {
        hh = this.hour;
      }

      if(this.minute < 10){
        mm = `0${this.minute}`;
      } else {
        mm = this.minute;
      }

      if(this.sec < 10){
        ss = `0${this.sec}`;
      } else {
        ss = this.sec;
      }

      console.log(`${hh}:${mm}:${ss}`);
    };
  
    _tick() {
      // 1. Increment the time by one second.
      this.sec++;
      if(this.sec > 59) {
        this.minute++;
        this.sec = 0;
      } 
      if(this.minute > 59) {
        this.hour++;
        this.minute = 0;
      }
      if(this.hour > 23){
          this.hour = 0;
      }
      // 2. Call printTime.
      this.printTime();
    };
  }
  
  const clock = new Clock();