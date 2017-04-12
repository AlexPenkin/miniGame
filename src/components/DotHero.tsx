import * as React from "react";
import IDotHero from '../interfaces/IDotHero';

declare function require(name: string): any;
const anime: any = require('animejs');

const move = (target: EventTarget): void => {  
    var animation = anime({
        targets: target,
        left: 200,
        duration: 1000,
        complete: (animation: any) => {
            animation.play();
            animation.reverse();
        }
    })
}

export const DotHero = (props: IDotHero) => (
    <div
        id="dot-hero"
        style={{
            height: `${props.size.height}px`,
            width: `${props.size.width}px`
        }}
        onClick={(e) => move(e.target)}
    >
    </div>
);