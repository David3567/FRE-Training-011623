// function component(target: Function) {
// 	target.prototype.name = "David";
// }

// function component(name: string) {
// 	return function (target: Function) {
// 		target.prototype.name = name;
// 	};
// }

// @component({
// })
// class Person {}

// const p = new Person();
// console.log(p);

//interface, class, union, generic, enum

// let hello: "TT" | "HH" = "TT";

// // type fnType = (name: string, age: number) => [string, number];
// interface fnType {
// 	(name: string, age: number): [string, number];
// }

// const foo: fnType = function () {
// 	return ["hello", 34];
// };

// foo("hi", 56);

// generic

// function toStringArr(x: string, y: string): string[] {
// 	return [x, y];
// }
// function toNumbeArr(x: number, y: number): number[] {
// 	return [x, y];
// }
// function toArr<T, R>(x: T, y: R): [T, R] {
// 	return [x, y];
// }
// toArr<number, string>(12, "45");

// interface Queue<T> {
//     enqueue(item: T): void;
//     dequeue(): T;
//     getqueue(): T[];
// }
// class MyQueue<T> implements Queue<T> {
//     queue: T[];

//     enqueue(item: T): void {}
//     dequeue(): T {
//         throw new Error("Method not implemented.");
//     }
//     getqueue(): T[] {
//         throw new Error("Method not implemented.");
//     }
// }

enum Role {
	USER = "user",
	SUPER = 4,
	ADMIN,
}

const p: Role = Role.ADMIN;

console.log(p);
