import './Register.scss';
import RegisterIcon from '../../images/register.svg';

function Register() {
  return (
    <section className='register'>
      <div className='register__container'>
        <img src={RegisterIcon} alt='Register' className='register__icon' />
        <h1 className='register__title'>Crea una cuenta</h1>
        <form className='register__form'>
          <input
            type='text'
            name='name'
            id='name'
            placeholder='Nombre'
            className='register__input'
          />
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Email'
            className='register__input'
          />
          <input
            type='password'
            name='password'
            id='password'
            placeholder='Contraseña'
            className='register__input'
          />
          <button className='button button_accent'>Crear cuenta</button>
        </form>
        <p className='register__notice'>
          Al crear una cuenta o iniciar sesión, aceptas nuestros
          <span className='register_bold'> Términos y Condiciones</span>.
        </p>
      </div>
    </section>
  );
}

export default Register;
