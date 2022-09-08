//Bookmarklet:
javascript:(() => {
//code here
})()

//Timeout:
//set N to a number of milliseconds
setTimeout(() => {
//code here
}, N)

//Interval (repeating code):
//The code will execute once every N milliseconds
//Set nameInterval to something relevant (like "ilsInterval")
nameInterval = setInterval(function(){
//code here
}, N)


//Array.forEach and Object.values():
//Use this for things like geofs.aircraft.instance.definition.parts (which is an array)
//or multiplayer.visibleUsers (which is an object that can be converted to an array)
//NOTE: for the code inside the "forEach" statement, use "e" to reference the parent array.
//so if "array" is "geofs.aircraft.instance.definition.parts", you can use "console.log(e.name)" to log
//the name of each part in the console.

//Set "array" to the relevant array (like "geofs.aircraft.instance.definition.parts")
array.forEach(function(e){
//code here will be executed for everything in the array,
//so try and use "if(condition){code}" statements to filter out unwanted items in the array
})

//Object.values() will convert the input object in the parentheses to an array, which can then be parsed by a forEach statement.
//This is useful if you want to do an action for a large number of items in an object, but don't want to reference each one
//especially if the number of items in the object is variable.
//Set "object" to the relevant object (like "multiplayer.visibleUsers")
Object.values(object).forEach(function(e){
//code here will be executed for every item in the object,
//so try and use "if(condition){code}" statements to filter out unwanted items
})
