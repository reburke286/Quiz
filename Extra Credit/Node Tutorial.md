Node cuts down on on time and resources since it's highly scalable. You can use JavaScript on front and backend, which allows you to use the same tools and best practices. Node works in non-blocking, or asynchronous, architecture, which allows the programs to run more efficiently.

Installation 
In your Git Bash, or Terminal for Mac's, enter node --version to see which version you're operating on. For an updated version go to "nodejs.org." Use the following commands for installation: 
npm install fileName
npm init --yes
npm i fileName
npm i -g fileName (-g means it's a global installation and will work anywhere)

Node runs off of C++ and does not recognize the DOM. It does, however, recognize Global and all global functions are accessed through that syntax. Every file in a node application is considered a module. You can call the var module and see the contents of that specific file as a JSON object. The function require is a node-specific function. You'll need it for every module. At node.js you can find a list of accepted Node modules. Some common ones include: Buffer, File System, HTTP, OS, Process, Query String, Stream, and Path. When you use Require, Node assumes what you're calling is a globla module. You can run ES6 on Node. You can export a single function or an object. 

One of the commonly used modules is Events. It is essentially the syntax you'll use for all of your Node eventListeners. Another common one is HTTP. You can use is to emulate a web server. 

Debugging
By using jshint on node you can see something like a chrome developer tool in git bash that tells you the issue 

Lessons on Syntax
ES6 allows you to override concatenation using `` and ${} to call the argument. For exmaple:
console.log(`Time remaining is ${timeRem}`);
You can also simplify function expressions by using arrow notation, so instead of calling a function(arg) {} you can simply say (arg) => {}

Classes
You can create "classes" in Node and store your data in there. When you have a function nested in a class you do not need to use the word "function" to call it correctly. It a) becomes a method and b) does not need 'function' to define it correctly. By adding the syntax extends ClassName you can call the Node class. Classes start with an upper case letter. 

RESTful stands for Representational State Transfer. Below is information regarding setting up a RESTful API using Node.

You can use HTTP or HTTPS, the "S" means it's through a secure channel
You need API referenced somewhere in your URL, either before or after the .com

HTTP Methods:
1. GET - needs a file path and 2 arguments like app.get('/', (req, res) => {
	res.send("Do you believe in a thing called love?") }
2. POST - also needs a file path and 2 arguments like app.post('/', (req, res) => {}
3. DELETE - needs file path and 2 arguments
4. PUT - needs file path and 2 arguments
Use Postman to see your code in action

Other common calls:
app.listen calls a port and that'll be your browser call
app.query finds data using URL data, like in API calls

An environmenet variable is a variable in an environment in which a process runs	
Never trust user input - always use input validation like if (!input.name || input.name < 3) etc.
JOI is a node package that makes user validation really easy to manipulate



