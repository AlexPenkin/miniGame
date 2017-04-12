import * as React from "react";
import IGameField from '../interfaces/IGameField';
import { DotHero } from "./DotHero";
import IPosition2D from '../interfaces/I2DPosition';
import IAnimeJS from '../interfaces/IAnimeJS';

declare function require(name: string): any;
const anime: any = require('animejs');
var anims: IAnimeJS[] = [];
const move = (coordinates: IPosition2D): void => {
    // Stops the animation if that exist.  
    if (anims[0]) {
        anims[0].pause();
    }
    // Creates new animation and set first in array.
    anims[0] = anime({
        targets: '#dot-hero',
        top: coordinates.y,
        left: coordinates.x,
        duration: 1000,
    });
}


export const GameField = (props: IGameField) => {

    let refer: any;
    return (
        <div
            id="game"
            style={{
                height: props.size.height + 'px',
                width: props.size.width + '%'
            }}
            onClick={(e): void => {
                const coordinates: IPosition2D = {
                    x: e.clientX - props.dotHero.size.width / 2,
                    y: e.clientY - props.dotHero.size.height / 2
                }
                move(coordinates);
            }}
        >
            <DotHero
                size={props.dotHero.size}
                position={props.dotHero.position}
                isAnimates={props.dotHero.isAnimates}
                color={props.dotHero.color}
            />
        </div>
    )
}