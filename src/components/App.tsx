import * as React from "react";
import { Settings } from "./Settings";
import { GameField } from "./GameField";
import ISize from '../interfaces/ISize';
import IAppState from '../interfaces/IAppState';

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
  
    }

    render() {
        return (
            <div className="App">
                <GameField
                    size={this.state.gameField.size}
                    dotHero={this.state.dotHero}
                />
                {/*<Settings
                    height={this.state.size.height}
                    width={this.state.size.width}
                    handleSize={this.handleSize}
                />*/}
            </div >
        );
    }
}