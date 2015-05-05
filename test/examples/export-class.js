export class TestClass {
    isSane() {
        return true;
    }
}

var testObj = new exports.TestClass();
assert.equal(testObj.isSane(), true);