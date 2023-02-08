// // oop
// class Person {
//   name = 'TT';

//   run() {
//     console.log('run')
//   }
// }
// function Person() {
//   this.name = 'TT';
// }
// Person.prototype.run = function() {
//   console.log('run');
// }
// const p = new Person();
// p.run

// this
// function (require, module, __dir_name, file_name) {
//   (function () {
//     console.log(this)
//   })();
// }

const obj = {
  name: 'YY',
  foo: function(baz) {
    // this;
    // const baz = () => {
    //   console.log(this);
    // };
    baz();

    // const bar = (function (...args) {
    //   console.log('arguments: ', arguments);
      
    //   console.log(this);
    // }).bind(this);
    // bar(1, 2, 3, true, 'hello');
  }
}
// obj.foo();

// // bind, call, apply

// function foo(num1, boolean1) { // 2
//   console.log(num1, boolean1, this.name);
// }
// // // const newfoo = foo.bind(obj);
// // // newfoo(2, false)

// in a class 
class Person {

  constructor(name, age) {
    console.log(this);
  }

  foo() {
    console.log(this);
  }
}
const p = new Person('David', 67);

class MyPromise {
  thenQueue

  constructor(executor) {
    executor(this.resolve.bind(this), this.reject);
  }
  
  resolve() {
    console.log(this);
  }
  reject = () => {}
}

// foo.call(obj, 445, true) // 1 + 2 = 3
// foo.apply(obj, [445, true]) // tarobj + 1: arr, arr.length ===> 100



// promise

