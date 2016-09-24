var Stack = require('../');
var assert = require('assert');

describe('Stack.isStack()', function(){
	it('String should not be a stack', function(){
		var s = "test string";
		assert.equal(false,Stack.isStack(s));
	});
	it('Number should not be a stack', function(){
		var s = 101;
		assert.equal(false,Stack.isStack(s));
	});
	it('Null should not be a stack', function(){
		var s = null;
		assert.equal(false,Stack.isStack(s));
	});
	it('Undefined should not be a stack', function(){
		assert.equal(false,Stack.isStack());
	});
	it('JSON Object should not be a stack', function(){
		var s = {
			a1 : 2,
			a3 : 3
		};
		assert.equal(false,Stack.isStack(s));
	});
	it('Object should not be a stack', function(){
		function obj(){
			this.a = 1;
			this.addSome = function(b){
				return this.a + b;
			};
		}
		var s = new obj();
		assert.equal(false,Stack.isStack(s));
	});
	it('Function should not be a stack', function(){
		var s = function(a,b){
			return a+b;
		};
		assert.equal(false,Stack.isStack(s));
	});
	it('Date should not be a stack', function(){
		var s = new Date();
		assert.equal(false,Stack.isStack(s));
	});
	it('Stack should be a stack', function(){
		var s = new Stack();
		assert.equal(true,Stack.isStack(s));
	});
});


describe('Pushing, Poping, Peeking and measuring size', function(){
	var s = new Stack();
	it('The size after pushing [23,2,10,1] should be 4', function(){
		s.push(23).push(2).push(10).push(1);
		assert.equal(4,s.size());
	});
	it('The top element after one pop should be 10', function(){
		s.pop()
		assert.equal(10,s.peek());
	});
	it('The size after pushing 10 times the string <strX> should be 13', function(){
		s.push('str1').push('str2').push('str3').push('str4').push('str5');
		s.push('str6').push('str7').push('str8').push('str9').push('str10');
		assert.equal(13,s.size());
	});
	it('The last poped element after 4 pops should be <str7>', function(){
		s.pop();
		s.pop();
		s.pop();
		assert.equal('str7',s.pop());
	});
	it('.isEmpty() should return false', function(){
		assert.equal(false,s.isEmpty());
	});
	it('The size after emptying the stack should be 0', function(){
		s.empty();
		assert.equal(0,s.size());
	});
	it('.isEmpty() should return true', function(){
		assert.equal(true,s.isEmpty());
	});
	it('Pop on empty stack should return null', function(){
		assert.equal(null,s.pop());
	});
	it('Peek on empty stack should return null', function(){
		assert.equal(null,s.peek());
	});
});

describe('Checking Maximum Stack Size', function(){
	var s = new Stack();
	it('Setting and getting maximum size of 4 in a Stack', function(){
		s.setMaxSize(4);
		assert.equal(4,s.getMaxSize());
	});
	it('Trying to push 4 elements [1,2,3,4] in the stack should not return null', function(){
		s.push(1).push(2).push(3);
		assert.equal(s,s.push(4));
	});
	it('Trying to push [5] in the stack should return null', function(){
		assert.equal(null,s.push(5));
	});
	it('The Stack should be full', function(){
		assert.equal(true,s.isFull());
	});
	
	it('The size of stack should be 4', function(){
		assert.equal(4,s.size());
	});
	it('The top element of our Stack should be <4>', function(){
		assert.equal(4,s.peek());
	});
	it('Setting new Maximum Size at 2 will result in a stack with size of 2',function(){
		s.setMaxSize(2);
		assert.equal(2,s.size());
	});
	it('The top element of our Stack should be <2>', function(){
		assert.equal(2,s.peek());
	});
});

describe('Handling different type of elements', function(){
	var s = new Stack();
	var date = new Date();
	it('pushing and peeking a number', function(){
		s.push(1);
		assert.equal(1,s.peek());
	});
	it('pushing and peeking a string', function(){
		s.push("str");
		assert.equal("str",s.peek());
	});
	it('pushing and peeking undefined', function(){
		s.push(undefined);
		assert.equal(undefined,s.peek());
	});

	it('pushing and peeking null', function(){
		s.push(null);
		assert.equal(null,s.peek());
	});

	it('pushing and peeking a Date', function(){
		s.push(date);
		assert.equal(date,s.peek());
	});

	it('pushing, peeking and using a JSON object', function(){
		var d = {
				a : 3,
				b : "str",
				c : date
		}
		s.push(d);
		assert.equal(d.a,s.peek().a);
		assert.equal(d.b,s.peek().b);
		assert.equal(d.c,s.peek().c);
	});

	it('pushing, peeking and using an instance of object', function(){
		function o(){
			this.a = 5;
			this.b = 6;
			this.add = function (){
				return this.a + " + " + this.b + " = " + (this.a+this.b);
			}
		}
		var d = new o();
		s.push(d);
		assert.equal(d.add(),s.peek().add());
	});
	it('pushing, peeking and calling a function', function(){
		function d(){
			return 1;
		}
		s.push(d);
		assert.equal(d(),s.peek()());
	});
	it('Size of stack should be 8', function(){
		assert.equal(8,s.size());
	})
	it('.toString() should return [object Stack]', function(){
		assert.equal('[object Stack]',s.toString());
	});
	
});

describe('Copying and comparing stacks', function(){
	var s1 = new Stack();
	var s2 = new Stack();
	var date = new Date();
	var d1 = {
			a : 3,
			b : "str",
			c : date
	}
	function o(){
		this.a = 5;
		this.b = 6;
		this.add = function (){
			return this.a + " + " + this.b + " = " + (this.a+this.b);
		}
	}
	function d3(){
		return 1;
	}
	var d2 = new o();
	it('Copying stack 1 to stack 2 should not fail', function(){
		s1.push(1);
		s1.push("str");
		s1.push(undefined);
		s1.push(null);
		s1.push(date);
		s1.push(d1);
		s1.push(d2);
		s1.push(d3);		
		
		assert.equal(s2,s2.copy(s1));
		assert.equal(s1.size(),s2.size());
		
	});
	it('Compering stack 1 with stack 2 should be true', function(){
		
		assert.equal(true,s1.compare(s2));
	});
	it('Compering stack 2 with stack 1 should be true', function(){
		assert.equal(true,s2.compare(s1));
	});
	it('Compering stack 1 with its self sould be true', function(){
		assert.equal(true,s1.compare(s1));
	});
	it('Comparing stack 1 with stack 2 after poping from stack 2 should be false', function(){
		s2.pop();
		assert.equal(false,s1.compare(s2));
	});
	it('Comparing stack 1 with stack 2 after poping from stack 1 should be true', function(){
		s1.pop();
		assert.equal(true,s1.compare(s2));
	});
});