function Stack(){
    
    this.array = []
  
    Stack.prototype.push = function(item){
        this.array.push(item)
    }

    Stack.prototype.pop = function(){
        return this.array.pop()
    }

    Stack.prototype.length = function(){
        return this.array.length
    }

}










// leave this at the bottom of this file
module.exports = Stack;