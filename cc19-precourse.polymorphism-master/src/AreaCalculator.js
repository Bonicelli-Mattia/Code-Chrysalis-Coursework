/* exported AreaCalculator */

class AreaCalculator {
  // Returns the total area of all shapes rounded to the nearest whole number
  calculateArea(svg) {
    let area = 0;

    const classPicker = {
      'ellipse': function(type){
        return (new Ellipse('ellipse', type.getAttribute('rx'), type.getAttribute('ry')))
      },
      'circle': function(type){
        return (new Circle('circle', type.getAttribute('r')))
      },
      'rect': function(type){
        return (new Rect('rect', type.getAttribute('width'), type.getAttribute('height')))
      }
    }

    for (let shape of svg.children) {

      const currentShape = classPicker[shape.tagName](shape)
      area += currentShape.area()

    }
    return Math.round(area);
  }
}