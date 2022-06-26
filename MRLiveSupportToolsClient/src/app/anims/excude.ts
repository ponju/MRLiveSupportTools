import { AnimationTransitionMetadata, animate, animateChild, group, query, state, style, transition, trigger } from "@angular/animations";

export function generateExcludeTransitions(tags:string[],entry:number,leave:number){
    let rtn:AnimationTransitionMetadata[]=[]
    for (let i = 0; i < tags.length; i++) {
        const stateA = tags[i];
        for (let j = 0; j < tags.length; j++) {
            if(i==j) continue;
            const stateB = tags[j];
            rtn.push(generateExcludeTransition(stateA,stateB,entry,leave));
        }
    }
    rtn.push(generateWildcardTransition(entry,leave));
    return rtn;
}

function generateExcludeTransition(stateA:string,stateB:string,entry:number,leave:number){
    return transition(`${stateA}<=>${stateB}`,
    [
        query(':enter',[
            style({
                opacity:0,
                "transform":"translateY(0.1rem)",
            })
        ]),
        query(':leave',animateChild()),
        group([
            query(':leave',[
                animate(`${entry}ms ease-out`,style(
                    {
                        opacity:0,
                        "transform":"translateY:(-0.1rem)"
                    }))
            ]),
            query(':enter',[
                animate(`${entry}ms ease-out`,style(
                    {
                        opacity:1,
                        "transform":"translateY:(0)"
                    }))
            ]),
        ])
    ])
}

function generateWildcardTransition(entry:number,leave:number){
    return transition(`*<=>*`,
    [
        query(':enter',[
            style({
                opacity:0,
                "transform":"translateY(0.1rem)",
            })
        ]),
        query(':leave',animateChild()),
        group([
            query(':leave',[
                animate(`${entry}ms ease-out`,style(
                    {
                        opacity:0,
                        "transform":"translateY:(-0.1rem)"
                    }))
            ]),
            query(':enter',[
                animate(`${leave}ms ease-out`,style(
                    {
                        opacity:1,
                        "transform":"translateY:(0)"
                    }))
            ]),
            query('@*',animateChild())
        ])
    ])
}