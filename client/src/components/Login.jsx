import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

const Login = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/login', { email, password });
      localStorage.setItem('token', res.data.token);
      setUser({ id: res.data.userId, email });
      axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`;
      navigate('/properties');
    } catch (err) {
      setError('Login failed. Check credentials.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 card">
      <h2 className="text-xl font-bold mb-4 text-primary">{t('login')}</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            required
          />
        </div>
        <button type="submit" className="btn-primary w-full">
          {t('login')}
        </button>
      </form>
    </div>
  );
};

export default Login;

