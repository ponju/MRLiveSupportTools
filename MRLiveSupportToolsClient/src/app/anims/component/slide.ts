import { animate, trigger } from '@angular/animations';

import { animateChild } from '@angular/animations';
import { state } from '@angular/animations';
import { style } from '@angular/animations';
import { transition } from '@angular/animations';

export function horizontalSlide(entryPoint: string, entryDuration: number) {
    return [
        transition(
            ":enter", [
            style({ transform: `translateX(${entryPoint})` }),
            animate(entryDuration, style({ transform: "translateX(0)" })),
            animateChild()
        ]),
        transition(
            ":leave", [
            animate(entryDuration, style({ transform: `translateX(${entryPoint})` }),
            ),
            animateChild()
        ]),
        transition(
            'false<=>true', animate(entryDuration)
        )
    ]
}

export const SLIDE_FROM_LEFT=horizontalSlide("-100%",250);
export const SLIDE_FROM_RIGHT=horizontalSlide("100%",250);

export function verticalSlide(entryPoint: string, entryDuration: number) {
    return [
        transition(
            ":enter", [
            style({ transform: `translateY(${entryPoint})` }),
            animate(entryDuration, style({ transform: "translateY(0)" })),
            animateChild()
        ]),
        transition(
            ":leave", [
            animate(entryDuration, style({ transform: `translateY(${entryPoint})`}),
            ),
            animateChild()
        ]),
        transition(
            'false<=>true', animate("1s")
        )
    ]
}
