/**
 * Animation Blocks
 */
//% weight=100 color=#0000ff icon="\uf0a3"
namespace animations {
    /**
     * Makes the LEDs on the Microbit Grow!
     * @param ms How Many Milliseconds In Between Growing Stages
     */
    //% block="grow with $ms milliseconds between growing stages"
    //% ms.shadow=timePicker
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
    /**
     * Makes the LEDs on the Microbit Shrink!
     * @param ms How Many Milliseconds In Between Shrinking Stages
     */
    //% block="shrink with $ms milliseconds between shrinking stages"
    //% ms.shadow=timePicker
    export function shrink(ms: number): void {
        basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
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
    # # # # .
    # # # . .
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
    # # # # .
    # # # . .
    # # . . .
    # . . . .
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
    # # # . .
    # # . . .
    # . . . .
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
    # . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
        basic.pause(ms)
        basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
    }
} 