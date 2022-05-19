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
      console.log(`${this.hour}:${this.minute}:${this.sec}`);
    };
  
    _tick() {
      // 1. Increment the time by one second.
      //   this.date.setSeconds(this.sec++);
      this.sec++;
      // 2. Call printTime.
      this.printTime();
    };
  }
  
  const clock = new Clock();