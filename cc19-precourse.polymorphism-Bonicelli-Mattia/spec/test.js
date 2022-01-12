/* eslint-env node, mocha */
/* global chai $ */

var expect = chai.expect;

describe('Classes', () => {
  describe('Shape', () => {
    it('should be able to create an object with a tag property', () => {
      const testObj = new Shape("circle");
      expect(testObj).to.have.property('tag');
    })
  })
  describe('Ellipse', () => {
    it('should create an Ellipse object', () => {
      const testObj = new Ellipse("ellipse", 50, 30);
      const failObj = new Shape("ellipse");
      expect(testObj).to.be.an.instanceof(Ellipse);
      expect(failObj).to.not.be.an.instanceof(Ellipse);
    })

    it('should have a tag property', () => {
      const testObj = new Ellipse("ellipse", 50, 30);
      expect(testObj).to.have.property("tag");
    })

    it('should have a rx property', () => {
      const testObj = new Ellipse("ellipse", 50, 30);
      expect(testObj).to.have.property("rx");
    })

    it('should have a ry property', () => {
      const testObj = new Ellipse("ellipse", 50, 30);
      expect(testObj).to.have.property("ry");
    })

    it('should create an object with the values from the constructor', () => {
      const testObj = new Ellipse("ellipse", 100, 200);
      const testObj2 = new Ellipse("ellipse", 20, 300);
      expect(testObj).to.deep.equal({tag: "ellipse", rx: 100, ry: 200})
      expect(testObj2).to.deep.equal({tag: "ellipse", rx: 20, ry: 300})
    })

    it('should have a function called area()', () => {
      const testObj = new Ellipse("ellipse", 50, 30);
      expect(testObj.area).to.be.an.instanceof(Function);
    })

    it('should return the correct answer from the area call', () => {
      const areaResult = Math.PI * 50 * 80;
      const testObj = new Ellipse("ellipse", 50, 80);
      expect(testObj.area()).to.equal(areaResult);
    })
  })

  describe('Circle', () => {
    it('should create a Circle object', () => {
      const testObj = new Circle("circle", 20);
      expect(testObj).to.be.an.instanceof(Circle);
    })

    it('should have a tag property', () => {
      const testObj = new Circle("circle", 50, 30);
      expect(testObj).to.have.property("tag");
    })

    it('should have rx and ry properties from Ellipse', () => {
      const testObj = new Circle("circle", 20);
      expect(testObj).to.have.property("rx")
      expect(testObj).to.have.property("ry")
    })

    it('should have assigned the value of radius to rx and ry properties', () => {
      const testObj = new Circle("circle", 20);
      expect(testObj.rx).to.equal(20);
      expect(testObj.ry).to.equal(20);
    })

    it('should be able to call the area function from the Ellipse parent', () => {
      const areaResult = Math.PI * 50 * 50;
      const testObj = new Circle("circle", 50);
      expect(testObj.area()).to.equal(areaResult);
    })
  })

  describe('Rect', () => {
    it('should create a Rect object', () => {
      const testObj = new Rect("rect", 5, 10);
      expect(testObj).to.be.an.instanceof(Rect);
    })

    it('should have a tag property', () => {
      const testObj = new Rect("rect", 50, 30);
      expect(testObj).to.have.property("tag");
    })

    it('should have a width property', () => {
      const testObj = new Rect("rect", 10, 20);
      expect(testObj).to.have.property("width");
    })

    it('should have a height property', () => {
      const testObj = new Rect("rect", 10, 20);
      expect(testObj).to.have.property("height");
    })

    it('should create an object with the values from the constructor', () => {
      const testObj = new Rect("rect", 100, 200);
      const testObj2 = new Rect("rect", 20, 300);
      expect(testObj).to.deep.equal({tag: "rect", width: 100, height: 200})
      expect(testObj2).to.deep.equal({tag: "rect", width: 20, height: 300})
    })

    it('should have an area() function', () => {
      const testObj = new Rect("rect", 10, 20);
      expect(testObj.area).to.be.instanceof(Function);
    })
    it('should return the correct values from the area function', () => {
      const testObj = new Rect("rect", 10, 20);
      const testObj2 = new Rect("rect", 43, 92);
      expect(testObj.area()).to.equal(200);
      expect(testObj2.area()).to.equal(3956);
    })
  })
})

describe('AreaCalculator', function () {
  it('should calculate area', function () {
    const testDiv = document.createElement("div");
    testDiv.innerHTML =
      `<svg width="800" height="400">
            <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
            <rect x="100" y="200" width="200" height="100" style="fill:rgb(0,0,255);stroke-width:10;stroke:rgb(0,0,0)" />
            <ellipse cx="200" cy="80" rx="100" ry="50" style="fill:yellow;stroke:purple;stroke-width:2" />
        </svg>`;
    const svg = testDiv.children[0];
    const area = new AreaCalculator().calculateArea(svg);
    expect(area).to.equal(40735);
  });
});