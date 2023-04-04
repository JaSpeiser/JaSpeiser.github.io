
function prm() {
    do {
        var input = prompt("The Jargon Seal would like to know your number! (Number must be between -10 and 10 and cannot be 0)");
    } while (isNaN(input) || (input < -10.4 || input > 10.4) || input == 0)
    document.getElementById("para").innerHTML = getShape(validateEntry(input));
}

function validateEntry(entr) {
    if (entr < 0) {
        entr = entr * -1;
    }
    entr = Math.round(entr);
    return entr;
}

function getShape(numSides) {
    if (numSides == 1) {
        return ("A shape with " + numSides + " sides is called a henagon!")
    } else if (numSides == 2) {
        return ("A shape with " + numSides + " sides is called a digon!")
    } else if (numSides == 3) {
        return ("A shape with " + numSides + " sides is called a trigon!")
    } else if (numSides == 4) {
        return ("A shape with " + numSides + " sides is called a tetragon!")
    } else if (numSides == 5) {
        return ("A shape with " + numSides + " sides is called a pentagon!")
    } else if (numSides == 6) {
        return ("A shape with " + numSides + " sides is called a hexagon!")
    } else if (numSides == 7) {
        return ("A shape with " + numSides + " sides is called a heptagon!")
    } else if (numSides == 8) {
        return ("A shape with " + numSides + " sides is called a octagon!")
    } else if (numSides == 9) {
        return ("A shape with " + numSides + " sides is called a enneagon!")
    } else if (numSides == 10) {
        return ("A shape with " + numSides + " sides is called a decagon!")
    }
}