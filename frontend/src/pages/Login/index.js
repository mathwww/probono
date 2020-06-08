import React, {useState} from 'react';
import {FiLogIn} from 'react-icons/fi';
import {Link, useHistory} from 'react-router-dom';

import './styles.css';

import api from '../../services/api';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    async function handleLogin(e) {
        e.preventDefault();

        try{
            const response = await api.post('sessions', { email, password } );
            // localStorage.setItem('ongId', id);
            // localStorage.setItem('ongName', response.data.name);
            localStorage.setItem('username', response.data.name);
            history.push('/profile');
        }catch(err){
            alert('Falha no login. Tente novamente');
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                {/* <img src={logoImg} alt="Be Ther Hero"/> */}
                <form onSubmit={handleLogin}>
                    <h1>Faça login</h1>
                    <input placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    
                    <input placeholder="Senha"
                        value={password}
                        type="password"
                        onChange={e => setPassword(e.target.value)}
                        style={{marginTop: "5px"}}
                    />
                    <button className="button" type="submit">Entrar</button>
                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color={"#E02041"} />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            {/* <img src={heroesImg} alt="Heroes"/> */}
        </div>
    );
}