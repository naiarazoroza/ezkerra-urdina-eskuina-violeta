input.onButtonPressed(Button.A, function () {
    while (true) {
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBR, Color.BLUE)
        basic.pause(1000)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBR, Color.OFF)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.PINK)
        basic.pause(1000)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.OFF)
    }
})
DFRobotMaqueenPlus.I2CInit()
