/**
 * stack-ds
 * A simple stack library
 * Copyright (c) 2016 Skevos Papamichail
 */


module.exports = Stack;


/**
 * Stack Constructor
 */
function Stack(){
	//variables
	var _data = [];
	var _size = 0;
	var _max_size = 0;
	
	/**
	 * Push an object to the stack
	 * @param obj 
	 * @returns {Stack} this
	 */
	this.push = function (obj){
		if (_size === _max_size && _max_size>0) return null;
		_data[_size++] = obj;
		return this;
	};
	
	/**
	 * Pop the top object from the stack
	 * @returns {Object} removed object
	 */
	this.pop = function (){
		if(!_size) return null;
		var ret = _data[_size - 1];
		delete _data[--_size];
		return ret;
	};
	
	/**
	 * Peek the top object
	 * @returns {Object} top object
	 */
	this.peek = function (){
		return !_size?null:_data[_size - 1];
	};
	
	/**
	 * Get the size of the stack
	 * @returns {Number}
	 */
	this.size = function (){
		return _size;
	};
	
	/**
	 * Check if stack is empty
	 * @returns {Boolean}
	 */
	this.isEmpty = function (){
		return _size === 0;
	};
	
	/**
	 * Set the maximum size of the stack
	 * @param max_size {Number}
	 * @returns {Stack} this
	 */
	this.setMaxSize = function (max_size){
		_max_size = max_size;
		if(_size > _max_size){
			_size = _max_size;
			_data = _data.slice(0,_size);
		}
		return this;
	};
	
	/**
	 * Get the maximum size of the stack
	 * @returns {Number}
	 */
	this.getMaxSize = function (){
		return _max_size;
	};
	
	/**
	 * Empty the stack
	 * @returns {Stack} this
	 */
	this.empty = function (){
		_data = [];
		_size = 0;
		return this;
	};
	
	/**
	 * Check is stack is full
	 * @returns {Boolean}
	 */
	this.isFull = function (){
		return _size === _max_size;
	};
	
	/**
	 * Copy other stack to this
	 * @param other {Stack}
	 * @returns {Stack} this
	 */
	this.copy = function(other){
		if(!Stack.isStack(other)) return null;
		_max_size = other.getMaxSize();
		_data = [];
		_size = other.size();
		for(i = 0; i < _size; i++){
			_data[i] = other.toArray()[i];
		}
		
		return this;
	};
	
	/**
	 * Compare other and this stacks
	 * @param other {Stack}
	 * @returns {Boolean}
	 */
	this.compare = function(other){
		if (!Stack.isStack(this) || !Stack.isStack(other)) return false;
		if ((_size !== other.size()) || (_max_size !== other.getMaxSize())) return false;
		return this.toString(true) === other.toString(true);
	};
	
	/**
	 * Return a string representation of the stack
	 * @param debug if true export full debug details
	 * @returns {String}
	 */
	this.toString = function(debug){
		var tostr,json;
		var str = "[object Stack] Size : "+_size+", MaxSize : "+(_max_size?_max_size:"Unlimited")+"\n\n";
		if(!debug) return "[object Stack]";
		for(var i=_size-1; i>=0; i--){
			str += "[";
			switch(typeof _data[i]){
				case "function":
					str += "["+_data[i].toString().substr(0,_data[i].toString().indexOf('('))+"]";
					break;
				case "object":
					json = JSON.stringify(_data[i]);
					tostr += _data[i] && typeof _data[i].toString === "function"?_data[i].toString():_data[i];
					str = json === "{}"? str + tostr : str + json
					break;
				default:
					str += _data[i];
					break;
			}
			str += "]" + (i===_size-1?" <-- TOP\n":"\n");
		}
		return str;
	};
	this.toArray = function(){
		return _data;
	}
}

/**
 * Check if an object is a stack
 * @param obj to check
 * @returns {Boolean}
 */
Stack.isStack = function(obj){
	if(!obj) return false;
	if(!obj.constructor) return false;
	if(obj.constructor === Stack) return true;
	return false;
};