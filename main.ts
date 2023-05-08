input.onButtonPressed(Button.A, function () {
    if (input.temperature() >= 21) {
    	
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.B, function () {
    if (input.temperature() >= 21 && input.lightLevel() >= 100) {
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
    } else {
        if (input.temperature() <= 21 && input.lightLevel() <= 100) {
            basic.showLeds(`
                . # # # .
                # # # # #
                # # # # #
                . . # . .
                . # # . .
                `)
        }
    }
})
