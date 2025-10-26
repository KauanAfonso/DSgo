import logo from '../assets/logo.jpg';
import { useNavigate } from 'react-router-dom';


/*

componente inicial que exibe a tela de inicio com o logo e um botão para entrar na aplicação.

*/
export function Inicial() {
    const navigate =useNavigate();

  return (
    <main className="inicial">
      <section className='titleSection'>
        <h2>Quiz Acadêmico</h2>
        <h3>Conhecimentos Técnicos</h3>
      </section>

      <img src={logo} className="logo" alt="Logo DS GO"  />
     
      <button onClick={() => navigate('/dsgo')} className='entrar'>
        Entrar
      </button>
    </main>
  );
}
