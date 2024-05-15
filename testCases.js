// Import the TestSuite class
const TestSuite = require('./testSuite');

// Create a new instance of TestSuite
const testSuite = new TestSuite();

// Define test cases
testSuite.describe('My test suite', () => {
    let arr;
    
    testSuite.beforeEach(() => {
        arr = [1, 2, 3];
    });

    testSuite.it('should have a length of 3', () => {
        if (arr.length !== 3) {
            throw new Error('Array length is not 3');
        }
    });

    testSuite.it('should have 1 as the first element', () => {
        if (arr[0] !== 1) {
            throw new Error('First element is not 1');
        }
    });

    testSuite.describe('Nested describe', () => {
        testSuite.it('should not run this test if `only` is used', () => {
            throw new Error('This test should not run');
        });
    });

    testSuite.only();

    testSuite.describe('Nested describe with `only`', () => {
        testSuite.it('should run this test', () => {
            if (true !== true) {
                throw new Error('This test should not run');
            }
        });
    });
});

// Run the test suite
testSuite.run();
