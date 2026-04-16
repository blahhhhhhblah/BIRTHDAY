let count = 0;
const playlist = [document.getElementById("Happy_death"), 
    document.getElementById("LAF"),
    document.getElementById("GE"),
    document.getElementById("XROOM"),
    document.getElementById("ICU")];
function play1(){
    if (count == 0){
        //song = document.getElementById("Happy_death");
        song = document.getElementById("romantic");
        song.play();
    }
    if (count == 1){
        song = document.getElementById("bsinging");
        song.play();
        
    }
    if (count == 2){
        song = document.getElementById("love");
        song.play();
    }
    if (count == 3){
        chainaudio(playlist);

    }

}

function chainaudio(audios, index = 0){
    if (index >= audios.length) return;
    
    const currentAudio = audios[index];
    currentAudio.play();
    
    currentAudio.onended = function() {
        chainaudio(audios, index + 1); // Play next
    };

}
const correct = document.getElementById("correct");
const qtext = document.getElementById("Question");

function checkbutton(elem){
    //tick = document.getElementsById("Ding");
    //xx = document.getElementById("X");
    if (count == 0){
        if (elem.id == "choice1"){
            correct.textContent = "CORRECT";
            count++;
            document.getElementById("Ding").play();
            qtext.textContent = "What is the 100% authentic Chinese man singing? (press button above again)";
            document.getElementById("choice3").textContent = "好想你";
            document.getElementById("choice1").textContent = "something cooked";
            document.getElementById("choice2").textContent = "你是傻逼";
            
        }
        if (elem.id == "choice2"){
            correct.textContent = "WRONG 你是 cooked";
            document.getElementById("X").play();

        }
        if (elem.id == "choice3"){
            correct.textContent = "WRONG 你是 cooked";
            document.getElementById("X").play();

        }
    }
    else if (count == 1){
        if (elem.id == "choice1"){
            correct.textContent = "WRONG 你是 cooked";
            document.getElementById("X").play();

        }
        if (elem.id == "choice2"){
            correct.textContent = "WRONG 你是 cooked";
            document.getElementById("X").play();

        }
        if (elem.id == "choice3"){
            correct.textContent = "CORRECT";
            document.getElementById("Ding").play();
            count++;
            qtext.textContent = "What is the stone hashira saying?";
            document.getElementById("choice3").textContent = "闭嘴胖胖";
            document.getElementById("choice1").textContent = "操你妈妈";
            document.getElementById("choice2").textContent = "我好爱你";
        }
    }
    else if (count == 2){
        if (elem.id == "choice1"){
            correct.textContent = "WRONG 你是 cooked";
            document.getElementById("X").play();

        }
        if (elem.id == "choice2"){
            correct.style.display = 'none';
            document.getElementById("Ding").play();
            count++;
            document.getElementById("exclaim").textContent = "WITH XDINARY HEORES?!";
            qtext.textContent = "ENJOY THE MINI HOME CONCERT 宝宝!";
            qtext.style.fontSize = "3em";
            
            document.getElementById("choice3").style.display = 'none';
            document.getElementById("choice1").style.display ='none';
            document.getElementById("choice2").style.display = 'none';
            document.getElementById("XH").style.display = 'inline-block';
            document.getElementById("crowd1").style.display = 'inline-block';
            document.getElementById("crowd2").style.display = 'inline-block';
            document.getElementById("crowd3").style.display = 'inline-block';

     

        }
        if (elem.id == "choice3"){
            correct.textContent = "WRONG 你是 cooked";
            document.getElementById("X").play();
        }
    }

}