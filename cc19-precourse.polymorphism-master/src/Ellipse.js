/* exported Ellipse */

class Ellipse extends Shape{
    constructor(type, radius1, radius2){
        super(type)
        this.rx = radius1
        this.ry = radius2
    }

    area(){
        return Math.PI * this.rx * this.ry 
    }

}
