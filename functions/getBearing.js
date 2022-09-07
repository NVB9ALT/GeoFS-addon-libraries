//Credit to AriakimTaiyo for creating this function.

//getBearing takes four inputs: sourceLla[0], sourceLla[1], targetLla[0], targetLla[1], in that order.
//It will find the direction in radians from source to target.
//Radians are like degrees but in half. It ranges from 180 to -180, with 0 being straight ahead.
//For reference, degrees range from 0 to 360, with 0 and 360 being straight ahead.
//getBearing is used as a numerical value in equations.
//Here's a sample function that checks if a player is directly in front of you:
/*
Object.values(multiplayer.visibleUsers).forEach(function(e){
   if ((geofs.animation.values.heading - getBearing(e.referencePoint.lla[0], e.referencePoint.lla[1], geofs.aircraft.instance.llaLocation[0], geofs.aircraft.instance.llaLocation[1])) <= 5 && (geofs.animation.values.heading - getBearing(e.referencePoint.lla[0], e.referencePoint.lla[1], geofs.aircraft.instance.llaLocation[0], geofs.aircraft.instance.llaLocation[1])) >= -5) {
console.log("There's a player in front of you")
   } else {
console.log("The way is clear")
   }
})
*/

//Conversion functions
function radians(n) {
  return n * (Math.PI / 180);
};
function degrees(n) {
  return n * (180 / Math.PI);
};
//getBearing
function getBearing(a, b, c, d) {
  startLat = radians(c);
  startLong = radians(d);
  endLat = radians(a);
  endLong = radians(b); 
  let dLong = endLong - startLong; 
  let dPhi = Math.log(Math.tan(endLat / 2.0 + Math.PI / 4.0) / Math.tan(startLat / 2.0 + Math.PI / 4.0)); 
  if (Math.abs(dLong) > Math.PI) { 
    if (dLong > 0.0) 
	   dLong = -(2.0 * Math.PI - dLong); 
    else 
	   dLong = (2.0 * Math.PI + dLong); 
  } 
  return (degrees(Math.atan2(dLong, dPhi)) + 360.0) % 360.0;
};
