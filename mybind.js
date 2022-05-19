// why doesn't this work with the fat arrow???
// FUnction.prototype.myBind is ES5 and fat arrow is ES6!! bad mix
Function.prototype.myBind = function(context) {
    // needed for es5 without fat arrow. fat arrow preserves context
    // let that = this;
    return () => {
    // return function() {
        this.apply(context);
    }
}

// Test code
class Lamp {
    constructor() {
      this.name = "a lamp";
    }
}
  
const turnOn = function() {
    console.log("Turning on " + this.name);
};

const lamp = new Lamp();

// turnOn(); // should not work the way we want it to

const boundTurnOn = turnOn.bind(lamp);
const myBoundTurnOn = turnOn.myBind(lamp);

boundTurnOn(); // should say "Turning on a lamp"
myBoundTurnOn(); // should say "Turning on a lamp"