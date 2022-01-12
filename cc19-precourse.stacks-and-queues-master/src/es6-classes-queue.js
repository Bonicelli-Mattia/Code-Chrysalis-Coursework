class Queue {

    constructor(){
        this.array = []
    }
  
    enqueue(item){
        this.array.push(item)
    }

    dequeue(){
        return this.array.shift()
    }

    length(){
        return this.array.length
    }

}

// leave this at the bottom of this file
module.exports = Queue;