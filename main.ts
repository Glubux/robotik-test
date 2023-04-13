let angle = 0
input.onButtonPressed(Button.A, function () {
    maqueen.motorStop(maqueen.Motors.All)
    music.playTone(262, music.beat(BeatFraction.Whole))
    for (let index = 0; index < 4; index++) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
        basic.pause(500)
        turn()
    }
})
function turn () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 100)
    basic.pause(200)
    basic.pause(100)
    maqueen.motorStop(maqueen.Motors.All)
}
input.onButtonPressed(Button.B, function () {
    maqueen.motorStop(maqueen.Motors.All)
    angle = 255
    music.playTone(131, music.beat(BeatFraction.Whole))
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 100)
    for (let index = 0; index < 255; index++) {
        angle += -1
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, angle)
    }
})
