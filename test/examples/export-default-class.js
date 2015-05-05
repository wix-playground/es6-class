export default class TestClass {
    isSane() {
        return true;
    }
}

var testObj = new module.exports.default;
assert.equal(testObj.isSane(), true);