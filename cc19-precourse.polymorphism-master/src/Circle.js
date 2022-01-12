/* exported Circle */

class Circle extends Ellipse {
    constructor(type, radius){
        super(type, radius)
        super.rx = radius
        super.ry = radius
    }
    
}
