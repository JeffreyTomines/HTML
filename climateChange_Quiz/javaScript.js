var amountCorrect = 0;
var percentCorrect = 0;
var i = 0;

function handleClick() {       
    for(var a = 1; a <= 12; a++) {
        var radios = document.getElementsByName('group'+a);
        for(var j = 0; j < radios.length; j++) {
            var radio = radios[j];
            if(radio.value == "true" && radio.checked) {
                amountCorrect++;
            }
        }
    }
    document.getElementById('' +i).style.display="none";
    document.getElementById('' +(i + 1)).style.display="inline";
    document.title='Thank You!';
};

function disp() {
    var dispCurrent = document.getElementById('' +i);
    var dispNext = document.getElementById('' +(i + 1));
    var title = 'Question ' +(i + 2);

    dispCurrent.style.display="none";
    dispNext.style.display="inline";
    document.title=title;

    i++;
};

function score() {
    if (amountCorrect >= 9) {
        document.getElementById('finalScore').style.backgroundColor = 'green';
        document.getElementById('message').innerHTML = 'Wow, you did an amazing job!';
        document.getElementById('retake').innerHTML = '<em><a href="index.html">retake the quiz!</a></em>';
        document.getElementById('finalpic').src="../images/smiley.png";
    }
    else {
        document.getElementById('finalScore').style.backgroundColor = 'red';
        document.getElementById('message').innerHTML = "Oh no, you didn't score very well.";
        document.getElementById('retake').innerHTML = '<em><a href="index.html">retake the quiz!</a></em>';
        document.getElementById('finalpic').src="../images/sad.png";
    }

    var percentCorrect = Math.round((amountCorrect / 12) * 100);
    
    document.getElementById('mark').innerHTML='You achieved a score of '+percentCorrect+'% (' +amountCorrect+ ' out of 12)';
    
};