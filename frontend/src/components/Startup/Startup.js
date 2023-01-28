import InfirmaryIcon from '../../images/infirmary.gif';
import Logo from '../../images/logo.svg';
import './Startup.scss';

function Startup() {
  return (
    <div className='startup'>
      <img src={Logo} className='startup__logo' alt='Logo' />
      <img src={InfirmaryIcon} alt='Infirmary' className='startup__icon' />
      <h1 className='startup__title'>
        Tu <span className='startup__title_bold'>agenda</span> de pacientes personal
      </h1>
      <div className='startup__buttons'>
        <button className='button'>Iniciar sesión</button>
        <button className='button button_accent'>Registrarse</button>
      </div>
    </div>
  );
}

export default Startup;
