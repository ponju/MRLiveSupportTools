import { animate, trigger } from '@angular/animations';

import { animateChild } from '@angular/animations';
import { state } from '@angular/animations';
import { style } from '@angular/animations';
import { transition } from '@angular/animations';

export function horizontalSlide(entryPoint: string, entryDuration: number) {
    let visibleStyle=style({transform:"translateX(0)"})
    let invisibleStyle=style({transform:`translateX(${entryPoint})`})
    return [
        state('true',visibleStyle),
        state('false',invisibleStyle),
        transition(
            'false<=>true', animate(entryDuration)
        ),
        state('visible',visibleStyle),
        state('hidden',invisibleStyle),
        transition(
            'visible<=>hidden', animate(entryDuration)
        )
    ]
}

export const SLIDE_FROM_LEFT=horizontalSlide("-150%",250);
export const SLIDE_FROM_RIGHT=horizontalSlide("150%",250);


export function verticalSlide(entryPoint: string, entryDuration: number) {
    let visibleStyle=style({transform:"translateY(0)"})
    let invisibleStyle=style({transform:`translateY(${entryPoint})`})
    return [
        state('true',visibleStyle),
        state('false',invisibleStyle),
        transition(
            'true<=>false', animate(entryDuration)
        ),
        state('visible',visibleStyle),
        state('hidden',invisibleStyle),
        transition(
            'visible<=>hidden', animate(entryDuration)
        )
    ]
}

export const SLIDE_FROM_TOP=verticalSlide("-150%",250);
export const SLIDE_FROM_BOTTOM=verticalSlide("150%",250);