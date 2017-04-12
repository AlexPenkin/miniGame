import * as React from "react";
import PropsSettings from '../interfaces/ISettings';

export const Settings = (props: PropsSettings) => (
    <div id="Settings">
        <div className="settings-size">
            <input
                type="number"
                value={props.height}
                onChange={(e) => props.handleSize(e, 'height')}                
            />
             <input
                type="number"
                value={props.width}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.handleSize(e, 'width')}                 
            />
        </div>
    </div>
);