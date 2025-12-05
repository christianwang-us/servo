let servo_pos = randint(110, 100)
basic.forever(function () {
    servos.P0.setAngle(180)
    basic.pause(1000)
    servos.P0.setAngle(0)
    basic.pause(1000)
})
