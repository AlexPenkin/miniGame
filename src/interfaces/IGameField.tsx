import ISize from '../interfaces/ISize';
import IDotHero from '../interfaces/IDotHero';

interface IGameField {
  size: ISize,
  dotHero?: IDotHero
  handleClickOnGameField?(): void
}

export default IGameField;