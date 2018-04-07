var circle = {
    radius:1,
    calcCirc: function () {
        return (math.PI * d);
    },
    calcArea: function () {
        return (math.PI * radius * radius);
    },
    calcVol: function () {
        ((4/3)*math.PI*radius*radius*radius);
    },
};

var userResponse = document.getElementById("circle");

if (circle<0) {
    alert("Please enter a value for the radius that is GREATER THAN 0!");
} else {
    circle=radius;
}

userResponse.addEventListener("click");

document.getElementById("results").innerHTML;



var message = "The circumference of a circle with radius" + circle + "is" + calcCirc + "." + "The area of a circle with radius" + circle + "is" + calcArea + "." + "The volume of a circle with radius" + circle + "is" + calcVol + ".";




