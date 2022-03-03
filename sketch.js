var player1, player2
var edges
var powerUp1, powerUp2, powerUp3, speed, size, coin
var powerUp1Group, powerUp2Group, powerUp3Group
var sizeW = 0
var speedH = 0
var p3 = 0

function preload(){
    speed = loadImage("speed.img.jpg")
    size = loadImage("increase.webp")
    coin = loadImage("coinImg.jpg")
}

function setup(){
    createCanvas(1525,750)
    player1 = createSprite(random(10,width-80),random(10,height-80),50,50)
    player1.shapeColor = "gold"
    // player1.velocityX = random(-5,5)
    // player1.velocityY = random(-5,5)
   
    player2 = createSprite(random(50,width-10),random(50,height-10),50,50)
    player2.shapeColor = "blue"
    //player2.velocityX = random(-5,5)
    //player2.velocityY = random(-5,5)

    powerUp1Group = createGroup()
    powerUp2Group = createGroup()
    powerUp3Group = createGroup()

    edges = createEdgeSprites()

    
}   

function draw(){
    background("lightBlue")

    

    if(keyDown(UP_ARROW)){
        player1.y -= 4
        player2.y += 4
    }

    if(keyDown(DOWN_ARROW)){
        player1.y += 4
        player2.y -= 4
    }
    
    if(keyDown(RIGHT_ARROW)){
        player1.x += 4
        player2.x -= 4
    }

    if(keyDown(LEFT_ARROW)){
        player1.x -= 4
        player2.x += 4
    }

    if(player1.width === 100||player1.height === 100||player1.p3 === 3){
        text("Player1 has won. Well done",width/2-100,height/2+100)
        
    }

    if(player2.width === 100||player2.height === 100||player2.p3 === 3){
        text("Player2 has won. Well done",width/2-100,height/2+100)
        
    }


    spawnPowerUp1()
    spawnPowerUp2()
    spawnPowerUp3()
    
    if(powerUp1Group.isTouching(player2)){
        player2.width += 5
        powerUp1.destroy()
        sizeW += 5
    }

    if(powerUp1Group.isTouching(player1)){
        player1.width += 5
        powerUp1.destroy()
        sizeW += 5
    }

    if(powerUp2Group.isTouching(player2)){
        player2.height += 5
        powerUp2.destroy()
        speedH += 5
    }
    

    if(powerUp2Group.isTouching(player1)){
        player1.height += 5
        powerUp2.destroy()
        speedH += 5
    }

    if(powerUp3Group.isTouching(player1)){
        powerUp3.destroy()
        player2.velocityX = 0
        player2.velocityY = 0
        p3 += 1
        
    }

    if(powerUp3Group.isTouching(player2)){
        powerUp3.destroy()
        player2.velocityX = 0
        player2.velocityY = 0
        p3 += 1
    }
    
    player1.bounceOff(edges)
    player2.bounceOff(edges)
    text("Size: "+size,width-200,50)
    text("Speed: "+speed,width-200,70)
    text("P3: "+p3,width-200,90)
    drawSprites()


    if(player2.isTouching(player1)){
        player1.destroy()
        player2.velocityX = 0
        player2.velocityY = 0
    }
    }

function spawnPowerUp1(){
    if(frameCount %200===0){
        powerUp1 = createSprite(random(10,width-80),random(10,height-80),50,50)
        powerUp1.addImage(speed)
        powerUp1.scale = 0.25
        powerUp1.lifetime = 170
        powerUp1Group.add(powerUp1)
    }
}

function spawnPowerUp2(){
    if(frameCount %200===0){
        powerUp2 = createSprite(random(10,width-80),random(10,height-80),50,50)
        powerUp2.addImage(size)
        powerUp2.scale = 0.25
        powerUp2.lifetime = 170
        powerUp2Group.add(powerUp2)
    }
}

function spawnPowerUp3(){
    if(frameCount %150===0){
        powerUp3 = createSprite(random(10,width-80),random(10,height-80),50,50)
        powerUp3.addImage(coin)
        powerUp3.scale = 0.25
        powerUp3.lifetime = 200
        powerUp3Group.add(powerUp3)
    }
}