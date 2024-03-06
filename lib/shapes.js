//shape class
class Shape {
  constructor(){
    this.color = ""
  }
  //setter method inside a class
  setColor(newColor) {
    this.color = newColor
  }
}

//triangle class
class Triangle extends Shape{
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }

}

//circle class
class Circle  extends Shape{
  render() {
    return `<circle r="95" cx="150" cy="100" fill="${this.color}" />`;
  }

}

//square class
class Square  extends Shape{
  render() {
    return `<rect width="200" height="200" x="10" y="10" fill="${this.color}" />`;
  }

}

module.exports = { Shape, Triangle, Circle, Square };




