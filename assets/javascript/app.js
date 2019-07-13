var question = $("#question");
// var counter = $("#counter");
var choice = $("#choice");
var choiceA = $("#A");
var choiceB = $("#B");
var choiceC = $("#C");
var choiceD = $("#D");



window.onload = function() {
    $("#start").on("click", start);
    $("#done").on("click", stop);
    $("#reset").on("click", reset);
  };

var intervalId;
var clockRunning = false;
var time = 30;
var round = 0;
var incorrect = 0;
var correct = 0;
var quest = 0;
var questions = [];


function reset() {
time = 0;
// DONE: Change the "display" div to "00:00."
$("#display").text("00:30");
}

function start() {
    console.log("start")
    // DONE: Use setInterval to start the count here and set the clock to running.
    if (!clockRunning) {
        intervalId = setInterval(count, 1000);
        clockRunning = true;
    }
    console.log(questions[round])
    question.append(questions[round].question)
    choiceA.append(questions[round].choiceA)
    choiceB.append(questions[round].choiceB)
    choiceC.append(questions[round].choiceC)
    choiceD.append(questions[round].choiceD)

}
function displayQuestions() {
    if (!questions.includes()) {
        $("#question").text(questions[round].question);

            for (let i = 0; i < questions[round].length; i++) {
                $('#question' + i).html(questions[round].questions[i]);
                if (i === 0) {
                    $('#choices' + i).val(1);
                } else {
                    $('#choices' + i).val(0);
                }
            }
        }}
        function checkAnswer(answer, questions) {
            if (answer == questions[correct].a) {
              questions[correct].correct = 1;
              score.push(questions[correct].correct);
              
            } else {
              score.push(questions[correct].correct);
            }
        }
        

function stop() {
    // DONE: Use clearInterval to stop the count here and set the clock to not be running.
    clearInterval(intervalId);
    clockRunning = false;
}
function count() {
    // DONE: increment time by 1, remember we cant use "this" here.
    time--;
    // DONE: Get the current time, pass that into the timeConverter function,
    //       and save the result in a variable.
    var converted = timeConverter(time);
    console.log(converted);

    // DONE: Use the variable we just created to show the converted time in the "display" div.
    $("#display").text(converted);
}


function timeConverter(t) {
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if (minutes === 0) {
        minutes = "00";
    }
    else if (minutes < 10) {
        minutes = "0" + minutes;
    }
    return minutes + ":" + seconds;
}

function checkAnswer(params) {
    console.log(params)
}



////////////////////////////////////////////////////////////////
// var start = $("#start");


var questions = [
    {
        question:"What is the largest island in Mexico?",
        choiceA: "Marietas Island",
        choiceB: "Espiritu Santo Island",
        choiceC: "Tiburon Island",
        choiceD: "Carmen Island",
        correct: "C",
    },
    {
        question: "What is the largest state in Mexico?",
        choiceA: "Jalisco",
        choiceB: "Sonora",
        choiceC: "Veracruz",
        choiceD: "Chihuahua",
        correct: "D", 
    },
    {
        question: "When is the Independence Day in Mexico",
        choiceA: "July 4th",
        choiceB: "November 1st",
        choiceC: "September 16th",
        choiceD: "September 21st",
        correct: "C", 
    },
    {
        question: "What is the population of Mexico?",
        choiceA: "129 million",
        choiceB: "112 million",
        choiceC: "240 million",
        choiceD: "289 million",
        correct: "A", 
    },
]

