import * as React from "react";
import IGameField from '../interfaces/IGameField';
import { DotHero } from "./DotHero";


let dotHeroRef: Element = null;
let coordinates: IPosition2D ;

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
                 coordinates = {
                    x: e.clientX - props.dotHero.size.width / 2,
                    y: e.clientY - props.dotHero.size.height / 2
                }
                {/*console.log(dotHeroRef)
                dotHeroRef.dotHero.move(coordinates);*/}
            }}
        >
            <DotHero            
                size={props.dotHero.size}
                position={coordinates}
                isAnimates={props.dotHero.isAnimates}
                color={props.dotHero.color}                
            />
        </div>
    )
}