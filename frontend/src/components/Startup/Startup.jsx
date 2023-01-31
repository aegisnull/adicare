import { Link } from 'react-router-dom';
import Logo from '../../images/logo.svg';
import SplashIcon from '../../images/intro.svg';
import './Startup.scss';

function Startup() {
  return (
    <div className='startup'>
      <img src={Logo} className='startup__logo' alt='Logo' />
      <img src={SplashIcon} alt='Infirmary' className='startup__icon' />
      <h1 className='startup__title'>Toma el control</h1>
      <p className='startup__subtitle'>
        Tu agenda de pacientes en un solo lugar y siempre bajo control
      </p>
      <div className='startup__buttons'>
        <Link to='/signin'>
          <button className='button'>Iniciar sesión</button>
        </Link>
        <Link to='/registro'>
          <button className='button button_accent'>Registrarse</button>
        </Link>
      </div>
    </div>
  );
}

export default Startup;
