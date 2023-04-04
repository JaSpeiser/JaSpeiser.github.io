
function datetime() {
    let date = new Date();
    document.getElementById("time").innerHTML = ("It is currently " + date.toLocaleTimeString() + " on " + date.toDateString());
}

function sayhello(name, mood) {
    let uName = document.getElementById("name").value;
    let uMood = document.getElementById("mood").value;
    document.getElementById("greeting").innerHTML = ("Hello " + uName + "! Glad to hear you're feeling " + uMood + "!");
}

function badmath(num1, num2) {
    let firstnum = document.getElementById("num1").value;
    let secondnum = document.getElementById("num2").value;
    document.getElementById("addpoorly").innerHTML = ("The Jargon Seal says: " + firstnum + " + " + secondnum + " = " + firstnum + "" + secondnum);
}

function rolldie() {
    let min = Math.ceil(1);
    let max = Math.floor(6);
    document.getElementById("roll").innerHTML = "Jargon Seal rolled a " + (Math.floor(Math.random() * (max - min + 1) + min));
}

function gradetests(test1, test2, test3, test4) {
    var test1 = parseInt(document.getElementById("test1").value);
    var test2 = parseInt(document.getElementById("test2").value);
    var test3 = parseInt(document.getElementById("test3").value);
    var test4 = parseInt(document.getElementById("test4").value);
    total = parseInt(test1 + test2 + test3 + test4);
    testavg = parseInt(total/4);

    if ((test1 > 100 || test1 < 0 ) || (test2 > 100 || test2 < 0 ) || (test3 > 100 || test3 < 0 ) || (test4 > 100 || test4 < 0 )) {
        document.getElementById("grade").innerHTML = ("You have entered something incorrectly. Grades can't be lower than 0 or higher than 100. Jargon Seal is dissapointed.");
    } else if (testavg >= 90) {
        document.getElementById("grade").innerHTML = ("Jargon Seal calculated your grade to be " + testavg + ", which would be a A, but Jargon Seal deducted 10 points! You now have a B.");
    } else if (testavg < 90 && testavg >= 80) {
        document.getElementById("grade").innerHTML = ("Jargon Seal calculated your grade to be " + testavg + ", which would be a B, but Jargon Seal deducted 10 points! You now have a C.");
    } else if (testavg < 80 && testavg >= 70) {
        document.getElementById("grade").innerHTML = ("Jargon Seal calculated your grade to be " + testavg + ", which would be a C, but Jargon Seal deducted 10 points! You now have a D.");
    } else if (testavg < 70 && testavg >= 60) {
        document.getElementById("grade").innerHTML = ("Jargon Seal calculated your grade to be " + testavg + ", which would be a D, but Jargon Seal deducted 10 points! You now have a F.");
    } else if (testavg < 60) {
        document.getElementById("grade").innerHTML = ("Jargon Seal calculated your grade to be " + testavg + ", which would be a F, but Jargon Seal deducted 10 points but it didn't matter because you already failed.");
    } else {
        document.getElementById("grade").innerHTML = ("Something went wrong");
    }

}

function hotel(triv) {
    var triv = document.getElementById("triv").value;

    if (triv.toLowerCase() == "trivago") {
        document.getElementById("hotel").innerHTML = ("Jargon Seal is pleased (:");
    } else {
        document.getElementById("hotel").innerHTML = ("Jargon Seal is displeased ):");
    }
}

function secretnum(guess) {
    var guess = document.getElementById("guess").value;
    if (guess < 74) {
        document.getElementById("secretnum").innerHTML = ("Too low!");
    } else if (guess > 74) {
        document.getElementById("secretnum").innerHTML = ("Too high!");
    } else if (guess == 74) {
        document.getElementById("secretnum").innerHTML = ("You got it! The secret number was 74.");
    } else {
        document.getElementById("secretnum").innerHTML = ("No idea what happened");
    }
}