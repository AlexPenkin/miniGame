import * as React from "react";
import IGameField from '../interfaces/IGameField';
import { DotHero } from "./DotHero";
import IPosition2D from '../interfaces/I2DPosition';
declare function require(name: string): any;
declare let offsetX: number;
declare let offsetY: number;
declare let nativeEvent: MouseEvent;

const anime: any = require('animejs');

var anims: any = [];
const move = (coordinates: IPosition2D): void => {
    var animation = anime({
        targets: '#dot-hero',
        top: coordinates.y,
        left: coordinates.x,
        duration: 600
    })

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
                    x: e.nativeEvent.offsetX,
                    y: e.nativeEvent.offsetY
                }               
                move(coordinates);
            }}

        >
            <DotHero
                size={props.dotHero.size}
                position={props.dotHero.position}
                isAnimates={props.dotHero.isAnimates}
            />
        </div>
    )
}