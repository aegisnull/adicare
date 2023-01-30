import './Register.scss';
import RegisterIcon from '../../images/register.svg';

function Register() {
  return (
    <section className='register'>
      <div className='register__container'>
        <img src={RegisterIcon} alt='Register' className='register__icon' />
        <h1 className='register__title'>Crea una cuenta</h1>
        <form className='register__form'>
          <div className='register__form__group'>
            <label htmlFor='name'>Nombre</label>
            <input type='text' name='name' id='name' />
          </div>
          <div className='register__form__group'>
            <label htmlFor='email'>Correo electrónico</label>
            <input type='email' name='email' id='email' />
          </div>
          <div className='register__form__group'>
            <label htmlFor='password'>Contraseña</label>
            <input type='password' name='password' id='password' />
          </div>
          <button className='button button_accent'>Crear cuenta</button>
        </form>
      </div>
    </section>
  );
}

export default Register;
