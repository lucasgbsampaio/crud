import React from 'react';
import { useNavigate } from 'react-router-dom';

import { USER_LOGIN } from '../services/api.js';

import style from './Login.module.css';

export default function Login() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setError(null);
      setLoading(true);

      const { url, options } = USER_LOGIN({
        username,
        password,
      });
      const res = await fetch(url, options);
      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.error);
      }

      window.localStorage.setItem('token', json.token);
      navigate('/products');
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  }

  React.useEffect(() => {
    return () => {
      setError(null);
      setLoading(false);
    };
  }, []);

  return (
    <section className={style.wrapper}>
      <form className={style.container} onSubmit={handleSubmit}>
        <label htmlFor="username">Usuário</label>
        <input
          id="username"
          type="text"
          name="username"
          value={username}
          onChange={({ target }) => {
            setUsername(target.value);
          }}
        />

        <label htmlFor="password">Senha</label>
        <input
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={({ target }) => {
            setPassword(target.value);
          }}
        />

        {!loading ? <button>Enviar</button> : <button disabled>Enviar</button>}

        {error && <div className="error">{error}</div>}
      </form>
    </section>
  );
}
