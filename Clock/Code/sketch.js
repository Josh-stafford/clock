function setup(){
    createCanvas(window.innerWidth, window.innerHeight);
}

function draw(){
    translate(width/2, height/2-30);
    rotate(-PI/2);
    background(127, 127, 126);
    var sc = second();
    var mn = minute();
    var hr = hour();

    if(mn.toString().length <2){
      mn = "0" + mn;
    }

    if(sc.toString().length <2){
      sc = "0" + sc;
    }

    if(hr.toString().length <2){
      hr = "0" + hr;
    }

    noFill();
    strokeWeight(4);
    stroke(255, 255, 255);
    let scAngle = map(sc, 0, 60, 0, 2*PI);
    arc(0, 0, 400, 400, 0, scAngle);

    stroke(190, 190, 190);
    let mnAngle = map(mn, 0, 60, 0, 2*PI);
    arc(0, 0, 370, 370, 0, mnAngle);

    stroke(100, 100, 100);
    let hrAngle = map(hr%12, 0, 12, 0, 2*PI);
    arc(0, 0, 340, 340, 0, hrAngle)

    push();
    rotate(PI/2)
    strokeWeight(1);
    stroke(200, 200, 200);
    textAlign(CENTER);
    textSize(50);
    text(hr + " : " + mn + " : " + sc, 0, 0);
    pop();

    function windowResized() {
      resizeCanvas(windowWidth, windowHeight);
    }

//     push();
//     rotate(scAngle);
//     stroke(255, 255, 255);
//     line(0, 0, 120, 0);
//     pop();

//     push();
//     rotate(mnAngle);
//     stroke(190, 190, 190);
//     line(0, 0, 100, 0);
//     pop();

//     push();
//     rotate(hrAngle);
//     stroke(100, 100, 100);
//     line(0, 0, 50, 0);
//     pop();





}
