/**
 * New node file
 */


module.exports = Stack;



function Stack(){
	var _data = [];
	var _size = 0;
	var _max_size = 0;
	
	this.push = function (obj){
		_data[_size++] = obj;
		return this;
	};
	this.pop = function (){
		var ret = _data[_size - 1];
		delete _data[--_size];
		return ret;
	};
	this.peek = function (){
		return _data[_size - 1];
	};
	this.size = function (){
		return _size;
	};
	this.isEmpty = function (){
		return _size === 0;
	};
	this.setMaxSize = function (max_size){
		_max_size = max_size;
		return this;
	};
	this.getMaxSize = function (){
		return _max_size;
	};
	this.empty = function (){
		_data = [];
		_size = 0;
	};
	this.isFull = function (){
		return _size === _max_size;
	};
	this.copy = function(other){
		_max_size = other.getMaxSize();
		
		for(i = 0; i < other.toArray().length; i++){
			this.push(other.toArray()[i]);
		}
		
		return this;
	};
	this.compare = function(other){
		if (!Stack.isStack(this) || !Stack.isStack(other)) return false;
		if ((_size === other.size()) && (_max_size === other.getMaxSize())) return false;
		return this.toString() === other.toString();
	};
	this.toString = function(){
		var json, tostr;
		var str = "[object Stack] Size : "+_size+", MaxSize : "+(_max_size?_max_size:"Unlimited")+"\n\n";
		for(var i=_size-1; i>=0; i--){
			str += "[";
			switch(typeof _data[i]){
				case "function":
					str += "function";
					break;
				case "object":
					json = JSON.stringify(_data[i]);
					tostr = _data[i].toString();
					str += json === "{}" ? tostr : json;
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

Stack.isStack = function(obj){
	return obj.constructor && obj.constructor === Stack;
};