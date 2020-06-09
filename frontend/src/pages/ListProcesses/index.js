import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';

import './styles.css';

import api from '../../services/api';
import {FiPower, FiTrash2, FiPlus} from 'react-icons/fi';
import ReactTooltip from "react-tooltip";


export default function ListProcesses() {
    const userName = localStorage.getItem('username');
    const accessToken = localStorage.getItem('accessToken');
    const [processes, setProcesses] = useState([]);
    const history = useHistory();

    useEffect(() => {
        api.get('processes', {
            headers: {
                Authorization:  accessToken 
            }
        }).then(response => setProcesses(response.data));
    }, [accessToken]);


    function handleLogOut() {
        localStorage.clear();
        history.push('/');
    }

    function handleProgress() {
        
    }

    return (
        <div className="profile-container">
        <header>
            <span>Bem Vindo, {userName}</span>
            <Link className="button" to="/processes/new">Cadastrar novo processo</Link>
            <button type="button" onClick={handleLogOut}>
                <FiPower size={18} color={"#E02041"}/>     
            </button>
        </header>

        <h1>Processos cadastrados</h1>
        <ul>
            {processes.map(process => (
                <li key={process.id} className="process" onClick={handleProgress}>
                    <strong>Número do processo:</strong>
                    <p>{process.processNumber}</p>
                    <strong>Cliente:</strong>
                    <p>{process.cpfClient}</p>
                    {/* <strong>Valor:</strong>
                    <p>{Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(incident.value)}</p> */}
                    <button type="button" >
                        <FiTrash2 size={20} color="#A8A8B3"/>
                    </button>
                    <button type="button" className="progress" >
                    <ReactTooltip/>
                       <Link to={`/processes/${process.id}/progress`}><FiPlus data-tip="Cadastrar andamento" size={20} color="#A8A8B3"/></Link>
                    </button>
                </li>
            ))}
        </ul>
    </div>
    );
}