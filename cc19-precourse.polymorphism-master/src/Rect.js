/* exported Rect */

class Rect extends Shape{
    constructor(type, width, height){
        super(type)
        this.width = width
        this.height = height
    }
    area(){
        return this.width * this.height
    }
}
