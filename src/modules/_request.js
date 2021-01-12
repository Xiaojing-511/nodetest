export function test1() {
    var test1;
    this.setTest1 = function (value) {
        test1 = value;
    };
    this.getTest1 = function () {
        console.log(test1);
    }
}

export function test2() {
    var test2;
    this.setTest2 = function (value) {
        test2 = value
    };
    this.getTest2 = function () {
        console.log(test2);
    }
}