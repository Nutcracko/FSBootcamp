class Example {
   constructor(number, color) {
      this.number = number;
      this.color = color;
   }
   changeColor = (newColor) => {
      this.color = newColor;
   };
}

module.exports = Example;
