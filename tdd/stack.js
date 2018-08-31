var Stack = function () {
    this.elements = [];
    return {
        isEmpty : () => {
            return this.elements.length === 0;
        },
        push : (element) => {
            this.elements.unshift(element);
        },
        pop : () => {
            if(this.elements.length === 0){
                throw new Error('Cannot pop an empty stack');
            }
            return this.elements.shift();
        },
        top : () => {
            return this.elements[0];
        }
    }
}
module.exports = Stack;