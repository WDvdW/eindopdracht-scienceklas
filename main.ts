let afstand = 0
let nummer = 0
let nummer2 = 1
music.setVolume(100)
basic.forever(function () {
    afstand = DFRobotMaqueenPlus.ultraSonic(PIN.P1, PIN.P2)
    if (afstand < 12) {
        nummer = randint(1, 2)
    }
})
basic.forever(function () {
    basic.showIcon(IconNames.Happy)
    if (nummer2 == 1) {
        music.playMelody("G A G A G A G A ", 150)
    }
})
basic.forever(function () {
    if (nummer == 1) {
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 50)
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CCW, 50)
        basic.pause(640)
        nummer = 0
    } else if (nummer == 2) {
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 50)
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CCW, 50)
        basic.pause(640)
        nummer = 0
    } else {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 50)
        basic.pause(340)
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
    }
})
basic.forever(function () {
    if (nummer2 == 1) {
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.RED)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBR, Color.BLUE)
        basic.pause(200)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.BLUE)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBR, Color.RED)
        basic.pause(200)
    }
})
