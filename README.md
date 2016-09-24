

# stack-ds

A simple stack data structure.

## Installation

```bash
	npm install stack-ds -save
```

## API 

* **Stack()** - Constructor `var mystack = new Stack();`

* **Stack.isStack(obj)** - Check if obj is Stack. Returns boolean. `Stack.isStack(myobject);`  

* **.push(obj)** - Push an obj into the stuck. Returns this. `mystack.push({a:5});`

* **.pop()** - Pop the top object from the stack. Returns the poped object `mystack.pop();`

* **.peek()** - Get the top object. `var top = mystack.peek();`

* **.size()** - Get the size of the stack. `var size = mystack.size();`

* **.isEmpty()** - Check if the stack is empty. Returns boolean. `mystack.isEmpty();`

* **.setMaxSize(max_size)** - Set the maximum size of the stack. Returns this. `mystack.setMaxtSize(10);`

* **.getMaxSize()** - Get the maximum size of the stack. `mystack.getMaxtSize();`

* **.empty()** - Empty the stack. Returns this. `mystack.empty();`

* **.isFull()** - Check if the stack is full. Returns boolean. `mystack.isEmpty();`

* **.copy(other)** - Copies other into this. Returns this. `mystack.copy(otherstack);`

* **.compare(other)** - Compares other and this stacks. Returns boolean. `mystack.compare(otherstack;`

* **.toString(debug)** - Export a string representation of the stack. If debug is set to true will export a full representation for each element `mystack.toString();`

* **.toArray()** - Exports an array with stacks's data. `mystack.toArray();`

## TEST

In order to test the library run : 

```bash
	npm test
```

**You need to have mocha installed**

```bash
	npm install -g mocha
```

## LICENSE 
MIT

Copyright (c) 2016 Skevos Papamichail &lt;contact@skevosp.me&gt; (www.skevosp.me) 
