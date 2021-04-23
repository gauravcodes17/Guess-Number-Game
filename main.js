var msg1 = document.getElementById("message1");
var msg2 = document.getElementById("message2");
var msg3 = document.getElementById("message3");
var btn = document.getElementById("my_btn");
var first_input = document.getElementById("guess1");
var scnd_input = document.getElementById("guess3");

first_input.disabled = true;
scnd_input.disabled = true;

var def1 = Math.floor(Math.random()*100) + 1;
document.getElementById("guess1").value = def1;
var def2 = Math.floor(Math.random()*100) + 1;
document.getElementById("guess3").value = def2;

var answer = Math.floor(Math.random()*100) + 1;
var no_of_guess = 0;
var guesses_numes = [];

function play(){
    var input = document.getElementById("guess2");
    var btn2 = document.getElementById("my_btn2");
    var user_guess = document.getElementById("guess2").value;
    if(user_guess < 1 || user_guess > 100){
        alert("Please Enter a Number Between 1 - 100");
    }
    else{
        guesses_numes.push(user_guess);
        no_of_guess += 1;

        if(user_guess < answer){
            msg1.style.color = "red";
            msg1.textContent = "Your Guess is too low";
            msg2.textContent = "No of Guesses : " + no_of_guess;
            msg3.textContent = "Guesses Numbers are : " + guesses_numes;
        }else if(user_guess > answer){
            msg1.style.color = "red";
            msg1.textContent = "Your Guess is too high";
            msg2.textContent = "No Of Guesses : " + no_of_guess;
            msg3.textContent = "Guesses Numbers are : " + guesses_numes;
        }else if(user_guess == answer){
            msg1.style.color = "green";
            msg1.textContent = "Yippe You guess Right. Good Job Buddy ! ";
            msg2.textContent = "Total No Of Guesses : " + no_of_guess;
            msg3.textContent = "Guesses Numbers are : " + guesses_numes;
            btn.disabled = true;
            btn.style.display = "none";
            input.disabled = true;
            input.style.color = "white";
            input.style.borderColor = "green";
            input.style.backgroundColor = "green";
            btn2.style.display = "block";
        }
    }
}

function playAgain(){
    location.reload();
}