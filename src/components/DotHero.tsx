import * as React from "react";
import * as ReactDOM from "react-dom";
import IDotHero from '../interfaces/IDotHero';
import Animatable from '../business/Animatable';

declare function require(name: string): any;
let dotHero: Animatable = null;

export const DotHero = (props: IDotHero) => {
    console.log(dotHero)
    setTimeout(() => {
    if (!dotHero) { dotHero = new Animatable('dot-hero'); }   
    }, 200)    
    dotHero && dotHero.move(props.position);    
    return (
        <div
            id="dot-hero"
            ref={ref => {

            }}
            style={{
                height: `${props.size.height}px`,
                width: `${props.size.width}px`,
                backgroundColor: `${props.color}`
            }}
        >
        </div>
    )
};