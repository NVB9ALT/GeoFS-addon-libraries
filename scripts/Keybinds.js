//This is a generic codeset for making stuff happen when you press certain keys.
//A keycode is a numerical value assigned to each key on the keyboard.
//You can use tools like "https://www.toptal.com/developers/keycode" to find the keycode of a given key.
//You can also swap "keydown" for "keyup" to have it execute the code when the key is not being pressed.

//sets geofs.debug.shiftIsTrue depending on whether the shift key is down
geofs.debug.shiftIsTrue = 0
document.addEventListener("keydown", function(e) {
   if (e.keyCode == 16 || e.keyCode == 13) {
geofs.debug.shiftIsTrue = 1
	}
	document.addEventListener("keyup", function(e) {
if (e.keyCode == 16 || e.keyCode == 13) {
   geofs.debug.shiftIsTrue = 0
}
	})
})

//executes if the specified key is being held down
document.addEventListener("keydown", function(e) {
	if (e.keyCode == /*keycode*/) {
//code here
  }
})

//executes if the specified key AND shift are held down
document.addEventListener("keydown", function(e) {
	if (e.keyCode == /*keycode*/ && geofs.debug.shiftIsTrue == 1) {
//code here
  }
})
