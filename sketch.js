function setup() {
  createCanvas(windowWidth,windowHeight);
  //angleMode可轉換為角度
  angleMode(DEGREES)
  mic =new p5.AudioIn();
  mic.start();
}

function draw() {
  background(220);
  textSize(40)//文字大小
  text("X："+mouseX+"  Y："+mouseY,50,50)//在這個畫布中產生文字(滑鼠在x軸y軸的位置)在(50,50)
  var micLevel =mic.getLevel();
  console.log(micLevel)
  
  //push:將中心設定在translate處,也就是將圓心一到畫布中心
  //pop:將畫布中心移回左上角之位置
  push()
    translate(width/2,height/2)
    ellipse(0,0,400)//x軸座標,y軸座標,直徑400
    ellipse(0,10,200,100)//豬鼻子外框
    if(mouseIsPressed)
    {
      ellipse(-40,10,60)//左豬鼻孔
      ellipse(40,10,20)//右豬鼻孔
    }
    else
    {
      ellipse(-40,10,30)//左豬鼻孔
      ellipse(40,10,30)//右豬鼻孔
    }
    ellipse(-90,-75,60)//左眼
    ellipse(90,-75,60)//右眼
    if(mouseIsPressed)
    {
      fill(0)
      arc(-90,-75,35,5,0,180)
      arc(90,-75,35,5,0,180)
    }
    else
    {
      //map:一個對應，滑鼠會移動的範圍就是0到畫布的寬度及高度,map的值會在-12到12間
      fill(0)
      ellipse(-90+map(mouseX,0,width,-11,11),-75+map(mouseY,0,height,-11,11),30)//左眼珠
      ellipse(90+map(mouseX,0,width,-11,11),-75+map(mouseY,0,height,-11,11),30)//右眼珠
    }

    //if(mouseIsPressed)
    //{
      //fill(255,0,0)
      //arc為一弧度
      //arc(0,85,100,125,0,180)
    //}
    //else
    //{
      //fill(255)
      //arc為一弧度
      //arc(0,85,100,5,0,180)
    //}
    fill(255,0,0)
    arc(0,85,100,125+micLevel*1000,0,180)
    fill(255)
    arc(0,84,100,5,0,180)
  pop()
  
}
