import './SignIn.scss';
import SignInIcon from '../../images/signin.svg';

function SignIn() {
  return (
    <section className='signin'>
      <div className='signin__container'>
        <img src={SignInIcon} alt='Register' className='signin__icon' />
        <h1 className='signin__title'>Iniciar Sesión</h1>
        <form className='signin__form'>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Email'
            className='signin__input'
          />
          <input
            type='password'
            name='password'
            id='password'
            placeholder='Contraseña'
            className='signin__input'
          />
          <button className='button button_accent signin__button'>Iniciar sesión</button>
        </form>
        <p className='signin__notice'>
          Al crear una cuenta o iniciar sesión, aceptas nuestros
          <span className='signin_bold'> Términos y Condiciones</span>.
        </p>
      </div>
    </section>
  );
}

export default SignIn;
