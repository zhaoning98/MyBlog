1、如何判断一个数组
  1)、 `Array.isArray()`
  ```
  if (!Array.isArray) {
	  Array.isArray = function(arg) {
	    return Object.prototype.toString.call(arg) === '[object Array]';
	  };
	}
	```
  2)、`[] instanceof Array`
  3)、 `typeof arr === 'object' && arr.constructor === Array`
   typeof 会返回基本类型
  4)、 `Array.prototype.isPrototypeOf(arr)` 
  利用 isPrototypeOf() 方法，判断 Array 是不是在 arr 的原型链中，
  如果是，则返回 true，否则返回 false
  5)、`Object.prototype.toString.call(arr) === '[object Array]'`
  在 js 中，一个对象一旦被创建，在内部都会携带创建对象的类型名。
  js 中，提供了调用对象原型中的 toString 方法，Object.prototype.toString.call(arr); 
  因为很多对象继承的 toString() 方法被重写了，为了证明调用正确的 toStirng() 版本，也就是最原始的版本。
  可以使用 Function.call() 的方法，其中 call 可以这么理解，相当于 obj 去借用这个 Object.prototype.toString()
  

2、JS 的语言特性

3、call、bind、apply 的区别，实现 bind 

4、变量声明提升
  只有声明被提升，而赋值或其他运算会留在原地
  ```
  var a = 'hello world';
  var a;
  console.log(a); // hello world
  ```
  相当于
  ```
  var a;
  a = 'hello world';
  console.log(a);
  ```

5、跨域
  https://www.cnblogs.com/guanhuachen/p/6044677.html
	1)、JSONP
	2)
	3)
	4)
	5)
	6)
