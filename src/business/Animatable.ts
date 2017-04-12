import IAnimeJS from '../interfaces/IAnimeJS';
import IPosition2D from '../interfaces/I2DPosition';

declare function require(name: string): any;
const anime: any = require('animejs');

class Animatable {
    // Variables
    private element: Element;
    private animations: IAnimeJS[] = []

    //Constructor
    public constructor(id: string) {
        this.element = document.querySelector(`#${id}`);
        console.log(this.element)
    }

    // Methods
    public move(coordinates: IPosition2D): void {
        // Stops the animation if that exist.  
        if (this.animations[0]) {
            this.animations[0].pause();
        }
        // Creates new animation and set first in array.
        this.animations[0] = anime({
            targets: this.element,
            top: coordinates.y,
            left: coordinates.x,
            duration: 1000,
        });
    }

    public changeColor(color: string): void {
        if (this.element) {
            console.log(this.element.style)
            this.element.style.backgroundColor = color;
        }

    }
}

export default Animatable;


