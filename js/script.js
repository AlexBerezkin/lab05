/*eslint-env browser*/

var miles, gallons, mpg, again = "y";

do {
    miles = parseFloat(window.prompt("Enter miles driven"));
    gallons = parseFloat(window.prompt("Enter size of tank in gallons"));
    if (!isNaN(miles) && miles > 0 && !isNaN(gallons) && gallons > 0) {
        mpg = miles / gallons;
        window.document.write("Miles per gallon: " + parseInt(mpg, 10) + "<br>");
    } else {
        window.alert("One or both entries are invalid!");
    }
    again = window.prompt("Repeat entries? (y/n)", "y");
} while (again === "y");1011