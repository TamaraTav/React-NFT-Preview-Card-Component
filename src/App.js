import './App.css';
import './reset.css';
import { ReactComponent as IconClock } from './images/icon-clock.svg';
import { ReactComponent as IconEthereum } from './images/icon-ethereum.svg';
import { ReactComponent as IconView } from './images/icon-view.svg';
import imageAvatar from './images/image-avatar.png';
import imageEquilibrium from './images/image-equilibrium.jpg';

function App() {
  return (
    <div className='root'>
      <div className='image-container'>
        <img className = 'equilibrium' src = {imageEquilibrium} alt = "equilibrium image"/>
        <div className='hover'>
          <IconView className='view'/>
        </div>
      </div>

      <h1 className='title'>Equilibrium #3429</h1>
      <p className='text'>Our Equilibrium collection promotes balance and calm.</p>
    
      <div className='info'>
        <div className='eth'>
          <IconEthereum/>
          <p>0.041 ETH</p>
        </div>
        <div className='time'>
          <IconClock/>
          <p>3 days left</p>
        </div>
      </div>

      <div className='avatar'>
        <img src = {imageAvatar} alt = "avatar"></img>
        <p className='avatar-text'>Creation of <span>Jules Wyvern</span></p>
      </div>
    </div>
  )
}

export default App;
