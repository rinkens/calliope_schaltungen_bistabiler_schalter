let led_an = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        if (led_an == 1) {
            basic.setLedColor(0x000000)
            led_an = 0
        } else {
            basic.setLedColor(0x00ff00)
            led_an = 1
        }
        WaitUntilBlocks.waitUntilButtonReleased(Button.A)
    }
})
