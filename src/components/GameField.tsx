import * as React from "react";
import IGameField from '../interfaces/IGameField';
import { DotHero } from "./DotHero";
import IPosition2D from '../interfaces/I2DPosition';

let dotHeroRef: Element = null;
const getRef = (ref: Element) => {
    dotHeroRef = ref;
}

export class GameField extends React.Component<IGameField, undefined> {

    shouldComponentUpdate(nextProps: IGameField) {
        return JSON.stringify(this.props.size) === JSON.stringify(nextProps.size);
    }

    render() {
        return (
            <div
                id="game"
                style={{
                    height: this.props.size.height + 'px',
                    width: this.props.size.width + '%'
                }}
                onClick={(e): void => {
                    const coordinates: IPosition2D = {
                        x: e.clientX - this.props.dotHero.size.width / 2,
                        y: e.clientY - this.props.dotHero.size.height / 2
                    }
                    this.props.handleClickOnGameField(coordinates);
                }
                }
            >
                <DotHero
                    size={this.props.dotHero.size}
                    position={this.props.dotHero.position}
                    isAnimates={this.props.dotHero.isAnimates}
                    color={this.props.dotHero.color}
                />
            </div>
        )
    }
}