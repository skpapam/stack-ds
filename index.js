/**
 * New node file
 */


module.exports = Stack;



function Stack(){
		Stack._data = [];
		Stack._size = 0;
		Stack._max_size = 0;
	
}
Stack.prototype.push = function (obj){
	Stack._data[Stack._size++] = obj;
	return this;
};
Stack.prototype.pop = function (){
	var ret = Stack._data[Stack._size - 1];
	delete Stack._data[--Stack._size];
	return ret;
};
Stack.prototype.peek = function (){
	return Stack._data[Stack._size - 1];
};
Stack.prototype.size = function (){
	return Stack._size;
};
Stack.prototype.isEmpty = function (){
	return Stack._size === 0;
};
Stack.prototype.setMaxSize = function (max_size){
	Stack._max_size = max_size;
	return this;
};
Stack.prototype.clear = function (){
	Stack._data = [];
	Stack._size = 0;
};
Stack.prototype.isFull = function (){
	return Stack._size === Stack._max_size;
};
Stack.prototype.copy = function(other){
	
};
Stack.prototype.compare = function(other){
	
};
Stack.prototype.toString = function(){
	
};
Stack.isStack = function(obj){
	return obj.constructor.toString().indexOf("function Stack()") === 0;
};