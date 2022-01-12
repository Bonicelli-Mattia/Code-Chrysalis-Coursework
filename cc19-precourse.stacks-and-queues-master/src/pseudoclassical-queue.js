function Queue(){

    this.array = []
  
    Queue.prototype.enqueue = function(item){
        this.array.push(item)
    }

    Queue.prototype.dequeue = function(){
        return this.array.shift()
    }

    Queue.prototype.length = function(){
        return this.array.length
    }

}





// leave this at the bottom of this file
module.exports = Queue;