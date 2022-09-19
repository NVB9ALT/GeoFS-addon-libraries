//For functions that return heading values in radians like getBearing(), simply run that function as the input of this function.
//Example: radToHdg(getBearing(startLLA[0], startLLA[1], targetLLA[0], targetLLA[1]))

function radToHdg(n) {
  if (n < 0) {
return (n * -1) + 180
  } else {
return n
  }
};
