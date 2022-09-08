//This is how to add animations to an aircraft part:
//"n1" is the id of the part in the array of "geofs.aircraft.instance.definition.parts"
//"n2" is the id of the animation in the array of animations for the part.
//Please make sure that "n2" is 1 more than the id of the last animation in the array.
//Insert any valid type or number into the empty spaces (and keep the quotation marks)
//Use the (outdated) documentation for CCs (geo-fs.com/backend/aircraft/doc.html)
//or flight.setAnimationValues (find this in my copy of the GeoFS source code)

//For rotations on the X axis
  geofs.aircraft.instance.definition.parts[n1].animations[n2] = {};
	geofs.aircraft.instance.definition.parts[n1].animations[n2].type = "";
	geofs.aircraft.instance.definition.parts[n1].animations[n2].axis = "X";
	geofs.aircraft.instance.definition.parts[n1].animations[n2].value = "";
	geofs.aircraft.instance.definition.parts[n1].animations[n2].ratio = ;
	geofs.aircraft.instance.definition.parts[n1].animations[n2].currentValue = null;
	geofs.aircraft.instance.definition.parts[n1].animations[n2].rotationMethod = function(a) {
      this._rotation = M33.rotationX(this._rotation, a)
   };

//For rotations on the Y axis
  geofs.aircraft.instance.definition.parts[n1].animations[n2] = {};
	geofs.aircraft.instance.definition.parts[n1].animations[n2].type = "";
	geofs.aircraft.instance.definition.parts[n1].animations[n2].axis = "Y";
	geofs.aircraft.instance.definition.parts[n1].animations[n2].value = "";
	geofs.aircraft.instance.definition.parts[n1].animations[n2].ratio = ;
	geofs.aircraft.instance.definition.parts[n1].animations[n2].currentValue = null;
	geofs.aircraft.instance.definition.parts[n1].animations[n2].rotationMethod = function(a) {
      this._rotation = M33.rotationY(this._rotation, a)
   };

//For rotations on the Z axis
  geofs.aircraft.instance.definition.parts[n1].animations[n2] = {};
	geofs.aircraft.instance.definition.parts[n1].animations[n2].type = "";
	geofs.aircraft.instance.definition.parts[n1].animations[n2].axis = "Z";
	geofs.aircraft.instance.definition.parts[n1].animations[n2].value = "";
	geofs.aircraft.instance.definition.parts[n1].animations[n2].ratio = ;
	geofs.aircraft.instance.definition.parts[n1].animations[n2].currentValue = null;
	geofs.aircraft.instance.definition.parts[n1].animations[n2].rotationMethod = function(a) {
      this._rotation = M33.rotationZ(this._rotation, a)
   };
