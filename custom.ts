/**
 * Animation Blocks
 */
//% weight=100 color=#5eff00 icon=""
namespace animations {
    /**
     * Makes the LEDs on the Microbit Grow!
     * @param ms How Many Milliseconds In Between Growing Stages
     */
    //% block="grow with $ms milliseconds between growing stages"
    export function grow(ms:number): void {
        basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
        basic.pause(ms)
        basic.showLeds(`
        # # . . .
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
        basic.pause(ms)
        basic.showLeds(`
        # # # . .
        # # . . .
        # . . . .
        . . . . .
        . . . . .
        `)
        basic.pause(ms)
        basic.showLeds(`
        # # # # .
        # # # . .
        # # . . .
        # . . . .
        . . . . .
        `)
        basic.pause(ms)
        basic.showLeds(`
        # # # # #
        # # # # .
        # # # . .
        # # . . .
        # . . . .
        `)
        basic.pause(ms)
        basic.showLeds(`
        # # # # #
        # # # # #
        # # # # .
        # # # . .
        # # . . .
        `)
        basic.pause(ms)
        basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # .
        # # # . .
        `)
        basic.pause(ms)
        basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # .
        `)
        basic.pause(ms)
        basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    }   
} 