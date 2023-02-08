function course(name: string) {
	return function (target: Function) {
		target.prototype.name = name;
	};
}

@course("Jojo")
class Person {
	name: string;

	constructor() {
		// this.name = name;
	}

	printcourse() {
		console.log("Angular: ", this.name);
	}
}

const p = new Person();
p.printcourse();
