var playing = false;
var score;
var action;
var timeremaining;
var correctAnswer;
//if we click start / rest
document.getElementById("startreset").onclick = function(){
    if(playing == true) {
        location.reload();
    }
    else{
        //change mode to playing
        playing = true;
        //set score to 0
        score = 0;
        document.getElementById("scorevalue").innerHTML=score;

        //show time remaining
        //show("timeremaining");
        timeremaining = 60;
        document.getElementById("timeremaining").style.display="block";
        document.getElementById("timeremainingvalue").innerHTML= timeremaining;

        //hide game over box
        hide("gameover");

        //change button to rest game
        document.getElementById("startreset").innerHTML="Reset Game";

        //start countdown
        startCountdown();

        //generate question
        generateQA();

    }
}
    //if we are playing
        //reload page
    //if we not playing
        //set score to 0
        //show countdown box
        //reduce the time by one sec in loops
            //timeleft shown?
                //yes->continue
                //no->gameover
        //change the button to reset
        //generate new q&a


for(i=1;i<5;i++){
    document.getElementById("box-"+i).onclick= function()        {
        //check if we are playing
        if (playing == true){
            if(this.innerHTML == correctAnswer){
                //correct answer
                score++;
                document.getElementById("scorevalue").innerHTML = score;
                // hide wrong box
                hide("wrong");
                show("correct");
                setTimeout(function(){
                        hide("correct");
                },1000);  
                generateQA();
            }
            
            else{
                //wrong answer
                hide("correct");
                show("wrong");
                setTimeout(function(){
                        hide("wrong");
                },1000);  
            }
        }
    }
}
//if we click on answer box
    //if we are playing
        //correct?
            //yes
                //increase score by 1
                //show correct box for 1 sec
                //generate new Q&A
            //no
                //show try again box for 1sec

function startCountdown(){
    action = setInterval(function(){
        timeremaining -=1;
document.getElementById("timeremainingvalue").innerHTML = timeremaining;
if(timeremaining==0){
    stopCountdown();
    show("gameover");
    document.getElementById("gameover").innerHTML="<p> Game Over! your score is "+score+"</p>";
    hide("timeremaining");
    hide("correct");
    hide("wrong");
    playing = false;
    document.getElementById("startreset").innerHTML="Start Game";
}
    },1000);
}
//Stop counter
function stopCountdown(){
    clearInterval(action);
}
// Hide a element
function hide(Id){
    document.getElementById(Id).style.display="none";
}
// show a element
function show(Id){
    document.getElementById(Id).style.display="block";
}
//generate question and multiple answers
function generateQA(){
    var x = 1+Math.round(9*Math.random());
    var y = 1+Math.round(9*Math.random());
    correctAnswer = x*y;

document.getElementById("question").innerHTML = x+"x"+y;
var correctPosition = 1 + Math.round(3*Math.random());
document.getElementById("box-"+correctPosition).innerHTML=correctAnswer;// fill with correct answer
// fill other box with wrong answers
var answers = [correctAnswer];
for(i=1;i<5;i++){
    if(i != correctPosition){
        var wrongAnswer;
        do{
            wrongAnswer = (1+Math.round(9*Math.random()))*(1+Math.round(9*Math.random()));
        } while(answers.indexOf(wrongAnswer)>-1)
        document.getElementById("box-"+i).innerHTML=wrongAnswer;
        answers.push(wrongAnswer);
    }
}

}