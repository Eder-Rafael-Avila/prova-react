import { useState } from 'react';
import './index.scss';

import Header from '../../components/header';

function App() {
  const [tituloUm, setTituloUm] = useState('Seu titulo');
  const [tituloDois, setTituloDois] = useState('Seu titulo');
  const [ocupanteTemp, setOcupanteTemp] = useState('');

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [emailDemo, setEmailDemo] = useState('');
  const [senhaDemo, setSenhaDemo] = useState('');

  function mudarTitulo() {
    setTituloDois(ocupanteTemp);
  }

  function mudarInfos(e) {
    e.preventDefault();

    setEmailDemo(email);
    setSenhaDemo(senha);
  }


  return (
    <main className='page-home'>

      <Header />

      <div className="section">
        <div className="imagem">
          <img src="/assets/images/gatofofo.webp" alt="" />
        </div>
      </div>

      <main className="titulos">
        <section className="digitacao">
          <h2>{tituloUm}</h2>
          <input type="text" 
            value={tituloUm}
            onChange={e => setTituloUm(e.target.value)}
          />
        </section>
        <section className="digitacao botao">
          <h2>{tituloDois}</h2>
          <input type="text"
            value={ocupanteTemp}
            onChange={e => setOcupanteTemp(e.target.value)}
          />

          <button
            onClick={mudarTitulo}
          >
            Mudar Titulo
          </button>
        </section>
      </main>

      <section className='login'>
        <form onSubmit={e => mudarInfos(e)}>
          <h1>Realize seu Login</h1>

          <div className="info">
            <label htmlFor="email">E-mail:</label>
            <input type="email" id='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>

          <div className="info">
            <label htmlFor="password">E-mail:</label>
            <input type="password" id='password'
              value={senha}
              onChange={e => setSenha(e.target.value)}
            />
          </div>

          <div className="registro">

            <div className="group">
              <h2>Email:</h2>
              <p>{emailDemo}</p>
            </div>

            <div className='group'>
              <h2>Senha:</h2>
              <p>{senhaDemo}</p>
            </div>

          </div>

          <button>
            Logar
          </button>

        </form>
      </section>

    </main>
  )
}

export default App
