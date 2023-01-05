//This function returns a random value between min-1 and max.
//EXAMPLE 1: to get a random number between 0 and 100, you'd use "getRandomInt(1, 101)"
//EXAMPLE 2: to flip a coin (return either 1 or 2), use "getRandomInt(1, 3)"

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
