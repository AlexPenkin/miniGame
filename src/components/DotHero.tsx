import * as React from "react";
import IDotHero from '../interfaces/IDotHero';
import Animatable from '../business/Animatable';

declare function require(name: string): any;

let dotHero: Animatable;
let dotHeroRef: Element;

const handleClickOnField = (ref: any): void => {
    if (!dotHero) {
        dotHero = new Animatable(dotHeroRef);
    } 
    dotHero.changeColor('red');
}

export const DotHero = (props: IDotHero) => (
    <div
        id="dot-hero"
        ref={ref => dotHeroRef = ref}
        style={{
            height: `${props.size.height}px`,
            width: `${props.size.width}px`,
            backgroundColor: `${props.color}`
        }}        
    >
    </div>
);