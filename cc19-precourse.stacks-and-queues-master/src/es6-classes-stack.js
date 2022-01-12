class Stack {

    constructor(){
        this.array = []
    }
  
    push(item){
        this.array.push(item)
    }

    pop(){
        return this.array.pop()
    }

    length(){
        return this.array.length
    }

}

// leave this at the bottom of this file
module.exports = Stack;