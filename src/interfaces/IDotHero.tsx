import ISize from '../interfaces/ISize';
import IPosition2D from '../interfaces/I2DPosition';

interface IDotHero {
   size: ISize,
   position: IPosition2D,
   color: string,
   isAnimates: boolean,
   handleClickOnGameField?(): void
}

export default IDotHero;