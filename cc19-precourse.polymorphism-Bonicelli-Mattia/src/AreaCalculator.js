/* exported AreaCalculator */

class AreaCalculator {
  // Returns the total area of all shapes rounded to the nearest whole number
  calculateArea(svg) {
    let area = 0;
    for (let shape of svg.children) {
      switch (shape.tagName) {
      case "circle": {
        let radius = shape.getAttribute("r");
        area += Math.PI * radius * radius;
        break;
      }
      case "rect": {
        let width = shape.getAttribute("width");
        let height = shape.getAttribute("height");
        area += width * height;
        break;
      }
      case "ellipse": {
        let r1 = shape.getAttribute("rx");
        let r2 = shape.getAttribute("ry");
        area += Math.PI * r1 * r2;
        break;
      }
      default:
        throw new Error("Type not implemented: " + shape.tagName);
      }
    }
    return Math.round(area);
  }
}
