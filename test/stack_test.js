var expect = require('chai').expect;
var Stack = require('../tdd/stack');

describe('Stack', function() {

    var testStack = null;

    beforeEach(() => {
        testStack = new Stack();
    });

    it("gets initialized and is empty", function() {
        expect(testStack.isEmpty()).to.be.true;
    });

    it("should return isEmpty as false when an item exists on the Stack", function() {
        testStack.push("Some Entry");
        expect(testStack.isEmpty()).to.be.false;
    });

    it("should allow an object to be pushed, popped, and isEmpty should be true", () => {
        testStack.push("Some Entry");
        testStack.pop();
        expect(testStack.isEmpty()).to.be.true;
    });

    it("should allow one object to be pushed, and then when popped, the popped object is what we expect", () => {
        var expected = "The First Element";
        testStack.push(expected);
        expect(expected).to.equal(testStack.pop());
    });

    it("should allow two objects to be pushed, and when both popped, the returned objects are what we expect", () => {
        var firstElement = "The First Element";
        var secondElement = "The Second Element";
        testStack.push(firstElement);
        testStack.push(secondElement);
        expect(secondElement).to.equal(testStack.pop());
        expect(firstElement).to.equal(testStack.pop());
    });

    it("should be able to handle the popping of a stack when no elements exist", () => {
        expect(() => testStack.pop()).to.throw(Error);
    });

    it("should allow a null push which should still be considered an element and isEmpty will return false", () => {
        testStack.push(null);
        expect(testStack.isEmpty()).to.be.false;
    });

    it("should allow a null push and pop should return null", () => {
        testStack.push(null);
        expect(null).to.equal(testStack.pop());
    });

    it("should allow a null push, a call to top, and should return null when pop called", () => {
        testStack.push(null);
        expect(null).to.equal(testStack.top());
        expect(null).to.equal(testStack.pop());
    });

    it("should allow for an element to be pushed, top should return the expected element, and isEmpty should be false", () => {
        var expected = "The First Element";
        testStack.push(expected);
        var result = testStack.top();
        expect(expected).to.equal(result);
        expect(testStack.isEmpty()).to.be.false;
    });
});