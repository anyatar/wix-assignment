// Define the TestSuite class
class TestSuite {
    constructor() {
        this.tests = [];
        this.beforeEachHooks = [];
        this.onlyFlag = false;
    }

    describe(description, callback) {
        if (this.onlyFlag) return;
        console.log(`\n${description}`);
        callback();
    }

    beforeEach(callback) {
        this.beforeEachHooks.push(callback);
    }

    it(description, testFunction) {
        if (this.onlyFlag) return;
        this.tests.push({ description, testFunction });
    }

    only() {
        this.onlyFlag = true;
    }

    run() {
        this.tests.forEach(test => {
            this.beforeEachHooks.forEach(hook => hook());
            console.log(`  - ${test.description}`);
            try {
                test.testFunction();
                console.log("    ✓ Passed");
            } catch (error) {
                console.error(`    ✗ Failed: ${error.message}`);
            }
        });
    }
}

module.exports = TestSuite;
