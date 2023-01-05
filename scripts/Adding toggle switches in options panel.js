//If you need to add a switch in the options panel to toggle some feature of your addon, this is how to do it.
//PLEASE NOTE: replace all "example"s with a word relevant to your addon.
//So if you're making condensation effects, "geofs.example" becomes "geofs.condensation", and "exampleVar" becomes "condensationVar".

//Toggle switch code
geofs.example = {};
let exampleVar = true;
geofs.example.update = function() {
  if (exampleVar == true) {
    exampleVar = false;
    toggleE.setAttribute("class", "mdl-switch mdl-js-switch mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-upgraded");
  } else {
    exampleVar = true;
    toggleE.setAttribute("class", "mdl-switch mdl-js-switch mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-upgraded is-checked")
  }
};
let elementSel = document.getElementsByClassName('geofs-preference-list')[0].getElementsByClassName('geofs-advanced')[0].getElementsByClassName('geofs-stopMousePropagation')[0];
let toggleE = document.createElement("label");
    toggleE.setAttribute("class", "mdl-switch mdl-js-switch mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-upgraded");
    toggleE.setAttribute("for", "example");
    toggleE.setAttribute("id", "example");
    toggleE.setAttribute("tabindex", "0");
    toggleE.setAttribute("dataUpgraded", ",MaterialSwitch,MaterialRipple");
    toggleE.innerHTML = '<input type="checkbox" id="condensation" class="mdl-switch__input" data-gespref="geofs.example.preference"><span class="mdl-switch__label">Example</span>';
elementSel.appendChild(toggleE);
toggleE.addEventListener("click", geofs.example.update);

//To have the toggle switch actually toggle your addon, simply place your implementation in an "if" statement like so:
function exampleFunction() {
   if (exampleVar == true) {
console.log("Addon on")
//code here
   } else {
console.log("Addon off")
//code here
   }
}
exampleInterval = setInterval(function(){exampleFunction()},1000)
