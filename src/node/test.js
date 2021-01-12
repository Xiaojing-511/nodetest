var Hello = require('../modules/hello');
import { test1 } from '../modules/_request.js';
hello = new Hello();
hello.setName('jingjing');
hello.sayHello();
test1.setTest1('test11111');
test1.getTest1();