import IGameField from '../interfaces/IGamefield';
import IDotHero from '../interfaces/IDotHero';

interface IAppState {    
    dotHero: IDotHero,
    gameField: IGameField
}
export default IAppState;