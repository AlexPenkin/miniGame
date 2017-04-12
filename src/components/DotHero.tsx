import * as React from "react";
import IDotHero from '../interfaces/IDotHero';

declare function require(name: string): any;
const anime: any = require('animejs');

export const DotHero = (props: IDotHero) => (
    <div
        id="dot-hero"
        style={{
            height: `${props.size.height}px`,
            width: `${props.size.width}px`,
            backgroundColor: `${props.color}`
        }}        
    >
    </div>
);