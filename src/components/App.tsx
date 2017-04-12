import * as React from "react";
import { Settings } from "./Settings";
import { GameField } from "./GameField";
import ISize from '../interfaces/ISize';
import IAppState from '../interfaces/IAppState';
import IEventTarget from '../interfaces/IEventTarget';
import IPosition2D from '../interfaces/I2DPosition';

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export default class App extends React.Component<undefined, IAppState> {
    constructor(props: any) {
        super();
        this.handleSize = this.handleSize.bind(this);
        this.state = {
            dotHero: {
                size: {
                    height: 30,
                    width: 30
                },
                position: {
                    x: 0,
                    y: 0
                },
                color: 'green',
                isAnimates: false
            },
            gameField: {
                size: {
                    height: 200,
                    width: 80
                },
            }
        };
    }

    handleSize(event: React.ChangeEvent<HTMLInputElement>, key: string) {          
        var val: string = event.target.value;
        this.setState((prev: IAppState) => {
            const newObj: ISize = prev.gameField.size;
            newObj[key] = val;
            return newObj;
        })
    }

       handleMouseCoordinatesClick(coordinates: I)
    }

    render() {
        return (
            <div className="App">
                <GameField
                    size={this.state.gameField.size}
                    dotHero={this.state.dotHero}
                    
                />
                <Settings
                    height={this.state.gameField.size.height}
                    width={this.state.gameField.size.width}
                    handleSize={this.handleSize}
                />
            </div >
        );
    }
}