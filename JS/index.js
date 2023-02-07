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
  foo: function() {
    (function (self) {
      console.log(self)
    })(this);

    (function (self) {
      console.log(self)
    }).bind()
  }
}
obj.foo();

// bind, call, apply


// promise

