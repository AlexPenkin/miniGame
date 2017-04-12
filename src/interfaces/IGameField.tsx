import ISize from '../interfaces/ISize';
import IDotHero from '../interfaces/IDotHero';

interface IGameField {
  size: ISize,
  dotHero?: IDotHero
}

export default IGameField;