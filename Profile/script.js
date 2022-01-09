
const saveProfile = document.getElementById("btn");

saveProfile.addEventListener("click", function () {

    let firstName = document.getElementById("nameInput").value;
    let age = document.getElementById("ageInput").value;
    let colour = document.getElementById("colourInput").value;
    let dog = document.getElementById("dogInput").value;

    document.getElementById("myName").innerHTML = " " + firstName;
    document.getElementById("myAge").innerHTML = " " + age;
    document.getElementById("myColour").innerHTML = " " + colour;
    document.getElementById("myDog").innerHTML = " " + dog;

})
