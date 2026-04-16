const wrong = document.getElementById("yo");

function checking(){
    let counter = 0;
    const checkname = document.getElementById("China").value;
    const checkdog = document.getElementById("dog").value;
    const checkband = document.getElementById("band").value;
    const sadness = [];
    const happy = [];
    if (checkname.trim() == "张和美"){
        counter++;
    }
    if (checkdog.trim().toUpperCase() == "BEAR"){
        counter++;
    }
    if (checkband.trim().toUpperCase() == "XDINARY HEROES"){
        counter++;
    }
    if (counter == 3){
        wrong.textContent = "YIPPPEE ITS YOUR BIRTHDAYYYYY 亲爱的!!";
        sadness.push(`<img src="pictures/cooked.jpg" style = "width: 200px;">`);
        sadness.push(`<img src="pictures/yummy.jpg" style = "width: 200px;">`);
        happy.push(`<img src="pictures/hehe.jpg" style = "width: 200px;">`);
        happy.push(`<img src="pictures/beautiful.jpg" style = "width: 200px;">`);
        document.getElementById("sadpics").innerHTML = sadness.join('');
        document.getElementById("happypics").innerHTML = happy.join('');

    }
    else{
        wrong.textContent = "OH HELLLL NAHHH it is NOT your birthday wo caoooo :(";
        for (let i = 0; i < 4; i++){
            sadness.push(`<img src="pictures/sad.png" style = "width: 100px;">`);
            document.getElementById("sadpics").innerHTML = sadness.join('');
        }
        document.getElementById("happypics").innerHTML = happy.join('');

    
    }
}