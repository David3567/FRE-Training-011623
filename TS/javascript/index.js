var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function course(name) {
    return function (target) {
        target.prototype.name = name;
    };
}
var Person = (function () {
    function Person() {
    }
    Person.prototype.printcourse = function () {
        console.log("Angular: ", this.name);
    };
    Person = __decorate([
        course("Jojo")
    ], Person);
    return Person;
}());
var p = new Person();
p.printcourse();
//# sourceMappingURL=index.js.map